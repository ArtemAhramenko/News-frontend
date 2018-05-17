export class Article {
  id: number;
  user_id: number;
  title: string;
  description: string;
  content: string;
  createdDate: any;
  updatedAt: any;


  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
    this.createdDate = data.createdDate;
  }
}
