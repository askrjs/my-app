import { Link } from '@askrjs/askr/router';
import { ArrowRightIcon } from '@askrjs/askr-lucide/icons/arrow-right';
import { BarChart3Icon } from '@askrjs/askr-lucide';
import { BoxesIcon } from '@askrjs/askr-lucide';
import { LayoutTemplateIcon } from '@askrjs/askr-lucide';
import { Grid, Section } from '@askrjs/askr-themes/components';
import FeatureCard from '../components/feature-card';
import Hero, {
  HeroActions,
  HeroButton,
  HeroDescription,
  HeroEyebrow,
  HeroLink,
  HeroTitle,
} from '../components/hero';

export default function Home() {
  return (
    <>
      <Hero>
        <HeroEyebrow>Simple Askr app</HeroEyebrow>
        <HeroTitle>A small app shell with a few real parts.</HeroTitle>
        <HeroDescription>
          `my-app` is intentionally narrow: two simple landing pages, a small
          component demo, and a few interactive charts.
        </HeroDescription>
        <HeroActions>
          <HeroButton asChild variant="primary">
            <HeroLink href="/components">
              View components <ArrowRightIcon size={16} />
            </HeroLink>
          </HeroButton>
          <HeroButton asChild variant="secondary">
            <HeroLink href="/charts">
              <BarChart3Icon size={16} /> View charts
            </HeroLink>
          </HeroButton>
        </HeroActions>
        <Grid minItemWidth="12rem" gap="3">
          <div>
            <strong>Simple routes</strong>
            <span>One shared shell and four focused pages.</span>
          </div>
          <div>
            <strong>Real interactivity</strong>
            <span>Small reactive controls and data switches.</span>
          </div>
          <div>
            <strong>Workspace packages</strong>
            <span>askr-ui, askr-themes, and askr-charts working together.</span>
          </div>
        </Grid>
      </Hero>

      <Section>
        <div class="page-header-copy">
          <p>What is in scope</p>
          <h2>Just enough surface area to feel like an app.</h2>
        </div>

        <div>
          <FeatureCard
            icon={<LayoutTemplateIcon size={16} />}
            title="Landing pages"
          >
            Home and about stay lightweight and explain the shape of the app.
          </FeatureCard>
          <FeatureCard icon={<BoxesIcon size={16} />} title="Components">
            Tabs, accordion, and a couple of small controls show the basics.
          </FeatureCard>
          <FeatureCard icon={<BarChart3Icon size={16} />} title="Charts">
            A few charts respond to simple state changes without turning into a
            gallery.
          </FeatureCard>
        </div>
      </Section>
    </>
  );
}
