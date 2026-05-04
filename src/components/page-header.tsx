type PageHeaderProps = {
  eyebrow?: unknown;
  title?: unknown;
  description?: unknown;
  children?: unknown;
  class?: string;
  headingLevel?: 'h1' | 'h2';
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  class: className,
  headingLevel = 'h2',
}: PageHeaderProps) {
  const classes = ['page-header', className].filter(Boolean).join(' ');

  return (
    <header class={classes}>
      <div class="page-header-copy">
        {eyebrow ? <p class="page-header-eyebrow">{eyebrow}</p> : null}
        {title ? (
          headingLevel === 'h1' ? (
            <h1>{title}</h1>
          ) : (
            <h2>{title}</h2>
          )
        ) : null}
        {description ? (
          <p class="page-header-description text-muted">{description}</p>
        ) : null}
      </div>
      {children}
    </header>
  );
}
