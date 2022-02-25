import styled from 'styled-components';
import colors from '../../styles/colors';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

export const Line = styled.hr`
  border-top: 1px solid ${colors.separator_line};
`;
