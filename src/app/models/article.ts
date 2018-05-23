import {User} from "./user";

export class Article {
  id: number;
  // articleTopic: String;
  title: string;
  description: string;
  content: string;
  createdDate: any;
  user: User;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.createdDate = data.createdDate;
    this.user = data.user;
    // this.articleTopic = data.articleTopic;
  }
}
