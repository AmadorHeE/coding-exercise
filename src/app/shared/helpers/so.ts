import {MatPaginatorIntl} from '@angular/material';

export class MatPaginatorIntlCustom extends MatPaginatorIntl {
  firstPageLabel = 'Primera página';
  itemsPerPageLabel = 'Publicaciones por página';
  nextPageLabel = 'Siguiente página';
  previousPageLabel = 'Página anterior';
  lastPageLabel = 'Última pagina';

  getRangeLabel = (page, pageSize, length) => '';

}
