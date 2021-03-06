import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.mensajes = this.dataService.getPosts();
    //.subscribe( (posts: any) => {
    //  console.log(posts);
    //  this.mensajes = posts;
    //});
  }

  escuchaClick(e: number) {
    console.log(e);
  }

}
