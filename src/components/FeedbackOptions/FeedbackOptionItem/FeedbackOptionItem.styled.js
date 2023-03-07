import styled from 'styled-components';

export const StyledFeedbackOptionItem = styled.li`
padding: 4px;
`;

export const StyledButton = styled.button`
font-size: 14px;
padding: 10px;
border: none;
border-radius: 8px;
text-transform: capitalize;
cursor: pointer;
background-color: ${({ theme }) => theme.colors.buttonBackgroundColor};

transition-property: background-color, color,  box-shadow, transform;
transform: scale(1);

transition: ${({ theme }) => `background-color ${theme.transition}, color ${theme.transition}, box-shadow ${theme.transition}, transform ${theme.transition}`};


:hover, :focus {
background-color: ${({ theme }) => theme.colors.buttonBackgroundColorAccent};
color: ${({ theme }) => theme.colors.textColorAccent};
box-shadow:${({ theme }) => theme.boxShadow};
transform: scale(1.1);
}
`;
