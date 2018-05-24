import {Section} from './section';
import {User} from "./user";

export class Article {
  id: number;
  section: Section;
  title: string;
  description: string;
  content: string;
  createdDate: any;
  user_id: number;
  rating: number;

  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.createdDate = data.createdDate;
    this.section = new Section(data.section);
    this.user_id = data.user_id;
    // this.articleTopic = data.articleTopic;
    this.rating = data.rating;
  }
}
