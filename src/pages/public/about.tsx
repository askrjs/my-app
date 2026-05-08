import { BarChart3Icon, CompassIcon, PaletteIcon } from '@askrjs/lucide';
import { Block, Section } from '@askrjs/themes/layouts';
import { Card, CardDescription, CardHeader, CardTitle } from '@askrjs/themes/surfaces';
import PageHeader from '../../components/shared/page-header';

export default function About() {
  return (
    <>
      <Section>
        <PageHeader
          class="about-hero"
          eyebrow="About this app"
          title="A starter-sized demo, not a framework tour."
          description="The goal is to show how an Askr app can feel cohesive with a small set of routes, components, and charts."
          headingLevel="h1"
        />
      </Section>

      <Section>
        <PageHeader
          eyebrow="Design direction"
          title="Keep the pages useful, then stop."
          description="Each page demonstrates one narrow idea instead of trying to document every feature in the workspace."
          headingLevel="h2"
        />

        <Block size="sm" gap="4">
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="icon-badge">{<CompassIcon size={16} />}</div>
              <CardTitle>Focused scope</CardTitle>
              <CardDescription>
                A few product routes plus one docs section keep the navigation
                clear and the content intentionally small.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="icon-badge">{<PaletteIcon size={16} />}</div>
              <CardTitle>Shared shell</CardTitle>
              <CardDescription>
                askr-themes provides both the product shell and the docs shell
                so the app can stay visually consistent.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="icon-badge">
                {<BarChart3Icon size={16} />}
              </div>
              <CardTitle>Real packages</CardTitle>
              <CardDescription>
                The demos use the actual askr-ui and askr-charts packages from
                this workspace.
              </CardDescription>
            </CardHeader>
          </Card>
        </Block>
      </Section>

      <Section>
        <Card class="about-summary" variant="raised">
          <CardHeader>
            <CardTitle>What this app is not</CardTitle>
            <CardDescription class="section-header-description">
              It is not a component catalog, a style guide, or a complete
              charting showcase.
            </CardDescription>
          </CardHeader>
          <p>
            The pages are here to prove the app shape: landing copy, a few
            reactive controls, and interactive charts that still feel
            lightweight.
          </p>
        </Card>
      </Section>
    </>
  );
}
