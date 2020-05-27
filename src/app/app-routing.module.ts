import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';


const routes: Routes = [
  { path: 'all', component: HomeComponent },
  { path: 'add', component: MediaItemFormComponent },
  { path: 'medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
