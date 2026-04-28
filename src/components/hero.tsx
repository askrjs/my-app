import {
  Cluster,
  Section,
  Stack,
} from '@askrjs/askr-themes/components';

type HeroProps = {
  eyebrow?: unknown;
  title: unknown;
  description?: unknown;
  actions?: unknown;
  children?: unknown;
};

export default function Hero({
  eyebrow,
  title,
  description,
  actions,
  children,
}: HeroProps) {
  return (
    <Section>
      <Stack gap="4">
        {eyebrow !== undefined ? <p>{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description !== undefined ? <p class="text-muted">{description}</p> : null}
        {actions !== undefined ? <Cluster gap="3">{actions}</Cluster> : null}
        {children}
      </Stack>
    </Section>
  );
}