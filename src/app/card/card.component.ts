import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import postsData from '../data/posts.json';
import usersData from '../data/users.json';
import commentsData from '../data/comments.json';

interface Posts {
  userId: number;
  id: number;
  name: string;
  body: string;
  imageId: number;
  title:string;
}

interface Users {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: String;
}

interface Comments {
  postId: Number;
  id: Number;
  name: String;
  email: String;
  body: String;
  userId: Number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})
export class CardComponent implements OnInit {

  newTitle: string = "";
  newBody: string = "";

  changeText() { debugger
    console.log(this.newTitle);
    console.log(this.newBody);
  }

  p: number = 1;

  constructor() {}
  posts = new Array<any>();
  users = new Array<any>();
  comments = new Array<any>();


  ngOnInit(): void {
    console.log(postsData)
    this.posts = postsData

    console.log(usersData)
    this.users = usersData

    console.log(commentsData)
    this.comments = commentsData

  }

  postId: number = 0;
  postUserId: number = 0;
  postTitle: string = "";
  postBody: string = "";
  postImageId: number = 0;
  postUserName: string = "";
  selectedPostData: any =  {};


  public selectedPost(post: any) {

    this.selectedPostData = post;
    this.postId = post.id;
    this.postUserId = post.userId;
    this.postTitle = post.title;
    this.postBody = post.body;
    this.postImageId = post.imageId;
    this.postUserName = post.name;

    console.log(this.postId);
  }

  data: Array<any>

  getUsers() {
    console.log(this.data)
  }


}
