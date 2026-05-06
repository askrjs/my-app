import { Timeline } from '@askrjs/charts/components';
import { TimelineIcon } from '@askrjs/lucide';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Inline,
} from '@askrjs/themes/components';

type ChartScenario = 'launch' | 'scale';

type TimelineExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchTimeline = [
  {
    label: 'Kickoff',
    value: 'Week 1',
    description: 'Start with a narrow scope.',
  },
  {
    label: 'Prototype',
    value: 'Week 2',
    description: 'Get the first pass on screen.',
  },
  {
    label: 'Pilot',
    value: 'Week 3',
    description: 'Validate the flow with users.',
  },
];

const scaleTimeline = [
  {
    label: 'Kickoff',
    value: 'Week 1',
    description: 'Start with a narrow scope.',
  },
  {
    label: 'Prototype',
    value: 'Week 2',
    description: 'Get the first pass on screen.',
  },
  {
    label: 'Rollout',
    value: 'Week 4',
    description: 'Broaden the surface carefully.',
  },
];

export default function TimelineExample({
  animate,
  scenario,
}: TimelineExampleProps) {
  return (
    <Card class="chart-card" padding="sm">
      <CardHeader>
        <CardTitle>
          <Inline as="span" align="center" gap="2">
            <TimelineIcon size={16} />
            <span>Timeline</span>
          </Inline>
        </CardTitle>
        <CardDescription>
          A milestone view for the same launch or scale scenario.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Timeline
          animate={animate}
          labelDensity="compact"
          label="Delivery milestones"
          summary="A compact timeline showing major delivery steps."
          data={scenario === 'launch' ? launchTimeline : scaleTimeline}
        />
      </CardContent>
    </Card>
  );
}
