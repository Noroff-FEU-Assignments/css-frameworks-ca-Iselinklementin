import React from "react";
import Pagination from "react-bootstrap/Pagination";
import styled from "styled-components";

const StyledPagination = styled(Pagination)`
  & .page-link {
    padding: 0.8rem 1.2rem;
    border: ${props => props.theme.primaryColour} solid 1px;
    color: ${props => props.theme.primaryColour};
    background-color: white;
  }
  & .page-item.active .page-link {
    background-color: ${props => props.theme.primaryColour};
    border: ${props => props.theme.primaryColour} solid 1px;
  }
`;

const PaginationManager = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return <StyledPagination className="my-5">{items}</StyledPagination>;
};

export default PaginationManager;
