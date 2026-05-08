import { BookOpenIcon, LayoutGridIcon, SparklesIcon } from '@askrjs/lucide';
import { Block, Inline } from '@askrjs/themes/layouts';
import { Nav, NavLink } from '@askrjs/themes/navs';
import { Card, CardDescription, CardHeader, CardTitle, Separator } from '@askrjs/themes/surfaces';

export default function DocsTabs() {
  return (
    <>
      <Block gap="3">
        <div>
          <Inline as="span" align="center" gap="2">
            <LayoutGridIcon size={16} />
            <h2>Tabs Example</h2>
          </Inline>
          <p>Peer sections where the current route should read like a selected pane.</p>
        </div>
        <Block gap="2">
          <p>
            The important part is that these links now target real routed partials.
            The selected tab, the rendered child content, and the URL all move
            together while the page shell stays shared.
          </p>
          <Nav aria-label="Component pages" variant="tabs">
            <NavLink href="/docs/components" match="exact">
              <Inline as="span" align="center" gap="1">
                <BookOpenIcon size={14} />
                <span>Overview</span>
              </Inline>
            </NavLink>
            <NavLink href="/docs/components/tabs" match="exact">
              <Inline as="span" align="center" gap="1">
                <LayoutGridIcon size={14} />
                <span>Tabs</span>
              </Inline>
            </NavLink>
            <NavLink href="/docs/components/pills" match="exact">
              <Inline as="span" align="center" gap="1">
                <SparklesIcon size={14} />
                <span>Pills</span>
              </Inline>
            </NavLink>
          </Nav>
          <Card variant="outline">
            <CardHeader>
              <CardTitle>Tabs should express sibling destinations</CardTitle>
              <CardDescription>
                The page host owns the shared shell while the leaf route owns the
                selected content. That keeps the registration surface route-shaped
                instead of closure-shaped.
              </CardDescription>
            </CardHeader>
          </Card>
        </Block>
      </Block>

      <Separator decorative />

      <Block gap="3">
        <h2>Why this is better</h2>
        <p>
          The overview stays an overview, the tabs leaf stays a tabs leaf, and
          the repeated page framing is gone because the router now has a real
          page-partial layer.
        </p>
      </Block>
    </>
  );
}