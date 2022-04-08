import styled from 'styled-components';

export const Wrapper = styled.article`
  border-radius: var(--border-radius);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;
export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
export const CardBody = styled.div`
  padding: 1rem 1.5rem 1rem;
`;
export const CardTitle = styled.h3`
  margin:0;
  font-size:var(--fs-md)
  font-weight:var(--fw-bold)
`;

export const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0 0;
`;
export const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & b {
    font-weight: var(--fw-bold);
  }
`;
