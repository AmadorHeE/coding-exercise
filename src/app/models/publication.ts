import {User} from './user';

const TITLE = 'title';
const DATE = 'date';
const DESCRIPTION = 'description';
const AUTHOR = 'author';

export interface Publication {
  title: string;
  date: Date;
  description: string;
  author?: User;
}


export function deserializePublication(obj: any): Publication {
  const {[TITLE]: title, [DATE]: date, [DESCRIPTION]: description, [AUTHOR]: author} = obj;
  const publication: Publication = {title, date: new Date(date), description};

  if (author) { publication.author = author; }

  return publication;
}


export function deserializePublicationArray(objs): Publication[] {
  return objs.map(obj => deserializePublication(obj));
}
