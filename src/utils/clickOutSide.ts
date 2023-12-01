import { RefObject } from 'react';

function clickOutside(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  event: any,
  fn: () => void,
  ref: RefObject<HTMLElement>
): void {
  if (
    /* eslint-disable operator-linebreak */
    ref.current &&
    !ref.current.contains(event.target)
  ) {
    fn();
  }
}

export default clickOutside;
