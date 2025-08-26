import { Routes } from '@angular/router';
import { CounterPageComponent, PasswordGeneratorPageComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: PasswordGeneratorPageComponent,
  },
  {
    path: 'counter',
    component: CounterPageComponent,
  }
];
