import { Link } from '@askrjs/askr/router';
import { ArrowRightIcon, BookOpenIcon, BoxesIcon, SparklesIcon } from '@askrjs/lucide';
import { Button } from '@askrjs/themes/controls';
import { Block, Section, Stack } from '@askrjs/themes/layouts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@askrjs/themes/surfaces';
import PageHeader from '../../components/shared/page-header';

export default function DocsHome() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Docs"
          title="One directory, its own layout mode."
          description="This section proves the app can switch from a top-nav product shell to a left-nav docs shell without changing the underlying theme primitives."
          headingLevel="h1"
        >
          <Button asChild variant="primary">
            <Link href="/docs/getting-started">
              Start reading <ArrowRightIcon size={16} aria-hidden="true" />
            </Link>
          </Button>
        </PageHeader>
      </Section>

      <Section>
        <Block class="docs-page__grid" size="sm" gap="4">
          <Card variant="raised">
            <CardHeader>
              <CardTitle>
                <BookOpenIcon size={16} aria-hidden="true" /> Overview
              </CardTitle>
              <CardDescription>
                Explain why docs lives in its own route group and shell.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The left nav stays stable while the content area switches
                between overview, getting-started, and component pages.
              </p>
            </CardContent>
          </Card>

          <Card variant="raised">
            <CardHeader>
              <CardTitle>
                <SparklesIcon size={16} aria-hidden="true" /> Getting started
              </CardTitle>
              <CardDescription>
                Show the route, layout, and theme split directly in the app.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The guide page explains the layered shell: one root theme, one
                product shell, and one docs shell.
              </p>
            </CardContent>
          </Card>

          <Card variant="raised">
            <CardHeader>
              <CardTitle>
                <BoxesIcon size={16} aria-hidden="true" /> Components
              </CardTitle>
              <CardDescription>
                Reuse the existing component demo as a docs leaf route.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                The content stays the same, but the surrounding chrome now reads
                like documentation rather than a standalone product page.
              </p>
            </CardContent>
          </Card>
        </Block>
      </Section>
    </>
  );
}