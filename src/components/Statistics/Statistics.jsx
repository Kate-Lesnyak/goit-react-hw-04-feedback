import PropTypes from 'prop-types';

import {
  StyledStatisticsWrapper,
  StyledStatisticsTotal,
} from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StyledStatisticsWrapper>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </StyledStatisticsWrapper>

      <StyledStatisticsTotal>
        <p>
          Total: <span>{total()}</span>
        </p>
        <p>
          <span>
            Positive feedback: {positivePercentage() ? positivePercentage() : 0}
            %
          </span>
        </p>
      </StyledStatisticsTotal>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
