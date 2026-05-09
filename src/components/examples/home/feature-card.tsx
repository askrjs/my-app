import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/surfaces';

type FeatureCardProps = {
  icon: unknown;
  title: unknown;
  children?: unknown;
};

export default function FeatureCard({
  icon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <Card class="feature-card" variant="raised">
      <CardHeader class="feature-card__header">
        <div class="icon-badge">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent class="feature-card__copy">
        <p>{children}</p>
      </CardContent>
    </Card>
  );
}
