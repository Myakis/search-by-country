import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.article`
  border-radius: var(--border-radius);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem 1rem;
`;
const CardTitle = styled.h3`
  margin:0;
  font-size:var(--fs-md)
  font-weight:var(--fw-bold)
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0 0;
`;
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
  & b {
    font-weight: var(--fw-bold);
  }
`;

interface ICardInfo {
  title: string;
  description: string | number;
}

interface ICard {
  img: string;
  name: string;
  info?: ICardInfo[];
}

const Card: FC<ICard> = ({ img, name, info = [] }) => {
  return (
    <Wrapper>
      <Link to={`/country/${name}`}>
        <CardImg src={img} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            {info!.map(el => {
              return (
                <CardListItem key={el.title}>
                  <b>{el.title}:</b> {el.description}
                </CardListItem>
              );
            })}
          </CardList>
        </CardBody>
      </Link>
    </Wrapper>
  );
};

export default Card;
