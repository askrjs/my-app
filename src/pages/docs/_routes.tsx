import { route } from '@askrjs/askr/router';
import Components from './components';
import DocsGettingStarted from './getting-started';
import DocsHome from './index';

export function registerDocsRoutes(): void {
  route('/docs', DocsHome);
  route('/docs/getting-started', DocsGettingStarted);
  route('/docs/components', Components);
}