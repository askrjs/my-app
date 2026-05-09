import { MoonIcon, SunIcon } from '@askrjs/lucide';
import { HamburgerIcon } from '@askrjs/lucide';
import { Link } from '@askrjs/askr/router';
import { Container, Flex, Block, Stack } from '@askrjs/themes/layouts';
import { GitHubLogo } from '@askrjs/themes/logos';
import {
  NavBrand,
  Navbar,
  NavGroup,
  NavItem,
  NavLink,
} from '@askrjs/themes/navs';
import { Header } from '@askrjs/themes/shells';
import { Badge, Separator } from '@askrjs/themes/surfaces';
import { ThemeToggle } from '@askrjs/themes/theme';

export default function PublicLayout({ children }: { children?: unknown }) {
  const year = new Date().getFullYear();

  return (
    <>
      <Header position="sticky">
        <Container>
          <Navbar
            aria-label="Primary"
            collapseBelow="md"
            collapseLabel="Primary navigation"
            collapseTrigger={<HamburgerIcon size={20} aria-hidden="true" />}
          >
            <NavBrand>
              <Link href="/">
                <strong>Askr</strong>
              </Link>
            </NavBrand>
            <NavGroup align="center">
              <NavLink href="/docs">Docs</NavLink>
              <NavLink href="/charts">Charts</NavLink>
              <NavLink href="/about">About</NavLink>
            </NavGroup>
            <NavGroup align="end">
              <NavItem
                href="https://github.com/askrjs"
                aria-label="GitHub repository"
                variant="icon"
              >
                <GitHubLogo size={20} />
              </NavItem>
              <ThemeToggle
                variant="ghost"
                size="icon"
                toggleThemes={['light', 'dark']}
                aria-label="Toggle color theme"
                lightIcon={<SunIcon size={20} aria-hidden="true" />}
                darkIcon={<MoonIcon size={20} aria-hidden="true" />}
              />
            </NavGroup>
          </Navbar>
        </Container>
      </Header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer class="site-footer">
        <Container>
          <Block gap="lg" align="start">
            <Stack gap="md">
              <p class="text-bold text-muted">Askr ecosystem</p>
              <Link href="/" class="text-bold">
                <strong>Askr</strong>
              </Link>
              <p class="text-muted">
                Fast, composable UI foundations for building apps, charts, and
                themed interfaces with a small, coherent surface area.
              </p>
              <Flex wrap="wrap" gap="sm" aria-label="Core packages">
                <Badge class="gap-1">askr</Badge>
                <Badge class="gap-1">askr-ui</Badge>
                <Badge class="gap-1">askr-themes</Badge>
                <Badge class="gap-1">askr-charts</Badge>
              </Flex>
            </Stack>

            <Stack gap="sm">
              <h3 class="text-bold">Explore</h3>
              <Stack asChild gap="none">
                <nav aria-label="Footer explore">
                  <Link href="/docs">Docs</Link>
                  <Link href="/charts">Charts</Link>
                  <Link href="/about">About</Link>
                </nav>
              </Stack>
            </Stack>

            <Stack gap="sm">
              <h3 class="text-bold">Project</h3>
              <Stack asChild gap="none">
                <nav aria-label="Footer project">
                  <a
                    href="https://github.com/askrjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.npmjs.com/search?q=%40askrjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Packages
                  </a>
                  <a
                    href="https://github.com/askrjs/repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repositories
                  </a>
                </nav>
              </Stack>
            </Stack>
          </Block>

          <Separator decorative />

          <Flex wrap="wrap" class="text-muted" justify="between" gap="sm">
            <span>Built with Askr.</span>
            <span>&copy; {year} Askr contributors.</span>
          </Flex>
        </Container>
      </footer>
    </>
  );
}
