import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http.component';
import { PostRetrieverComponent } from './component/post-retriever/post-retriever.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostEnvFromDocusignComponent } from './component/post-env-from-docusign/post-env-from-docusign.component';


@NgModule({
  declarations: [
    HttpComponent,
    PostRetrieverComponent,
    PostEnvFromDocusignComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,
    FormsModule
  ]
})
export class HttpModule { }
