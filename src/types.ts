interface ICardInfo {
  title: string;
  description: string | number;
}

export interface ICard {
  img: string;
  name: string;
  info?: ICardInfo[];
}

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
