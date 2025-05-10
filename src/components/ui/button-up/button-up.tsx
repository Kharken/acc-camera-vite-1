
import {scrollToAnchor} from '../../../utils/functions/scroll-to-anchor.ts';
import {RefProps} from '../../../app/types/types.ts';

const ButtonUp = ({childRef}: RefProps) => (
  <a className="up-btn" data-testId='button-up'
    onClick={() => scrollToAnchor(childRef)}
  >
    <svg width="12"
      height="18"
      aria-hidden="true"
    >
      <use xlinkHref="#icon-arrow2"></use>
    </svg>
  </a>
);

export default ButtonUp;
