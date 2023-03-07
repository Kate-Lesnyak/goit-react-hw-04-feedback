import PropTypes from 'prop-types';
import { FeedbackOptionItem } from './FeedbackOptionItem/FeedbackOptionItem';

import { StyledFeedbackOptions } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptions>
      {options.map((option, idx) => (
        <FeedbackOptionItem
          key={idx}
          option={option}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </StyledFeedbackOptions>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
