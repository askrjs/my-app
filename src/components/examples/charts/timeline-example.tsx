import type { TimelineDatum } from '@askrjs/charts/components';
import { Timeline } from '@askrjs/charts/components';
import { TimelineIcon } from '@askrjs/lucide';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type ChartScenario = 'launch' | 'scale';

type TimelineExampleProps = {
  animate: boolean;
  scenario: ChartScenario;
};

const launchTimeline: readonly TimelineDatum[] = [
  {
    label: 'Kickoff',
    value: 'Week 1',
    description: 'Start with a narrow scope.',
    status: 'success',
  },
  {
    label: 'Prototype',
    value: 'Week 2',
    description: 'Get the first pass on screen.',
    status: 'warning',
  },
  {
    label: 'Pilot',
    value: 'Week 3',
    description: 'Validate the flow with users.',
    status: 'info',
  },
];

const scaleTimeline: readonly TimelineDatum[] = [
  {
    label: 'Kickoff',
    value: 'Week 1',
    description: 'Start with a narrow scope.',
    status: 'success',
  },
  {
    label: 'Prototype',
    value: 'Week 2',
    description: 'Get the first pass on screen.',
    status: 'warning',
  },
  {
    label: 'Rollout',
    value: 'Week 4',
    description: 'Broaden the surface carefully.',
    status: 'danger',
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
