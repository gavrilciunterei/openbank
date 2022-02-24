import styled from 'styled-components';

export const TwoInputs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;
