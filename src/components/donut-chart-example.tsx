import { DonutChart } from '@askrjs/charts/components';
import { PieChartIcon } from '@askrjs/lucide';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Inline,
} from '@askrjs/themes/components';

type ChartScenario = 'launch' | 'scale';

type DonutChartExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchDonut = [
  { label: 'Direct', value: 46 },
  { label: 'Templates', value: 29 },
  { label: 'Partners', value: 25 },
];

const scaleDonut = [
  { label: 'Direct', value: 33 },
  { label: 'Templates', value: 37 },
  { label: 'Partners', value: 30 },
];

export default function DonutChartExample({
  animate,
  scenario,
}: DonutChartExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <PieChartIcon size={16} />
            <span>Donut chart</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A small distribution view for the current scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DonutChart
          animate={animate}
          label="Traffic sources"
          summary="A small distribution view for the current scenario."
          totalLabel="traffic"
          data={scenario === 'launch' ? launchDonut : scaleDonut}
        />
      </CardContent>
    </Card>
  );
}
