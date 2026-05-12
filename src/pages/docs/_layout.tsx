import {
  BookOpenIcon,
  CompassIcon,
  HomeIcon,
  PanelLeftCloseIcon,
  PanelLeftOpenIcon,
  ShapesIcon,
} from "@askrjs/lucide";
import { Container } from "@askrjs/themes/layouts";
import {
  NavBrand,
  NavGroup,
  NavLink,
  Sidebar,
  SidebarToggle,
  Shell,
  ShellMain,
  ShellNav,
} from "@askrjs/themes/shells";

export default function DocsLayout({ children }: { children?: unknown }) {
  return (
    <Shell variant="sidebar">
      <ShellNav>
        <Sidebar
          id="docs-sidebar"
          aria-label="Docs navigation"
          breakpoint="lg"
          collapsible="icon"
        >
          <SidebarToggle
            expandedIcon={<PanelLeftCloseIcon size={16} data-slot="icon" aria-hidden="true" />}
            collapsedIcon={<PanelLeftOpenIcon size={16} data-slot="icon" aria-hidden="true" />}
          />
          <NavBrand>
            <NavLink href="/" aria-label="Askr home">
              <HomeIcon size={16} data-slot="icon" aria-hidden="true" />
              <span class="docs-sidebar-label">Askr</span>
            </NavLink>
          </NavBrand>

          <NavGroup label="Guides">
            <NavLink href="/docs" match="exact" aria-label="Overview">
              <BookOpenIcon size={16} data-slot="icon" aria-hidden="true" />
              <span class="docs-sidebar-label">Overview</span>
            </NavLink>
            <NavLink href="/docs/getting-started" aria-label="Getting started">
              <CompassIcon size={16} data-slot="icon" aria-hidden="true" />
              <span class="docs-sidebar-label">Getting started</span>
            </NavLink>
            <NavLink href="/docs/components" aria-label="Components">
              <ShapesIcon size={16} data-slot="icon" aria-hidden="true" />
              <span class="docs-sidebar-label">Components</span>
            </NavLink>
          </NavGroup>
        </Sidebar>
      </ShellNav>

      <ShellMain>
        <Container size="lg">{children}</Container>
      </ShellMain>
    </Shell>
  );
}
