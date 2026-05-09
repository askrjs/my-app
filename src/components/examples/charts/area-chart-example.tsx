import { AreaChart } from '@askrjs/charts/components';
import { AreaChartIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type AreaChartExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchArea = [
  { label: 'Jan', value: 20 },
  { label: 'Feb', value: 28 },
  { label: 'Mar', value: 25 },
  { label: 'Apr', value: 34 },
  { label: 'May', value: 41 },
];

const scaleArea = [
  { label: 'Jan', value: 28 },
  { label: 'Feb', value: 35 },
  { label: 'Mar', value: 40 },
  { label: 'Apr', value: 48 },
  { label: 'May', value: 56 },
];

export default function AreaChartExample({
  animate,
  scenario,
}: AreaChartExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <AreaChartIcon size={16} />
            <span>Area chart</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A gradual trend view for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AreaChart
          animate={animate}
          label="Monthly trend"
          summary="A compact area chart showing monthly activity."
          data={scenario === 'launch' ? launchArea : scaleArea}
        />
      </CardContent>
    </Card>
  );
}
