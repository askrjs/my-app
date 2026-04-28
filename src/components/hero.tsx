import { Link, type LinkProps } from '@askrjs/askr/router';
import { Button } from '@askrjs/askr-ui/primitives/button';
import type { ButtonProps } from '@askrjs/askr-ui/primitives/button';
import { Cluster, Section, Stack } from '@askrjs/askr-themes/components';

type HeroProps = {
  children?: unknown;
};

type HeroTextProps = Omit<JSX.IntrinsicElements['p'], 'children'> & {
  children?: unknown;
};

type HeroTitleProps = Omit<JSX.IntrinsicElements['h1'], 'children'> & {
  children?: unknown;
};

type HeroActionsProps = Omit<JSX.IntrinsicElements['div'], 'children'> & {
  children?: unknown;
};

export default function Hero({ children }: HeroProps) {
  return (
    <Section>
      <Stack gap="4">{children}</Stack>
    </Section>
  );
}

export function HeroEyebrow({ children, ...rest }: HeroTextProps) {
  return <p {...rest}>{children}</p>;
}

export function HeroTitle({ children, ...rest }: HeroTitleProps) {
  return <h1 {...rest}>{children}</h1>;
}

export function HeroDescription({
  children,
  class: className,
  ...rest
}: HeroTextProps) {
  const classes =
    [className, 'text-muted'].filter(Boolean).join(' ') || undefined;
  return (
    <p {...rest} class={classes}>
      {children}
    </p>
  );
}

export function HeroActions({ children, ...rest }: HeroActionsProps) {
  return (
    <Cluster {...rest} gap="3">
      {children}
    </Cluster>
  );
}

export function HeroButton(props: ButtonProps) {
  return <Button {...props} size={props.size ?? 'lg'} />;
}

export function HeroLink(props: LinkProps) {
  return <Link {...props} />;
}
