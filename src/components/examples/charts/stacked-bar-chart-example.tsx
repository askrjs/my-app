import { StackedBarChart } from '@askrjs/charts/components';
import { BarChartHorizontalIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type StackedBarChartExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchStacked = [
  {
    label: 'Signup',
    segments: [
      { label: 'Organic', value: 18 },
      { label: 'Paid', value: 12 },
      { label: 'Referral', value: 10 },
    ],
  },
  {
    label: 'Activation',
    segments: [
      { label: 'Organic', value: 14 },
      { label: 'Paid', value: 9 },
      { label: 'Referral', value: 11 },
    ],
  },
];

const scaleStacked = [
  {
    label: 'Signup',
    segments: [
      { label: 'Organic', value: 22 },
      { label: 'Paid', value: 15 },
      { label: 'Referral', value: 13 },
    ],
  },
  {
    label: 'Activation',
    segments: [
      { label: 'Organic', value: 19 },
      { label: 'Paid', value: 14 },
      { label: 'Referral', value: 16 },
    ],
  },
];

export default function StackedBarChartExample({
  animate,
  scenario,
}: StackedBarChartExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <BarChartHorizontalIcon size={16} />
            <span>Stacked bar</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A multi-segment breakdown for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <StackedBarChart
          animate={animate}
          label="Channel mix"
          summary="A compact stacked bar showing channel contribution."
          data={scenario === 'launch' ? launchStacked : scaleStacked}
        />
      </CardContent>
    </Card>
  );
}
