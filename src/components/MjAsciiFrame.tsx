const LINE = 'absolute bg-neutral-100';
const CORNER = 'absolute font-mono text-base leading-none text-neutral-100';

export default function MjAsciiFrame() {
  return (
    <>
      <span className={`${LINE} top-0 right-4 left-4 h-px`} />
      <span className={`${LINE} right-4 bottom-0 left-4 h-px`} />
      <span className={`${LINE} top-4 bottom-4 left-0 w-px`} />
      <span className={`${LINE} top-4 right-0 bottom-4 w-px`} />
      <span className={`${CORNER} top-0 left-0 -translate-x-1/2 -translate-y-1/2`}>+</span>
      <span className={`${CORNER} top-0 right-0 translate-x-1/2 -translate-y-1/2`}>+</span>
      <span className={`${CORNER} bottom-0 left-0 -translate-x-1/2 translate-y-1/2`}>+</span>
      <span className={`${CORNER} right-0 bottom-0 translate-x-1/2 translate-y-1/2`}>+</span>
    </>
  );
}
