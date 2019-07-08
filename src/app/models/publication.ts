import {deserializeAuthor, Author} from './author';

const TITLE = 'title';
const DATE = 'date';
const DESCRIPTION = 'description';
const IMAGE_URL = 'imageUrl';
const AUTHOR = 'author';

export interface Publication {
  title: string;
  date: Date;
  description: string;
  imageUrl: string;
  author?: Author;
}


export function deserializePublication(obj: any): Publication {
  const {[TITLE]: title, [DATE]: date, [DESCRIPTION]: description, [IMAGE_URL]: imageUrl, [AUTHOR]: author} = obj;
  const publication: Publication = {title, date: new Date(date), description, imageUrl};

  if (author) { publication.author = deserializeAuthor(author); }

  return publication;
}


export function deserializePublicationArray(objs): Publication[] {
  return objs.map(obj => deserializePublication(obj));
}
