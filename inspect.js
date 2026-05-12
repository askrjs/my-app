import { chromium } from 'playwright';

(async () => {
    const browser = await chromium.launch();
    const results = [];
    const widths = [1280, 800, 375];

    for (const width of widths) {
        const page = await browser.newPage();
        await page.setViewportSize({ width, height: 800 });
        try {
            await page.goto('http://localhost:5174/docs', { waitUntil: 'networkidle' });
        } catch (e) {
            console.error('Failed to load page:', e.message);
            await page.close();
            continue;
        }
        
        // Additional wait to be safe
        await page.waitForTimeout(2000);

        const data = await page.evaluate(() => {
            const getBox = (sel) => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const r = el.getBoundingClientRect();
                return { x: r.x, y: r.y, width: r.width, height: r.height };
            };

            const getComputed = (sel) => {
                const el = document.querySelector(sel);
                if (!el) return null;
                const style = window.getComputedStyle(el);
                return {
                    display: style.display,
                    justifyContent: style.justifyContent,
                    width: style.width,
                    height: style.height,
                    position: style.position
                };
            };

            const sidebar = document.querySelector('sidebar, [class*="sidebar"]');
            
            return {
                viewportWidth: window.innerWidth,
                sidebarAttributes: {
                    'data-icon-collapsed': sidebar?.getAttribute('data-icon-collapsed'),
                    'data-responsive-collapsed': sidebar?.getAttribute('data-responsive-collapsed')
                },
                boundingBoxes: {
                    'shell-nav': getBox('shell-nav, [class*="shell-nav"]'),
                    'sidebar': getBox('sidebar, [class*="sidebar"]'),
                    'sidebar-shell': getBox('[class*="sidebar-shell"]'),
                    'sidebar-rail-toggle': getBox('[class*="sidebar-rail-toggle"]'),
                    'first-brand-link': getBox('nav a[class*="brand"], [class*="brand"] a'),
                    'first-nav-link': getBox('nav a, [class*="nav"] a'),
                    'first-nav-icon': getBox('nav a i, [class*="nav"] a svg, [class*="nav"] a [class*="icon"]'),
                    'first-nav-label': getBox('nav a span, [class*="nav"] a [class*="label"]')
                },
                computedStyles: {
                   'rail-toggle': getComputed('[class*="sidebar-rail-toggle"]'),
                   'first-nav-link': getComputed('nav a, [class*="nav"] a'),
                   'first-nav-label': getComputed('nav a span, [class*="nav"] a [class*="label"]')
                }
            };
        });
        results.push(data);
        await page.close();
    }

    console.log(JSON.stringify(results, null, 2));
    await browser.close();
})();
