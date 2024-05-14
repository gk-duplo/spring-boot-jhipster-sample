import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 8128,
};

export const sampleWithPartialData: ICountry = {
  id: 26510,
  countryName: 'blah blah',
};

export const sampleWithFullData: ICountry = {
  id: 3840,
  countryName: 'yum runny although',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
