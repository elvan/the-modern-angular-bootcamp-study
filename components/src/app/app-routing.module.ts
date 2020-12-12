import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements.module').then(
        (module) => module.ElementsModule
      ),
  },
  {
    path: 'collections',
    loadChildren: () =>
      import('./collections/collections.module').then(
        (module) => module.CollectionsModule
      ),
  },
  {
    path: 'views',
    loadChildren: () =>
      import('./views/views.module').then((module) => module.ViewsModule),
  },
  {
    path: 'mods',
    loadChildren: () =>
      import('./mods/mods.module').then((module) => module.ModsModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
