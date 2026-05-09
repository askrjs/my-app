import { BarChart } from '@askrjs/charts/components';
import { BarChart3Icon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type BarChartExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchBar = [
  { label: 'Docs', value: 42 },
  { label: 'Trials', value: 58 },
  { label: 'Teams', value: 33 },
  { label: 'Deploys', value: 27 },
];

const scaleBar = [
  { label: 'Docs', value: 64 },
  { label: 'Trials', value: 49 },
  { label: 'Teams', value: 51 },
  { label: 'Deploys', value: 44 },
];

export default function BarChartExample({
  animate,
  scenario,
}: BarChartExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <BarChart3Icon size={16} />
            <span>Bar chart</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A compact throughput view showing how the current scenario is moving.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BarChart
          animate={animate}
          label="App activity"
          summary="How the main app areas are moving right now."
          data={scenario === 'launch' ? launchBar : scaleBar}
        />
      </CardContent>
    </Card>
  );
}
