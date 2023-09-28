import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostEnvFromDocusignComponent } from './component/post-env-from-docusign/post-env-from-docusign.component';
import { PostRetrieverComponent } from './component/post-retriever/post-retriever.component';
import { HttpComponent } from './http.component';

const routes: Routes = [
  { path: '', component: HttpComponent },
  { path: "getposts", component: PostRetrieverComponent}, 
  { path: "senddocusignenv", component: PostEnvFromDocusignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
