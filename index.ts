class Note {
  title: string;
  content: string;
  constructor(title: string, content: string){
      this.title = title;
      this.content = content;
  }
  addNote(){
      const newNote = {
          title: this.title,
          content: this.content,
      }
      return newNote
  }
}

class NoteList {
  notelist: Array<any>;
  constructor(){
      this.notelist = [];
  }
  addNoteToList(note: any){
      this.notelist.push(note);
  }
}
const notelist = new NoteList();
const note1 = new Note('BA', 'BB');
notelist.addNoteToList(note1.addNote())

const note2 = new Note('AC', 'AD');
notelist.addNoteToList(note2.addNote());
console.log(notelist.notelist);