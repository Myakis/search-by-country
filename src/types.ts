interface ICardInfo {
  title: string;
  description: string | number;
}

export interface ICard {
  img: string;
  name: string;
  info?: ICardInfo[];
}
/////////////////////////////////////
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

// //////////////////////////////////////

interface ICurrencies {
  code: string;
  name: string;
  symbol: string;
}
interface ILanguages {
  name: string;
  nativeName: string;
}

export interface InfoProps {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: ICurrencies[];
  languages: ILanguages[];
  borders?: string[];
}

// //////////////////

export interface IOptionsItemSelect {
  value: string;
  label: string;
}
