import { ArrowRightIcon } from '@askrjs/lucide/icons/arrow-right';
import { BarChart3Icon } from '@askrjs/lucide';
import { BookOpenIcon } from '@askrjs/lucide';
import { LayoutTemplateIcon } from '@askrjs/lucide';
import { Block, Section } from '@askrjs/themes/layouts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@askrjs/themes/surfaces';
import FeatureCard from '../../components/examples/home/feature-card';
import PageHeader from '../../components/shared/page-header';
import Hero, {
  HeroActions,
  HeroButton,
  HeroDescription,
  HeroEyebrow,
  HeroTitle,
} from '../../components/examples/home/hero';

export default function Home() {
  return (
    <>
      <Hero>
        <div class="home-hero">
          <div class="home-hero__content">
            <HeroEyebrow class="eyebrow">
              Build the app shape first
            </HeroEyebrow>
            <HeroTitle>
              Docs, charts, and product pages that already feel like one
              product.
            </HeroTitle>
            <HeroDescription>
              `my-app` is a compact Askr app shell with a docs section, a few
              top-nav product pages, and interactive charts that prove the
              packages work together without turning into a giant demo site.
            </HeroDescription>
            <HeroActions class="home-hero__actions">
              <HeroButton href="/docs" variant="primary">
                Explore docs <ArrowRightIcon size={16} />
              </HeroButton>
              <HeroButton href="/charts" variant="secondary">
                <BarChart3Icon size={16} /> See charts
              </HeroButton>
            </HeroActions>
          </div>

          <Card class="home-hero__artifact" variant="raised">
            <CardHeader class="home-hero__artifact-copy">
              <p class="eyebrow">Example stack</p>
              <CardTitle>One shell, three surfaces.</CardTitle>
              <CardDescription>
                A predictable app frame with top-nav product pages, a docs
                sidebar, and lightweight product copy.
              </CardDescription>
            </CardHeader>
            <CardContent class="home-hero__artifact-grid">
              <div class="home-hero__artifact-item">
                <strong>Docs</strong>
                <span>Left-nav guides and component pages under one section.</span>
              </div>
              <div class="home-hero__artifact-item">
                <strong>Charts</strong>
                <span>Interactive data views with a restrained API.</span>
              </div>
              <div class="home-hero__artifact-item">
                <strong>Themes</strong>
                <span>
                  Layout, shell, and content patterns that stay coherent.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Hero>

      <Section>
        <PageHeader
          class="home-section-head"
          eyebrow="What you can explore"
          title="Three focused surfaces instead of one overloaded showcase."
          description="The structure stays simple: one clear landing page, one component page, and one chart page with enough interactivity to feel real."
          headingLevel="h2"
        />

        <div class="home-card-grid">
          <FeatureCard
            icon={<LayoutTemplateIcon size={16} />}
            title="Themed app shell"
          >
            Header, container rhythm, section spacing, and footer composition
            give the product pages a stable frame before individual routes get fancy.
          </FeatureCard>
          <FeatureCard icon={<BookOpenIcon size={16} />} title="Docs section">
            Model a believable documentation directory with its own sidebar and
            enough content to feel intentional.
          </FeatureCard>
          <FeatureCard icon={<BarChart3Icon size={16} />} title="Charts">
            Show interactive data views with enough controls to prove the
            runtime, without drifting into dashboard sprawl.
          </FeatureCard>
        </div>
      </Section>

      <Section>
        <PageHeader
          class="home-section-head"
          eyebrow="How it flows"
          title="A calm sequence with one idea per section."
          headingLevel="h2"
        />

        <Block size="sm" gap="4">
          <Card class="home-step" variant="raised">
            <span class="home-step__number">01</span>
            <CardTitle>Start with the frame</CardTitle>
            <CardDescription>
              The shell establishes hierarchy fast so every route feels like it
              belongs to the same product.
            </CardDescription>
          </Card>
          <Card class="home-step" variant="raised">
            <span class="home-step__number">02</span>
            <CardTitle>Show one capability clearly</CardTitle>
            <CardDescription>
              Each page demonstrates a narrow slice instead of forcing every
              feature into the hero.
            </CardDescription>
          </Card>
          <Card class="home-step" variant="raised">
            <span class="home-step__number">03</span>
            <CardTitle>End with a clear next move</CardTitle>
            <CardDescription>
              Components, charts, and about all lead naturally to the next
              useful surface.
            </CardDescription>
          </Card>
        </Block>
      </Section>

      <Section>
        <Card class="home-proof" variant="raised">
          <div class="home-proof__copy">
            <p class="eyebrow">Why this shape works</p>
            <h2>
              Enough product structure to feel intentional, not enough to feel
              bloated.
            </h2>
            <p class="text-muted">
              The app stays small, but the layout gives it momentum: strong
              entry, useful middle, and a clear sense of where to go next.
            </p>
          </div>
          <div class="home-proof__stats">
            <div class="home-proof__stat">
              <strong>4</strong>
              <span>top-level routes</span>
            </div>
            <div class="home-proof__stat">
              <strong>1</strong>
              <span>docs section</span>
            </div>
            <div class="home-proof__stat">
              <strong>2</strong>
              <span>layout modes</span>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <Card class="home-cta" variant="raised">
          <div class="home-cta__copy">
            <p class="eyebrow">Start somewhere concrete</p>
            <h2>Open the docs section, then look at the charts.</h2>
            <p class="text-muted">
              That path shows the product shell first, then the docs layout,
              then the data surface without making the landing page do all the work.
            </p>
          </div>
          <div class="home-cta__actions">
            <HeroButton href="/docs/components" variant="primary">
              Go to component docs
            </HeroButton>
            <HeroButton href="/about" variant="ghost">
              Read about the app
            </HeroButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
