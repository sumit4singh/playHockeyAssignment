import { Note } from '../model/note';

export class NoteBuilder {
  private data: Partial<Note> = {};

  withTitle(title: string): NoteBuilder {
    this.data.title = title;
    return this;
  }

  withName(name: string): NoteBuilder {
    this.data.name = name;
    return this;
  }

  withLabel(label: string): NoteBuilder {
    this.data.label = label;
    return this;
  }

  withEmail(email: string): NoteBuilder {
    this.data.email = email;
    return this;
  }

  withContent(content: string): NoteBuilder {
    this.data.content = content;
    return this;
  }

  build(): Note {
    return new Note(this.data);
  }
}
