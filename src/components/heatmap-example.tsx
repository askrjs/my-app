import { Heatmap } from '@askrjs/charts/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/components';

type ChartScenario = 'launch' | 'scale';

type HeatmapExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchHeatmap = [
  { x: 'Mon', y: 'Week 1', value: 8 },
  { x: 'Tue', y: 'Week 1', value: 10 },
  { x: 'Wed', y: 'Week 1', value: 7 },
  { x: 'Thu', y: 'Week 1', value: 11 },
  { x: 'Mon', y: 'Week 2', value: 9 },
  { x: 'Tue', y: 'Week 2', value: 12 },
  { x: 'Wed', y: 'Week 2', value: 8 },
  { x: 'Thu', y: 'Week 2', value: 13 },
];

const scaleHeatmap = [
  { x: 'Mon', y: 'Week 1', value: 14 },
  { x: 'Tue', y: 'Week 1', value: 12 },
  { x: 'Wed', y: 'Week 1', value: 16 },
  { x: 'Thu', y: 'Week 1', value: 18 },
  { x: 'Mon', y: 'Week 2', value: 15 },
  { x: 'Tue', y: 'Week 2', value: 17 },
  { x: 'Wed', y: 'Week 2', value: 19 },
  { x: 'Thu', y: 'Week 2', value: 20 },
];

export default function HeatmapExample({
  animate,
  scenario,
}: HeatmapExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>Heatmap</CardTitle>
        <CardDescription>
          A compact intensity view for the same sample scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Heatmap
          animate={animate}
          label="Weekly intensity"
          summary="A compact heatmap showing the same launch or scale scenario."
          data={scenario === 'launch' ? launchHeatmap : scaleHeatmap}
        />
      </CardContent>
    </Card>
  );
}
