import {Publication} from './publication';

/**
 * Interface that defines the publicationPage's model.
 */
export interface PublicationPage {
  total: number;
  data: Publication[];
}
