import {User} from './user';

export interface Publication {
  title: string;
  date: Date;
  description: string;
  user?: User;
}
