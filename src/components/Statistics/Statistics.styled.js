import styled from 'styled-components';

export const StyledStatisticsWrapper = styled.div`
display: flex;
gap: 20px;
justify-content: center;
padding: 4px;
margin-bottom: 10px;

p {
font-size: 14px;
padding: 10px;
border-radius: 8px;
text-transform: capitalize;
background-color: ${({ theme }) => theme.colors.backgroundColorStatistis};
}
`;

export const StyledStatisticsTotal = styled.div`
text-align: center;
font-size: 16px;
font-weight: bold;
`;



