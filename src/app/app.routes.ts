import { Routes } from '@angular/router';
import { CounterPageComponent, HeroPageComponent, PasswordGeneratorPageComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: PasswordGeneratorPageComponent,
  },
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  }
];
