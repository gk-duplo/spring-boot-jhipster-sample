import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 10819,
};

export const sampleWithPartialData: ITask = {
  id: 9479,
  title: 'who yearly',
};

export const sampleWithFullData: ITask = {
  id: 3594,
  title: 'although highly sonata',
  description: 'request',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
