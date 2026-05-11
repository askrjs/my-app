import { state } from '@askrjs/askr';
import { Link } from '@askrjs/askr/router';
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  Input,
  Toggle,
} from '@askrjs/ui';
import { LayoutGridIcon, ListIcon, ToggleLeftIcon } from '@askrjs/lucide';
import { Block, Inline } from '@askrjs/themes/layouts';
import { Button } from '@askrjs/themes/controls';
import { Separator } from '@askrjs/themes/surfaces';
import Counter from '../../components/examples/counter';

export default function ComponentsOverview() {
  const name = state('');
  const bold = state(false);

  return (
    <>
      <Block key="components-counter">
        <Counter />
      </Block>

      <Separator decorative />

      <Block key="components-accordion">
        <Block gap="3">
          <div>
            <Inline as="span" align="center" gap="2">
              <ListIcon size={16} />
              <h2>Accordion</h2>
            </Inline>
            <p>
              A lightweight disclosure pattern for page-level explanation
              without adding another surface.
            </p>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="size">
              <AccordionHeader>
                <AccordionTrigger>Why keep this page small?</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <p>
                  The goal is to show a believable app surface, not every
                  control in the design system.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reactivity">
              <AccordionHeader>
                <AccordionTrigger>Where is the reactivity?</AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <p>
                  The counter and the input row both update live from local
                  state.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="styling">
              <AccordionHeader>
                <AccordionTrigger>
                  What provides the styling and nav behavior?
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <p>
                  The components stay headless while askr-themes supplies the
                  skin, layout primitives, and nav helpers like
                  <code> NavLink</code> matching.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="navlink-match">
              <AccordionHeader>
                <AccordionTrigger>
                  Why does Overview stop highlighting on this page?
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <p>
                  The docs sidebar uses <code>match="exact"</code> for the
                  overview link, while deeper section links keep the default
                  prefix matching. That lets one nav mix both behaviors.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Block>
      </Block>

      <Separator decorative />

      <Block key="components-tabs-example">
        <Block gap="3">
          <div>
            <Inline as="span" align="center" gap="2">
              <LayoutGridIcon size={16} />
              <h2>Tabs Example</h2>
            </Inline>
            <p>
              Routeable tabs work better as a partial under the shared
              components page instead of a full repeated docs page.
            </p>
          </div>
          <Block gap="2">
            <p>
              Use the tabs child route to see the variant on its own URL while
              keeping the surrounding page chrome shared.
            </p>
            <Button asChild variant="secondary">
              <Link href="/docs/components/tabs">Open the tabs example</Link>
            </Button>
          </Block>
        </Block>
      </Block>

      <Separator decorative />

      <Block key="components-pills-example">
        <Block gap="3">
          <div>
            <Inline as="span" align="center" gap="2">
              <LayoutGridIcon size={16} />
              <h2>Pills Example</h2>
            </Inline>
            <p>
              Pills also read better as a child route when the surrounding docs
              shell stays shared.
            </p>
          </div>
          <Block gap="2">
            <p>
              Use the pills child route to isolate the lighter subsection
              treatment without duplicating the page frame.
            </p>
            <Button asChild variant="secondary">
              <Link href="/docs/components/pills">Open the pills example</Link>
            </Button>
          </Block>
        </Block>
      </Block>

      <Separator decorative />

      <Block key="components-shared-state">
        <Block gap="3">
          <div>
            <Inline as="span" align="center" gap="2">
              <ToggleLeftIcon size={16} />
              <h2>State Example</h2>
            </Inline>
            <p>One state value drives both the toggle and the preview text.</p>
          </div>
          <Block gap="3">
            <Inline wrap="wrap" gap="md" align="center">
              <Toggle
                pressed={bold()}
                onPress={() => bold.set((value) => !value)}
              >
                Bold
              </Toggle>
              <Input
                placeholder="Name"
                onInput={(event: Event) =>
                  name.set((event.target as HTMLInputElement).value)
                }
              />
            </Inline>
            <p style={`font-weight: ${bold() ? '700' : '400'}`}>
              {name() ? `Hi, ${name()}!` : 'Type a name to update the preview.'}
            </p>
          </Block>
        </Block>
      </Block>
    </>
  );
}
