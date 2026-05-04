import { BarChart3Icon, CompassIcon, PaletteIcon } from '@askrjs/lucide';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  Section,
} from '@askrjs/themes/components';
import PageHeader from '../components/page-header';

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

        <Grid minItemWidth="14rem" gap="4">
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="feature-card__icon">{<CompassIcon size={16} />}</div>
              <CardTitle>Focused scope</CardTitle>
              <CardDescription>
                Four routes keep the navigation clear and the content
                intentionally small.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="feature-card__icon">{<PaletteIcon size={16} />}</div>
              <CardTitle>Shared shell</CardTitle>
              <CardDescription>
                askr-themes provides the structure so the app can stay visually
                consistent.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card class="about-card" variant="raised">
            <CardHeader>
              <div class="feature-card__icon">
                {<BarChart3Icon size={16} />}
              </div>
              <CardTitle>Real packages</CardTitle>
              <CardDescription>
                The demos use the actual askr-ui and askr-charts packages from
                this workspace.
              </CardDescription>
            </CardHeader>
          </Card>
        </Grid>
      </Section>

      <Section>
        <Card class="about-summary" variant="raised">
          <CardHeader>
            <CardTitle>What this app is not</CardTitle>
            <CardDescription class="page-header-description">
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
