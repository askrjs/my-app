import { derive, state } from '@askrjs/askr';
import { Toggle } from '@askrjs/ui/primitives/toggle';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  Section,
} from '@askrjs/themes/components';
import AreaChartExample from '../components/area-chart-example';
import BarChartExample from '../components/bar-chart-example';
import FlameGraphExample from '../components/flame-graph-example';
import DonutChartExample from '../components/donut-chart-example';
import HeatmapExample from '../components/heatmap-example';
import LineChartExample from '../components/line-chart-example';
import ProgressMeterExample from '../components/progress-meter-example';
import RadialGaugeExample from '../components/radial-gauge-example';
import SparklineExample from '../components/sparkline-example';
import StackedBarChartExample from '../components/stacked-bar-chart-example';
import TimelineExample from '../components/timeline-example';
import PageHeader from '../components/page-header';

export default function Charts() {
  const scenario = state('launch' as 'launch' | 'scale');
  const animate = state(true);

  const totals = derive(() => {
    if (scenario() === 'launch') {
      return {
        headline: 'Launch mode',
        subhead: 'Smaller footprint, faster spikes, more uneven engagement.',
        total: 160,
        active: '2.4k weekly users',
      };
    }

    return {
      headline: 'Scale mode',
      subhead: 'Higher throughput and steadier activity across the board.',
      total: 208,
      active: '4.1k weekly users',
    };
  });

  return (
    <>
      <Section key="charts-header">
        <PageHeader
          class="chart-page"
          eyebrow="Charts"
          title="A few interactive charts, kept intentionally compact."
          description="Switch the dataset and animation state to see the same page update without turning into a chart catalog."
          headingLevel="h1"
        />
      </Section>

      <Section key="charts-controls">
        <Card class="chart-toolbar" padding="sm">
          <CardHeader class="chart-meta">
            <CardTitle>{totals().headline}</CardTitle>
            <CardDescription>{totals().subhead}</CardDescription>
          </CardHeader>
          <CardContent class="chart-toolbar__body">
            <div class="chart-toggle-row">
              <Button
                variant={scenario() === 'launch' ? 'primary' : 'secondary'}
                onPress={() => scenario.set('launch')}
              >
                Launch
              </Button>
              <Button
                variant={scenario() === 'scale' ? 'primary' : 'secondary'}
                onPress={() => scenario.set('scale')}
              >
                Scale
              </Button>
              <Toggle
                pressed={animate()}
                onPress={() => animate.set((value) => !value)}
              >
                Animate
              </Toggle>
            </div>
            <Grid minItemWidth="10rem" class="chart-stat-row" gap="3">
              <div class="chart-stat">
                <span class="text-muted">Composite score</span>
                <strong>{totals().total}</strong>
              </div>
              <div class="chart-stat">
                <span class="text-muted">Usage</span>
                <strong>{totals().active}</strong>
              </div>
            </Grid>
          </CardContent>
        </Card>
      </Section>

      <Section key="charts-reference">
        <div class="chart-reference">
          <section class="chart-contract" data-chart-contract="AreaChart">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">AreaChart</p>
              <h2>Filled trend over ordered points.</h2>
              <p class="text-muted">
                The filled series should read as continuous movement over time,
                not as independent bars.
              </p>
            </div>
            <AreaChartExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="BarChart">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">BarChart</p>
              <h2>Discrete category comparison.</h2>
              <p class="text-muted">
                Bars compare labeled categories with stable tracks and truthful
                zero values.
              </p>
            </div>
            <BarChartExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="LineChart">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">LineChart</p>
              <h2>Trend line across an ordered axis.</h2>
              <p class="text-muted">
                The stroke and connected points are the primary marks; it should
                not depend on fill or bar-like stems.
              </p>
            </div>
            <LineChartExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="DonutChart">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">DonutChart</p>
              <h2>Circular part-to-whole composition.</h2>
              <p class="text-muted">
                Segments share a consistent ring and center void so the total
                remains legible without tooltip dependence.
              </p>
            </div>
            <DonutChartExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="StackedBarChart">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">StackedBarChart</p>
              <h2>Segmented bars for composition.</h2>
              <p class="text-muted">
                Each row compares a total while preserving its internal segment
                mix.
              </p>
            </div>
            <StackedBarChartExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="Sparkline">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">Sparkline</p>
              <h2>Tiny trend for dense UI.</h2>
              <p class="text-muted">
                The chart stays minimal: no axes, no legend, and no heavy
                surrounding chrome.
              </p>
            </div>
            <SparklineExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="Heatmap">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">Heatmap</p>
              <h2>Intensity grid across two dimensions.</h2>
              <p class="text-muted">
                Equal cells and color intensity carry the meaning while missing
                combinations stay explicit.
              </p>
            </div>
            <HeatmapExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="Timeline">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">Timeline</p>
              <h2>Compact ordered events.</h2>
              <p class="text-muted">
                Milestones should scan as a sequence with bounded rhythm, not as
                a loose bulleted list.
              </p>
            </div>
            <TimelineExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="FlameGraph">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">FlameGraph</p>
              <h2>Hierarchical cost rectangles.</h2>
              <p class="text-muted">
                Width maps to cost and depth maps to hierarchy, with stable
                resizing for product dashboards.
              </p>
            </div>
            <FlameGraphExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="ProgressMeter">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">ProgressMeter</p>
              <h2>Linear progress versus max.</h2>
              <p class="text-muted">
                A bounded track and proportional fill make the scalar value
                readable at a glance.
              </p>
            </div>
            <ProgressMeterExample animate={animate()} scenario={scenario()} />
          </section>

          <section class="chart-contract" data-chart-contract="RadialGauge">
            <div class="chart-contract__copy">
              <p class="page-header-eyebrow">RadialGauge</p>
              <h2>Circular scalar gauge.</h2>
              <p class="text-muted">
                The dial shows one value against its max and should not read as
                a multi-segment donut.
              </p>
            </div>
            <RadialGaugeExample animate={animate()} scenario={scenario()} />
          </section>
        </div>
      </Section>
    </>
  );
}
