export class Note {
    title: string = "";
    name: string = "";
    label: string = "";
    email: string = "";
    content: string = "";
  
    constructor(data: Partial<Note> = {}) {
      Object.assign(this, data);
    }
  }
  