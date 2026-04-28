import { MoonIcon, SunIcon } from "@askrjs/askr-lucide";
import { Link } from "@askrjs/askr/router";
import { NavLink } from "@askrjs/askr-ui";
import {
  Container,
  GitHubLogo,
  Header,
  NavBrand,
  Navbar,
  NavGroup,
  ThemeProvider,
  ThemeToggle,
} from "@askrjs/askr-themes/components";

export default function App({ children }: { children?: unknown }) {
  return (
    <ThemeProvider defaultTheme="light">
      <Header position="sticky">
        <Container>
          <Navbar aria-label="Primary">
            <NavBrand>
              <Link href="/">
                <strong>Askr</strong>
              </Link>
            </NavBrand>
            <NavGroup>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/components">Components</NavLink>
              <NavLink href="/charts">Charts</NavLink>
            </NavGroup>
            <NavGroup data-align="end">
              <a
                href="https://github.com/askrjs"
                aria-label="GitHub repository"
              >
                <GitHubLogo size={16} />
              </a>
              <ThemeToggle
                variant="ghost"
                size="icon"
                toggleThemes={["light", "dark"]}
                aria-label="Toggle color theme"
                lightIcon={<SunIcon size={16} aria-hidden="true" />}
                darkIcon={<MoonIcon size={16} aria-hidden="true" />}
              />
            </NavGroup>
          </Navbar>
        </Container>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
    </ThemeProvider>
  );
}
