import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import Card from '../components/Card';
import Controls from '../components/Controls';
import List from '../components/List';
import { ALL_COUNTRIES } from '../config';
import { ICountries } from '../types';

interface HomeProps {
  countries: ICountries[];
  setCountries: (data: ICountries[]) => void;
}

export const HomePage: FC<HomeProps> = ({ countries, setCountries }) => {
  const [filterCountries, setFilterCountries] = useState<ICountries[]>(countries);

  const handleSearch = (search: string, region: string) => {
    let data = [...countries];

    if (region) {
      data = data.filter(country => country.region.includes(region));
    }

    if (search) {
      data = data.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilterCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
  }, []);

  useEffect(() => setFilterCountries(countries), [countries]);

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filterCountries.map(country => {
          const countryInfo = {
            img: country.flags.svg,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population,
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };
          return <Card key={country.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};
