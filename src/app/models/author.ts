const ID = 'id';
const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';
const EMAIL = 'email';
const AVATAR = 'avatar';
const PROFESSION = 'jobTitle';
const DESCRIPTION = 'paragraph';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  profession: string;
  description: string;
}

export function deserializeAuthor(obj: any): Author {
  const {
    [ID]: id, [FIRST_NAME]: firstName, [LAST_NAME]: lastName, [EMAIL]: email,
    [AVATAR]: avatar, [PROFESSION]: profession, [DESCRIPTION]: description
  } = obj;
  const author: Author = {id, firstName, lastName, email, avatar, profession, description};
  return author;
}

export function deserializeAuthorArray(objs: any[]) {
  return objs.map(obj => this.deserializePublication(obj));
}
