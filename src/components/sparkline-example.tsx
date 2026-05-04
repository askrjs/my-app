import { Sparkline } from '@askrjs/charts/components';
import { LineChartIcon } from '@askrjs/lucide';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Inline,
} from '@askrjs/themes/components';

type ChartScenario = 'launch' | 'scale';

type SparklineExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchSparkline = [
  { label: 'W1', value: 12 },
  { label: 'W2', value: 14 },
  { label: 'W3', value: 13 },
  { label: 'W4', value: 16 },
  { label: 'W5', value: 18 },
];

const scaleSparkline = [
  { label: 'W1', value: 15 },
  { label: 'W2', value: 18 },
  { label: 'W3', value: 19 },
  { label: 'W4', value: 23 },
  { label: 'W5', value: 27 },
];

export default function SparklineExample({ animate, scenario }: SparklineExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <LineChartIcon size={16} />
            <span>Sparkline</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A minimal signal view for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Sparkline
          animate={animate}
          label="Signal trend"
          summary="A compact sparkline showing signal movement."
          data={scenario === 'launch' ? launchSparkline : scaleSparkline}
        />
      </CardContent>
    </Card>
  );
}
