import {Section} from './section';

export class Article {
  id: number;
  section: Section;
  title: string;
  description: string;
  content: string;
  createdDate: any;


  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.createdDate = data.createdDate;
    this.section = new Section(data.section);
    // this.articleTopic = data.articleTopic;
  }
}
