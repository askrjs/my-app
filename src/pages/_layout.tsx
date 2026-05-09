import { ThemeProvider } from '@askrjs/themes/theme';

export default function RootLayout({ children }: { children?: unknown }) {
  return <ThemeProvider defaultTheme="light">{children}</ThemeProvider>;
}
