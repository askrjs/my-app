import { FlameGraph } from '@askrjs/charts/components';
import { FlameIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type FlameGraphExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchFlame = [
  {
    label: 'App',
    value: 100,
    children: [
      {
        label: 'UI',
        value: 44,
        children: [
          { label: 'Cards', value: 18 },
          { label: 'Navigation', value: 26 },
        ],
      },
      {
        label: 'Data',
        value: 56,
        children: [
          { label: 'Charts', value: 31 },
          { label: 'Tables', value: 25 },
        ],
      },
    ],
  },
];

const scaleFlame = [
  {
    label: 'App',
    value: 120,
    children: [
      {
        label: 'UI',
        value: 52,
        children: [
          { label: 'Cards', value: 22 },
          { label: 'Navigation', value: 30 },
        ],
      },
      {
        label: 'Data',
        value: 68,
        children: [
          { label: 'Charts', value: 38 },
          { label: 'Tables', value: 30 },
        ],
      },
    ],
  },
];

export default function FlameGraphExample({
  animate,
  scenario,
}: FlameGraphExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <FlameIcon size={16} />
            <span>Flame graph</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A nested hierarchy view for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FlameGraph
          animate={animate}
          label="App hierarchy"
          summary="A compact flame graph showing nested app structure."
          data={scenario === 'launch' ? launchFlame : scaleFlame}
        />
      </CardContent>
    </Card>
  );
}
