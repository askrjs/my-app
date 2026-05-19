import { createSPA } from '@askrjs/askr/boot';
import { getRoutes, navigate } from '@askrjs/askr/router';

import './styles.css';

// Import routes (they auto-register)
import './routes';

const styleMode = new URLSearchParams(window.location.search).has('theme-only')
  ? 'theme-only'
  : 'app-custom';

document.documentElement.dataset.styleMode = styleMode;

async function bootstrap(): Promise<void> {
  if (styleMode === 'app-custom') {
    await import('./styles/app-custom.css');
  }

  await createSPA({
    root: document.getElementById('app')!,
    routes: getRoutes(),
  });

  navigate(window.location.pathname);
}

void bootstrap();
