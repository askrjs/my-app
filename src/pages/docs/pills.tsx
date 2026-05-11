import { BookOpenIcon, LayoutGridIcon, SparklesIcon } from '@askrjs/lucide';
import { Block, Inline } from '@askrjs/themes/layouts';
import { Nav, NavLink } from '@askrjs/themes/navs';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from '@askrjs/themes/surfaces';

export default function DocsPills() {
  return (
    <>
      <Block gap="3">
        <div>
          <Inline as="span" align="center" gap="2">
            <SparklesIcon size={16} />
            <h2>Pills Example</h2>
          </Inline>
          <p>
            Route-aware pills work best when they describe real subsection
            pages.
          </p>
        </div>
        <Block gap="2">
          <p>
            The lighter pills treatment is still route-aware, but it no longer
            needs a repeated page frame. The host owns the shell and this leaf
            owns the pills-specific content.
          </p>
          <Nav aria-label="Component pages" variant="pills">
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
          <Card>
            <CardHeader>
              <CardTitle>Pills should describe real subsection state</CardTitle>
              <CardDescription>
                The route table stays declarative while the repeated docs
                framing disappears into the page host.
              </CardDescription>
            </CardHeader>
          </Card>
        </Block>
      </Block>

      <Separator decorative />

      <Block gap="3">
        <h2>Why this is better</h2>
        <p>
          Overview, tabs, and pills are still proper sibling destinations, but
          they now share one parent page instead of each carrying a copy of the
          same docs scaffolding.
        </p>
      </Block>
    </>
  );
}
