import { route } from '@askrjs/askr/router';
import About from './about';
import Charts from './charts';
import Home from './home';

export function registerPublicRoutes(): void {
  route('/', Home);
  route('/about', About);
  route('/charts', Charts);
}
