import {deserializeAuthor, Author} from './author';

const TITLE = 'title';
const DATE = 'date';
const DESCRIPTION = 'description';
const IMAGE_URL = 'imageUrl';
const AUTHOR = 'author';

/**
 * Interface that defines the publication's model.
 */
export interface Publication {
  title: string;
  date: Date;
  description: string;
  imageUrl: string;
  author?: Author;
}

/**
 * Casts the object sent by the server to one with the publication's interface.
 * @param obj: Object sent by the server.
 */
export function deserializePublication(obj: any): Publication {
  const {[TITLE]: title, [DATE]: date, [DESCRIPTION]: description, [IMAGE_URL]: imageUrl, [AUTHOR]: author} = obj;
  const publication: Publication = {title, date: new Date(date), description, imageUrl};

  if (author) { publication.author = deserializeAuthor(author); }

  return publication;
}

/**
 * Casts an array of objects sent by the server to one with the publication's interface.
 * @param objs: Array of objects sent by the server.
 */
export function deserializePublicationArray(objs): Publication[] {
  return objs.map(obj => deserializePublication(obj));
}
