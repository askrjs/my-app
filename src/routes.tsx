import { group, registerRoutes } from '@askrjs/askr/router';
import RootLayout from './pages/_layout';
import DocsLayout from './pages/docs/_layout';
import { registerDocsRoutes } from './pages/docs/_routes';
import PublicLayout from './pages/public/_layout';
import { registerPublicRoutes } from './pages/public/_routes';

registerRoutes(() => {
  group({ layout: RootLayout }, () => {
    group({ layout: PublicLayout }, () => {
      registerPublicRoutes();
    });

    group({ layout: DocsLayout }, () => {
      registerDocsRoutes();
    });
  });
});
