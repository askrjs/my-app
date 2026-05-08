import { Link } from '@askrjs/askr/router';
import { ArrowRightIcon } from '@askrjs/lucide';
import { Button } from '@askrjs/themes/controls';
import { Block, Section, Stack } from '@askrjs/themes/layouts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@askrjs/themes/surfaces';
import PageHeader from '../../components/shared/page-header';

export default function DocsGettingStarted() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Getting started"
          title="Two layout modes, one theme foundation."
          description="The root layout owns theme state, the product pages use the top nav shell, and the docs pages use the sidebar shell."
          headingLevel="h1"
        />
      </Section>

      <Section>
        <Stack class="docs-step-list" gap="4">
          <Card variant="raised">
            <CardHeader>
              <CardTitle>1. Root theme provider</CardTitle>
              <CardDescription>
                Theme state now lives above both layout groups.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                That keeps light and dark mode consistent whether a route lives
                under <code>/</code> or <code>/docs</code>.
              </p>
            </CardContent>
          </Card>

          <Card variant="raised">
            <CardHeader>
              <CardTitle>2. Product shell routes</CardTitle>
              <CardDescription>
                Home, charts, and about stay in the top-nav layout.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Those routes read like application pages, not documentation.
              </p>
            </CardContent>
          </Card>

          <Card variant="raised">
            <CardHeader>
              <CardTitle>3. Docs shell routes</CardTitle>
              <CardDescription>
                The docs section gets a dedicated left nav and narrower reading
                measure.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Block size="sm" gap="3">
                <p>
                  Use this section to prove route grouping, shell composition,
                  and content hierarchy.
                </p>
                <Button asChild variant="secondary">
                  <Link href="/docs/components">
                    Open the component docs <ArrowRightIcon size={16} aria-hidden="true" />
                  </Link>
                </Button>
              </Block>
            </CardContent>
          </Card>
        </Stack>
      </Section>
    </>
  );
}