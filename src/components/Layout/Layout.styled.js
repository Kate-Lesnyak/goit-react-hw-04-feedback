import styled from "styled-components";

export const StyledContainer = styled.div`
  padding-left: 15px;
	padding-right: 15px;

	@media (min-width: 480px) {
		width: 480px;
		margin-left: auto;
		margin-right: auto;
	}

	@media (min-width: 768px) {
		width: 768px;
	}

	@media (min-width: 1200px) {
		width: 1200px;
	}
`;
