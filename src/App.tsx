import { useEffect, useState } from 'react';
import axios from 'axios';

import Controls from './components/Controls';
import Header from './components/Header';
import Main from './components/Main';
import { ALL_COUNTRIES } from './config';
import List from './components/List';
import Card from './components/Card';

interface IFlags {
  svg: string;
  png: string;
}

interface ICountries {
  name: string;
  capital: string;
  population: number;
  flags: IFlags;
  region: string;
}

function App() {
  const [countries, setCountries] = useState<ICountries[]>([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => {
      setCountries(data);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
        <Controls />
        <List>
          {countries.map(country => {
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
      </Main>
    </>
  );
}

export default App;
