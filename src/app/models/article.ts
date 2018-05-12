export class Article {
  id: number;
  user_id: number;
  title: string;
  description: string;
  content: string;
  createdAt: any;
  updatedAt: any;


  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    this.content = data.content;
  }
}
