import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.article``;
const CardImg = styled.img``;
const CardBody = styled.div``;
const CardTitle = styled.h3``;

const CardList = styled.ul``;
const CardListItem = styled.li``;

interface ICardInfo {
  title: string;
  description: string | number;
}

interface ICard {
  img: string;
  name: string;
  info?: ICardInfo[];
  onClick?: () => void;
}

const Card: FC<ICard> = ({ img, name, info = [], onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImg />
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
    </Wrapper>
  );
};

export default Card;
