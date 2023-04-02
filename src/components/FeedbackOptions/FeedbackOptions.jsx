import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={css['options']}>
      <button
        type="button"
        className={css['options-btn']}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        className={css['options-btn']}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css['options-btn']}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
