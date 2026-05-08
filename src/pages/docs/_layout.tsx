import { Link } from "@askrjs/askr/router";
import {
  BookOpenIcon,
  BoxesIcon,
  MoonIcon,
  SparklesIcon,
  SunIcon,
} from "@askrjs/lucide";
import { Container, Stack } from "@askrjs/themes/layouts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@askrjs/themes/surfaces";
import { NavBrand, Navbar, NavGroup, NavLink } from "@askrjs/themes/navs";
import { Shell, ShellMain, ShellNav } from "@askrjs/themes/shells";
import { ThemeToggle } from "@askrjs/themes/theme";

const docsLinks = [
  {
    href: "/docs",
    label: "Overview",
    icon: BookOpenIcon,
    match: "exact" as const,
  },
  {
    href: "/docs/getting-started",
    label: "Getting started",
    icon: SparklesIcon,
  },
  { href: "/docs/components", label: "Components", icon: BoxesIcon },
];

export default function DocsLayout({ children }: { children?: unknown }) {
  return (
    <Shell variant="sidebar">
      <ShellNav>
        <Navbar orientation="vertical" aria-label="Docs navigation">
          <NavBrand>
            <Link href="/">
              <strong>Askr</strong>
            </Link>
          </NavBrand>
          <NavGroup label="Guides">
            {docsLinks.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink key={item.href} href={item.href} match={item.match}>
                  <Icon size={16} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </NavGroup>
        </Navbar>
      </ShellNav>

      <ShellMain>
        <Container size="3">{children}</Container>
      </ShellMain>
    </Shell>
  );
}
