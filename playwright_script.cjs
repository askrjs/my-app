const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  try {
    await page.goto('http://localhost:5174/docs');
    
    const sidebarRailToggle = '[data-slot=sidebar-rail-toggle]';
    await page.click(sidebarRailToggle);
    await page.waitForTimeout(500);

    const getBounds = async (selector) => {
      const el = await page.$(selector);
      if (!el) return null;
      const box = await el.boundingBox();
      return box;
    };

    const getStyle = async (selector) => {
        return await page.evaluate((sel) => {
            const el = document.querySelector(sel);
            if (!el) return null;
            const style = window.getComputedStyle(el);
            return {
                width: style.width,
                height: style.height,
                justifyContent: style.justifyContent,
                position: style.position,
                paddingInlineStart: style.paddingInlineStart,
                paddingInlineEnd: style.paddingInlineEnd
            };
        }, selector);
    };

    const getCenterX = (box) => box ? box.x + box.width / 2 : null;

    const sidebar = await page.$('[data-slot=sidebar]');
    const sidebarAttrs = await page.evaluate(el => {
        if (!el) return null;
        const attrs = {};
        for (const attr of el.attributes) {
            attrs[attr.name] = attr.value;
        }
        return attrs;
    }, sidebar);

    const navLinksSelector = 'a[data-slot=sidebar-menu-button]';
    const navIconsSelector = 'a[data-slot=sidebar-menu-button] svg';
    const navLabelsSelector = 'a[data-slot=sidebar-menu-button] span';

    const results = {
        sidebarAttributes: sidebarAttrs,
        boundingBoxes: {
            'shell-nav': await getBounds('[data-slot=shell-nav]'),
            'sidebar': await getBounds('[data-slot=sidebar]'),
            'sidebar-shell': await getBounds('[data-slot=sidebar-shell]'),
            'sidebar-rail-toggle': await getBounds(sidebarRailToggle),
            'rail-toggle-icon': await getBounds(`${sidebarRailToggle} svg`),
            'brand-link': await getBounds('[data-slot=sidebar-brand]'),
            'brand-icon': await getBounds('[data-slot=sidebar-brand] svg'),
            'nav-links': await page.$$eval(navLinksSelector, els => els.map(el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; })),
            'nav-icons': await page.$$eval(navIconsSelector, els => els.map(el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; })),
            'nav-labels': await page.$$eval(navLabelsSelector, els => els.map(el => { const r = el.getBoundingClientRect(); return { x: r.x, y: r.y, width: r.width, height: r.height }; }))
        },
        computedStyles: {
            'sidebar-rail-toggle': await getStyle(sidebarRailToggle),
            'brand-link': await getStyle('[data-slot=sidebar-brand]'),
            'nav-links': await page.$$eval(navLinksSelector, (els) => els.map(el => {
                const style = window.getComputedStyle(el);
                return {
                    width: style.width,
                    height: style.height,
                    justifyContent: style.justifyContent,
                    position: style.position,
                    paddingInlineStart: style.paddingInlineStart,
                    paddingInlineEnd: style.paddingInlineEnd
                };
            }))
        }
    };

    results.centerXs = {
        'rail-toggle': getCenterX(results.boundingBoxes['sidebar-rail-toggle']),
        'rail-toggle-icon': getCenterX(results.boundingBoxes['rail-toggle-icon']),
        'brand-link': getCenterX(results.boundingBoxes['brand-link']),
        'brand-icon': getCenterX(results.boundingBoxes['brand-icon']),
        'nav-links': results.boundingBoxes['nav-links'].map(getCenterX),
        'nav-icons': results.boundingBoxes['nav-icons'].map(getCenterX)
    };

    console.log(JSON.stringify(results));
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
})();
