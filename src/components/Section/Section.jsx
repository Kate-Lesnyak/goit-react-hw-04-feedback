import PropTypes from 'prop-types';

import { StyledSection, StyledTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
