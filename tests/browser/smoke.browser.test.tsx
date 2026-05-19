import { createIsland, state } from '@askrjs/askr';
import { Button } from '@askrjs/themes/controls';
import { describe, expect, it } from 'vite-plus/test';

describe('browser smoke', () => {
  it('mounts and updates a themed island', () => {
    const root = document.createElement('div');
    document.body.append(root);

    function App() {
      const count = state(0);

      return (
        <Button onPress={() => count.set((value) => value + 1)}>
          Count {count()}
        </Button>
      );
    }

    createIsland({ root, component: App });

    const button = root.querySelector('button');
    expect(button?.textContent).toContain('Count 0');

    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(button?.textContent).toContain('Count 1');
    document.body.innerHTML = '';
  });
});