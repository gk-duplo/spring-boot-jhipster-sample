import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 24789,
  login: 'cC',
};

export const sampleWithPartialData: IUser = {
  id: 31478,
  login: 'cI@rGmF6',
};

export const sampleWithFullData: IUser = {
  id: 6116,
  login: '&jc`P@0Y\\}0Ee\\-L',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
