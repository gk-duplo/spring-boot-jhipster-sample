import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 30569,
};

export const sampleWithPartialData: IRegion = {
  id: 17206,
};

export const sampleWithFullData: IRegion = {
  id: 5542,
  regionName: 'whether',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
