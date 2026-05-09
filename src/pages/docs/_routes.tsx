import { index, page, route } from '@askrjs/askr/router';
import Components from './components';
import ComponentsOverview from './components-overview';
import DocsGettingStarted from './getting-started';
import DocsHome from './index';
import DocsPills from './pills';
import DocsTabs from './tabs';

export function registerDocsRoutes(): void {
  route('/docs', DocsHome);
  route('/docs/getting-started', DocsGettingStarted);

  page('/docs/components', Components, () => {
    index(ComponentsOverview);
    route('tabs', DocsTabs);
    route('pills', DocsPills);
  });
}
