import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../../services/http-handler.service';

@Component({
  selector: 'app-post-retriever',
  templateUrl: './post-retriever.component.html',
  styleUrls: ['./post-retriever.component.scss']
})
export class PostRetrieverComponent implements OnInit {

  public contentType: string = "";

  redditPosts: any[] = [];
   
  constructor(private httpHandler: HttpHandlerService) {}

  ngOnInit() {
    if(this.contentType != "" ){
      this.getRedditPosts();
    }
  }


  getRedditPosts() {
    var url = "https://www.reddit.com/r/"+this.contentType+".json"
    this.httpHandler.get<any>(url).subscribe({
      next: (response) => {
        console.log('Reddit Posts:', response);
        this.redditPosts = response.data.children.map((child: any) => child.data);
      },
      error: (error) => {
        console.error('Reddit API Error:', error);
      }
    });
  }

  get showListView(): boolean {
    return (this.redditPosts.length > 0);
  }

  makeGetCall() {
    this.getRedditPosts();
  }

}
