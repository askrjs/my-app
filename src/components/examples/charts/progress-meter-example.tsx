import { ProgressMeter } from '@askrjs/charts/components';
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

type ProgressMeterExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

export default function ProgressMeterExample({
  animate,
  scenario,
}: ProgressMeterExampleProps) {
  const value = scenario === 'launch' ? 64 : 84;

  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <GaugeIcon size={16} />
            <span>Progress meter</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A single metric showing completion for the same scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProgressMeter
          animate={animate}
          label="Release progress"
          value={value}
          summary="A compact progress meter for release readiness."
          description="Tracks completion for the current scenario."
          variant={scenario === 'launch' ? 'warning' : 'success'}
        />
      </CardContent>
    </Card>
  );
}
