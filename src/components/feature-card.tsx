import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@askrjs/themes/components';

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
        <div class="feature-card__icon">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent class="feature-card__copy">
        <p>{children}</p>
      </CardContent>
    </Card>
  );
}
