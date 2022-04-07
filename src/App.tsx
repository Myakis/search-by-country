import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Details from './pages/Details';
import { HomePage } from './pages/HomePage';
import NotFound from './pages/NotFound';

interface IFlags {
  svg: string;
  png: string;
}

export interface ICountries {
  name: string;
  capital: string;
  population: number;
  flags: IFlags;
  region: string;
}

function App() {
  const [countries, setCountries] = useState<ICountries[]>([]);

  return (
    <>
      <Header></Header>
      <Main>
        <Routes>
          <Route
            path='/'
            element={<HomePage countries={countries} setCountries={setCountries} />}></Route>
          <Route path='/country/:name' element={<Details />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
