import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NoteDetailsComponent } from './component/note-details/note-details.component';
import { NoteFormComponent } from './component/note-form/note-form.component';
import { NoteListViewComponent } from './component/note-list-view/note-list-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'note', component: NoteFormComponent },
  { path: 'note/list', component: NoteListViewComponent },
  { path: 'note/details/:title', component: NoteDetailsComponent},
  { path: 'http', loadChildren: () => import('./http/http.module').then(m => m.HttpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
