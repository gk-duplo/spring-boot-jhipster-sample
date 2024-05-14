import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 13034,
};

export const sampleWithPartialData: IEmployee = {
  id: 21185,
  firstName: 'Keyon',
  email: 'Kayden37@yahoo.com',
  phoneNumber: 'uncommon',
  salary: 16701,
  commissionPct: 4282,
};

export const sampleWithFullData: IEmployee = {
  id: 29077,
  firstName: 'Rhianna',
  lastName: 'Murray',
  email: 'Samson_Greenholt95@gmail.com',
  phoneNumber: 'when what',
  hireDate: dayjs('2024-05-13T18:14'),
  salary: 7445,
  commissionPct: 23813,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
