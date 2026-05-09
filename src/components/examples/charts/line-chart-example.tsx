import { LineChart } from '@askrjs/charts/components';
import { LineChartIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type LineChartExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchLine = [
  { label: 'Mon', value: 14 },
  { label: 'Tue', value: 18 },
  { label: 'Wed', value: 16 },
  { label: 'Thu', value: 20 },
  { label: 'Fri', value: 24 },
];

const scaleLine = [
  { label: 'Mon', value: 22 },
  { label: 'Tue', value: 25 },
  { label: 'Wed', value: 29 },
  { label: 'Thu', value: 31 },
  { label: 'Fri', value: 36 },
];

export default function LineChartExample({
  animate,
  scenario,
}: LineChartExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <LineChartIcon size={16} />
            <span>Line chart</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A simple trend line for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LineChart
          animate={animate}
          label="Weekly trend"
          summary="A compact line chart showing weekly activity."
          data={scenario === 'launch' ? launchLine : scaleLine}
        />
      </CardContent>
    </Card>
  );
}
