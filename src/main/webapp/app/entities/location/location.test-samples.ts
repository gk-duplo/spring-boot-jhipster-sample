import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 19118,
};

export const sampleWithPartialData: ILocation = {
  id: 12612,
  postalCode: 'copyright sole',
  stateProvince: 'gah',
};

export const sampleWithFullData: ILocation = {
  id: 31150,
  streetAddress: 'inveigle whereas mission',
  postalCode: 'carnival frenetically yippee',
  city: 'Beaverton',
  stateProvince: 'till where',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
