import {User} from "./user";

export class ArticleCreate {
  userId: number;
  title: string;
  description: string;
  content: string;
  createdDate: any;
  sectionId: number;
  rating: number;
}
