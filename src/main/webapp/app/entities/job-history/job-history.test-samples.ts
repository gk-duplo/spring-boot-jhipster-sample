import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 28263,
};

export const sampleWithPartialData: IJobHistory = {
  id: 11543,
  startDate: dayjs('2024-05-13T14:26'),
  endDate: dayjs('2024-05-14T05:48'),
};

export const sampleWithFullData: IJobHistory = {
  id: 2885,
  startDate: dayjs('2024-05-14T11:34'),
  endDate: dayjs('2024-05-14T05:13'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
