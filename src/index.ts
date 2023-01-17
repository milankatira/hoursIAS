import UserRoutes from './user/user.routes';
import appDataRoutes from './appdata/appdata.routes';
import ProviderRoutes from './provider/provider.routes';
import myfilmListRoutes from './myList/films/films.routes';
import myseriesListRoutes from './myList/series/series.routes';
import myfilmdownloadRoutes from './download/films/films.routes';
import myseriesdownloadRoutes from './download/series/series.routes';
import mylistRoutes from './myList/common/mylist.routes';
import downloadRoutes from './download/common/download.routes';
import pdfRoutes from './pdf/pdf.routes';
export const Routes = [
  UserRoutes,
  appDataRoutes,
  myfilmListRoutes,
  myseriesListRoutes,
  myfilmdownloadRoutes,
  myseriesdownloadRoutes,
  ProviderRoutes,
  mylistRoutes,
  downloadRoutes,
  pdfRoutes,
];
