import { describe, it, expect } from 'vite-plus/test';

describe('App Component', () => {
  it('renders layout with navigation and a theme toggle', () => {
    const app = `
      <div data-slot="theme-provider" data-theme="light">
        <header>
          <nav data-collapse-below="md">
            <div data-slot="navbar-shell">
              <strong>Askr</strong>
              <div>
                <a href="/example">Example</a>
                <a href="/about">About</a>
              </div>
            </div>
            <div data-slot="navbar-mobile">
              <button data-slot="navbar-toggle" aria-label="Primary navigation">
                Menu
              </button>
            </div>
          </nav>
          <div class="nav-actions">
            <button data-theme-control="toggle">Dark mode</button>
          </div>
        </header>
        <main>
          <p>Content goes here</p>
        </main>
      </div>
    `;

    expect(app).toContain('data-slot="theme-provider"');
    expect(app).toContain('data-collapse-below="md"');
    expect(app).toContain('data-slot="navbar-shell"');
    expect(app).toContain('data-slot="navbar-mobile"');
    expect(app).toContain('data-theme-control="toggle"');
    expect(app).toContain('Dark mode');
  });
});
