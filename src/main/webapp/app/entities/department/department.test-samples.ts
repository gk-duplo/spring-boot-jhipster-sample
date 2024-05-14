import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 29544,
  departmentName: 'however eek raft',
};

export const sampleWithPartialData: IDepartment = {
  id: 20122,
  departmentName: 'fast adventurously colligate',
};

export const sampleWithFullData: IDepartment = {
  id: 939,
  departmentName: 'drat patch courageously',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'gah damp when',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
