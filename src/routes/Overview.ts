import styled from "styled-components";

export const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.primary50}; // #EEEEEE
  color: ${props => props.theme.background};
  padding: 10px 20px;
  border-radius: 10px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;