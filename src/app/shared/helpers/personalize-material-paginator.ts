import {MatPaginatorIntl} from '@angular/material';

/**
 * Personalizes the paginator messages.
 */
export class MatPaginatorIntlCustom extends MatPaginatorIntl {
  firstPageLabel = 'Primera página';
  itemsPerPageLabel = 'Publicaciones por página';
  nextPageLabel = 'Siguiente página';
  previousPageLabel = 'Página anterior';
  lastPageLabel = 'Última pagina';

  getRangeLabel = (page, pageSize, length) => '';

}
