import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 31995,
};

export const sampleWithPartialData: IJob = {
  id: 30296,
};

export const sampleWithFullData: IJob = {
  id: 16716,
  jobTitle: 'Direct Division Representative',
  minSalary: 544,
  maxSalary: 8837,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
