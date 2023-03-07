import PropTypes from 'prop-types';

import {
  StyledFeedbackOptionItem,
  StyledButton,
} from './FeedbackOptionItem.styled';
export const FeedbackOptionItem = ({ option, onLeaveFeedback }) => {
  return (
    <StyledFeedbackOptionItem>
      <StyledButton
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </StyledButton>
    </StyledFeedbackOptionItem>
  );
};

FeedbackOptionItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
