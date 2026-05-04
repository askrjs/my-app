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
      <Section>
        <PageHeader
          class="chart-page"
          eyebrow="Charts"
          title="A few interactive charts, kept intentionally compact."
          description="Switch the dataset and animation state to see the same page update without turning into a chart catalog."
          headingLevel="h1"
        />
      </Section>

      <Section>
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

      <Section>
        <Grid minItemWidth="18rem" class="chart-grid" gap="4">
          <AreaChartExample animate={animate()} scenario={scenario()} />
          <BarChartExample animate={animate()} scenario={scenario()} />
          <LineChartExample animate={animate()} scenario={scenario()} />
          <DonutChartExample animate={animate()} scenario={scenario()} />
          <StackedBarChartExample animate={animate()} scenario={scenario()} />
          <SparklineExample animate={animate()} scenario={scenario()} />
          <HeatmapExample animate={animate()} scenario={scenario()} />
          <TimelineExample animate={animate()} scenario={scenario()} />
          <FlameGraphExample animate={animate()} scenario={scenario()} />
          <ProgressMeterExample animate={animate()} scenario={scenario()} />
          <RadialGaugeExample animate={animate()} scenario={scenario()} />
        </Grid>
      </Section>
    </>
  );
}
