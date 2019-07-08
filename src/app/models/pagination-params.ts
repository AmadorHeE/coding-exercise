import {HttpParams} from '@angular/common/http';

export interface PaginationParams {
  page: string;
  limit?: string;
  sort?: string;
  order?: string;
  expand?: string;
}

export const DEFAULT_PUBL_PAGINATION_PARAMS: PaginationParams = {
  page: '1',
  limit: '10',
  sort: 'date',
  order: 'desc',
  expand: 'author'
};

export function getHttpParamsForPublications(paginationParams: PaginationParams): HttpParams {
  let httpParams = new HttpParams().append('_page', paginationParams.page);
  if (paginationParams.limit) { httpParams = httpParams.append('_limit', paginationParams.limit); }
  if (paginationParams.sort) { httpParams = httpParams.append('_sort', paginationParams.sort); }
  if (paginationParams.order) { httpParams = httpParams.append('_order', paginationParams.order); }
  if (paginationParams.expand) { httpParams = httpParams.append('_expand', paginationParams.expand); }
  return httpParams;
}
