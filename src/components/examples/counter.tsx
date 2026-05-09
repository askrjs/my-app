import { state, derive } from '@askrjs/askr';
import { Button } from '@askrjs/themes/controls';
import { Inline } from '@askrjs/themes/layouts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

export default function Counter() {
  const count = state(0);
  const parity = derive(() => (count() % 2 === 0 ? 'even' : 'odd'));

  return (
    <Card class="counter" variant="raised">
      <CardHeader class="counter__header">
        <p class="eyebrow">Reactive state</p>
        <CardTitle>One value, one derived label.</CardTitle>
        <CardDescription>
          <code>state()</code> drives the count. <code>derive()</code> keeps
          parity current.
        </CardDescription>
      </CardHeader>
      <CardContent class="counter__body">
        <div class="counter-value">{count()}</div>
        <p class="counter-parity text-bold">{parity()}</p>
        <Inline wrap="wrap" gap="md">
          <Button
            variant="secondary"
            onPress={() => count.set((value) => Math.max(0, value - 1))}
          >
            -
          </Button>
          <Button
            variant="primary"
            onPress={() => count.set((value) => value + 1)}
          >
            +
          </Button>
        </Inline>
      </CardContent>
    </Card>
  );
}
