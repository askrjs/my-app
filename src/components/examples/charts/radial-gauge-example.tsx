import { RadialGauge } from '@askrjs/charts/components';
import { GaugeIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type RadialGaugeExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

export default function RadialGaugeExample({
  animate,
  scenario,
}: RadialGaugeExampleProps) {
  const value = scenario === 'launch' ? 72 : 91;

  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <GaugeIcon size={16} />
            <span>Radial gauge</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A circular metric for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RadialGauge
          animate={animate}
          label="Readiness"
          value={value}
          summary="A compact radial gauge showing readiness."
          description="Tracks readiness for the current scenario."
          variant={scenario === 'launch' ? 'danger' : 'success'}
        />
      </CardContent>
    </Card>
  );
}
