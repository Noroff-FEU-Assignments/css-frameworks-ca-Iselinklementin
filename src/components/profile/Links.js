import styled from "styled-components";
import { Link } from "react-router-dom";

const Share = styled(Link)`
  font-size: 18px;
  color: black;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.primaryColour};
  }
`;

export default Share;

export const ShareIcons = styled(Share)`
  font-size: 25px;
`;
