import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { filterByCode } from '../config';
import { InfoProps } from '../types';
import {
  InfoImg,
  InfoTitle,
  List,
  ListGroup,
  ListItem,
  Meta,
  Tag,
  TagGroup,
  Wrapper,
} from './UI/Info';

const Info: FC<InfoProps> = props => {
  const [neighbors, setNeighbors] = useState([]);
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = props;

  useEffect(() => {
    if (borders) {
      axios.get(filterByCode(borders)).then(({ data }) => {
        setNeighbors(data.map((c: any) => c.name));
      });
    }
  }, [borders]);

  if (!name) {
    return <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Loading</h1>;
  }

  return (
    <Wrapper>
      <InfoImg src={flag} alt={name} />
      <div>
        <InfoTitle>{name}</InfoTitle>

        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name: </b>
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population: </b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region: </b>
              {region}
            </ListItem>
            <ListItem>
              <b>Sub region: </b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital: </b>
              {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {topLevelDomain.map(domain => (
                <span key={domain}>{domain}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies.map(currency => (
                <span key={currency.code}>{currency.name} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages: </b>
              {languages.map(language => (
                <span key={language.name}>{language.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>

        <Meta>
          <b>Border Countries</b>
          {!borders?.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map(border => (
                <Link key={border} to={`/country/${border}`}>
                  <Tag>{border}</Tag>
                </Link>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

export default Info;
