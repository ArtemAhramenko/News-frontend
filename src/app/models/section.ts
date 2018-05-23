export class Section {
  id: number;
  heading: string;


  constructor(data: Section) {
    this.id = data.id;
    this.heading = data.heading;
  }
}
