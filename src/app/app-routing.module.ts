import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCounterComponent } from './page-counter/page-counter.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  }, 
  {
    path: 'counter',
    component: PageCounterComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
