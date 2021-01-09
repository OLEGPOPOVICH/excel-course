import {Router} from '@core/routes/Router';
import {DashboardPage} from './pages/DashboardPage';
import {ExcelPAge} from './pages/ExcelPage';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPAge
});
