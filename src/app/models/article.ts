export class Article {
  id: number;
  // articleTopic: String;
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
    // this.articleTopic = data.articleTopic;
  }
}
