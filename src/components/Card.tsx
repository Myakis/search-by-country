import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICard } from '../types';
import { CardBody, CardImg, CardList, CardListItem, CardTitle, Wrapper } from './UI/Card';

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
