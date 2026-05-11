import { describe, it, expect } from 'vite-plus/test';

describe('App Component', () => {
  it('renders layout with navigation and a theme toggle', () => {
    const app = `
      <div data-slot="theme-provider" data-theme="light">
        <header>
          <nav data-slot="navbar" aria-label="Primary">
            <div data-slot="navbar-brand">
              <strong>Askr</strong>
            </div>
            <div data-slot="navbar-group" data-align="center">
              <a href="/example">Example</a>
              <a href="/about">About</a>
            </div>
            <div data-slot="navbar-group" data-align="end">
              <button data-theme-control="toggle">Dark mode</button>
            </div>
          </nav>
        </header>
        <main>
          <p>Content goes here</p>
        </main>
      </div>
    `;

    expect(app).toContain('data-slot="theme-provider"');
    expect(app).toContain('data-slot="navbar"');
    expect(app).toContain('data-slot="navbar-group"');
    expect(app).toContain('data-theme-control="toggle"');
    expect(app).toContain('Dark mode');
  });
});
