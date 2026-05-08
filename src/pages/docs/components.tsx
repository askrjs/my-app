import { state } from '@askrjs/askr';
import { currentRoute } from '@askrjs/askr/router';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from '@askrjs/ui/composites/accordion';
import { Input } from '@askrjs/ui/primitives/input';
import { Toggle } from '@askrjs/ui/primitives/toggle';
import {
  BookOpenIcon,
  LayoutGridIcon,
  ListIcon,
  SparklesIcon,
  ToggleLeftIcon,
} from '@askrjs/lucide';
import { Block, Inline, Section } from '@askrjs/themes/layouts';
import { Nav, NavLink } from '@askrjs/themes/navs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@askrjs/themes/surfaces';
import Counter from '../../components/examples/counter';
import PageHeader from '../../components/shared/page-header';

function getCurrentDocsPath(): string {
  try {
    return currentRoute().path || '/docs/components';
  } catch {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/docs/components';
    }

    return '/docs/components';
  }
}

function getComponentFamilyContent(pathname: string): {
  title: string;
  description: string;
} {
  if (pathname.startsWith('/docs/components/navigation')) {
    return {
      title: 'Navigation routes keep parent tabs active',
      description:
        'This section uses prefix matching so the Navigation tab stays selected while you drill into nested pages like navs and pills.',
    };
  }

  if (pathname.startsWith('/docs/components/forms')) {
    return {
      title: 'Forms can have their own peer route',
      description:
        'A separate route family lets a tabs-style Nav read like a section switcher instead of a one-off code sample.',
    };
  }

  return {
    title: 'All components acts like the route index',
    description:
      'The exact-match index route shows the overview state, then yields to peer tabs as soon as you move into another component family.',
  };
}

function getNavigationDetailContent(pathname: string): {
  title: string;
  description: string;
} {
  if (pathname.startsWith('/docs/components/navigation/pills')) {
    return {
      title: 'Pills work well for lighter subsection switches',
      description:
        'This deeper route proves the pills variant can still be route-aware without pretending to be the top-level section navigation.',
    };
  }

  if (pathname.startsWith('/docs/components/navigation/navs')) {
    return {
      title: 'Navs overview focuses on the primitive itself',
      description:
        'The route changes inside the same card, so the active pill and the descriptive content move together instead of showing a stale page body.',
    };
  }

  return {
    title: 'Overview is exact, children inherit the parent tab',
    description:
      'The overview pill uses exact matching while the surrounding Navigation tab stays active across nested descendant routes.',
  };
}

export default function Components() {
  const name = state('');
  const bold = state(false);
  const currentPath = getCurrentDocsPath();
  const componentFamily = getComponentFamilyContent(currentPath);
  const navigationDetail = getNavigationDetailContent(currentPath);

  return (
    <>
      <Section key="components-header">
        <PageHeader
          class="components-hero"
          eyebrow="Docs / Components"
          title="A few controls, a little state, documented in context."
          description="This page keeps the demo intentionally small: themed navs, accordion, and one shared state value driving two controls inside the docs shell."
          headingLevel="h1"
        />
      </Section>

      <Counter key="components-counter" />

      <Section key="components-controls">
        <Block size="md" gap="4">
          <Card class="showcase-card" variant="raised">
            <CardHeader>
              <CardTitle>
                <Inline as="span" align="center" gap="2">
                  <LayoutGridIcon size={16} />
                  <span>Nav</span>
                </Inline>
              </CardTitle>
              <CardDescription>
                The same route-aware Nav surface can be styled like tabs or pills,
                including nested route trees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Block gap="4">
                <Block gap="2">
                  <p>
                    <strong>Tabs:</strong> useful for peer sections where the current
                    route should read like a selected pane. These links now stay
                    inside the components route family, so the demo content changes
                    with the active tab.
                  </p>
                  <Nav aria-label="Component families" variant="tabs">
                    <NavLink href="/docs/components" match="exact">
                      <Inline as="span" align="center" gap="1">
                        <BookOpenIcon size={14} />
                        <span>All components</span>
                      </Inline>
                    </NavLink>
                    <NavLink href="/docs/components/navigation">
                      <Inline as="span" align="center" gap="1">
                        <LayoutGridIcon size={14} />
                        <span>Navigation</span>
                      </Inline>
                    </NavLink>
                    <NavLink href="/docs/components/forms">
                      <Inline as="span" align="center" gap="1">
                        <SparklesIcon size={14} />
                        <span>Forms</span>
                      </Inline>
                    </NavLink>
                  </Nav>
                  <Card variant="outline">
                    <CardHeader>
                      <CardTitle>{componentFamily.title}</CardTitle>
                      <CardDescription>{componentFamily.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Block>

                <Block gap="2">
                  <p>
                    <strong>Pills:</strong> useful for lighter intra-app filters or
                    subsections that still benefit from active-route styling. This
                    example follows the nested navigation routes so each pill swaps
                    the explanatory content below it.
                  </p>
                  <Nav aria-label="Navigation component pages" variant="pills">
                    <NavLink href="/docs/components/navigation" match="exact">Overview</NavLink>
                    <NavLink href="/docs/components/navigation/navs">Navs</NavLink>
                    <NavLink href="/docs/components/navigation/pills">Pills</NavLink>
                  </Nav>
                  <Card variant="outline">
                    <CardHeader>
                      <CardTitle>{navigationDetail.title}</CardTitle>
                      <CardDescription>{navigationDetail.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Block>

                <Block gap="2">
                  <p>
                    <strong>Complex routes:</strong> prefix matching lets a parent nav
                    item stay active across deeper sections such as
                    <code> /docs/components/navigation/pills</code>.
                  </p>
                  <Nav aria-label="Component families" variant="tabs">
                    <NavLink href="/docs/components" match="exact">
                      All components
                    </NavLink>
                    <NavLink href="/docs/components/navigation">
                      Navigation
                    </NavLink>
                    <NavLink href="/docs/components/forms">
                      Forms
                    </NavLink>
                  </Nav>
                  <Nav aria-label="Navigation component pages" variant="pills">
                    <NavLink href="/docs/components/navigation" match="exact">
                      Overview
                    </NavLink>
                    <NavLink href="/docs/components/navigation/navs">
                      Navs
                    </NavLink>
                    <NavLink href="/docs/components/navigation/pills">
                      Pills
                    </NavLink>
                  </Nav>
                </Block>
              </Block>
            </CardContent>
          </Card>

          <Card class="showcase-card" variant="raised">
            <CardHeader>
              <CardTitle>
                <Inline as="span" align="center" gap="2">
                  <ListIcon size={16} />
                  <span>Accordion</span>
                </Inline>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="size">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Why keep this page small?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <p>
                      The goal is to show a believable app surface, not every
                      control in the design system.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="reactivity">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Where is the reactivity?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <p>
                      The counter and the input row both update live from local
                      state.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="styling">
                  <AccordionHeader>
                    <AccordionTrigger>
                      What provides the styling and nav behavior?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <p>
                      The components stay headless while askr-themes supplies
                      the skin, layout primitives, and nav helpers like
                      <code> NavLink</code> matching.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="navlink-match">
                  <AccordionHeader>
                    <AccordionTrigger>
                      Why does Overview stop highlighting on this page?
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <p>
                      The docs sidebar uses <code>match="exact"</code> for the
                      overview link, while deeper section links keep the default
                      prefix matching. That lets one nav mix both behaviors.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </Block>
      </Section>

      <Section key="components-shared-state">
        <Card class="showcase-card" variant="raised">
          <CardHeader>
            <CardTitle>
              <Inline as="span" align="center" gap="2">
                <ToggleLeftIcon size={16} />
                <span>Shared state</span>
              </Inline>
            </CardTitle>
            <CardDescription>
              One state value drives both the toggle and the preview text.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="example-controls">
              <Toggle
                pressed={bold()}
                onPress={() => bold.set((value) => !value)}
              >
                Bold
              </Toggle>
              <Input
                placeholder="Name"
                onInput={(event: Event) =>
                  name.set((event.target as HTMLInputElement).value)
                }
              />
            </div>
            <p style={`font-weight: ${bold() ? '700' : '400'}`}>
              {name() ? `Hi, ${name()}!` : 'Type a name to update the preview.'}
            </p>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
