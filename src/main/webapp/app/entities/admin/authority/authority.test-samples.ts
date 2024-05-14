import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'f798b2ef-7ca5-49bd-8fbc-dc4ba0e246dd',
};

export const sampleWithPartialData: IAuthority = {
  name: '4bbfbd4b-9c9f-4f61-9c8c-c24c45f03db5',
};

export const sampleWithFullData: IAuthority = {
  name: '515f52a4-da93-42a5-b400-5b60e04c88f1',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
