import { Outlet } from '@askrjs/askr/router';
import { Block, Section } from '@askrjs/themes/layouts';
import PageHeader from '../../components/shared/page-header';

export default function Components() {
  return (
    <>
      <Section key="components-header">
        <PageHeader
          eyebrow="Docs / Components"
          title="A few controls, a little state, documented in context."
          description="Overview, tabs, and pills now live as routed partials inside one shared components page shell."
          headingLevel="h1"
        />
      </Section>

      <Section key="components-examples">
        <Block size="md" gap="6">
          {Outlet()}
        </Block>
      </Section>
    </>
  );
}
