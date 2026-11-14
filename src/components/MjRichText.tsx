import { Fragment } from 'react';

export interface MjLink {
  text: string;
  href: string;
}

export type MjInline = string | MjLink;
export type MjParagraph = MjInline[];

interface MjRichTextProps {
  paragraphs: MjParagraph[];
  bulleted?: boolean;
}

const LINK_PROPS = { target: '_blank', rel: 'noreferrer' } as const;

export default function MjRichText({ paragraphs, bulleted = false }: MjRichTextProps) {
  const Wrapper = bulleted ? 'ul' : 'div';
  const Block = bulleted ? 'li' : 'p';

  return (
    <Wrapper className={`flex flex-col gap-4 [&_a]:underline ${bulleted ? 'list-disc pl-[1.5em]' : ''}`}>
      {paragraphs.map((paragraph, i) => (
        <Block key={i}>
          {paragraph.map((inline, j) =>
            typeof inline === 'string' ? (
              <Fragment key={j}>{inline}</Fragment>
            ) : (
              <a key={j} href={inline.href} {...LINK_PROPS}>
                {inline.text}
              </a>
            ),
          )}
        </Block>
      ))}
    </Wrapper>
  );
}
