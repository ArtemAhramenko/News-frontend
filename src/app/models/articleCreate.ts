import {User} from "./user";

export class ArticleCreate {
  id: number;
  title: string;
  description: string;
  content: string;
  createdDate: any;
  user: User;
}
