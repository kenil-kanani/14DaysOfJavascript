const newNoteInput = document.getElementById('new-note');
      const addNoteBtn = document.getElementById('add-note');
      const noteList = document.getElementById('note-list');
      
      function addNote() {
        const noteText = newNoteInput.value;
        if (noteText) {
          const newNote = document.createElement('li');
          newNote.innerText = noteText;
          newNote.addEventListener('dblclick', removeNote);
          noteList.appendChild(newNote);
          newNoteInput.value = '';
        }
      }
      
      function removeNote() {
        this.remove();
      }
      
      addNoteBtn.addEventListener('click', addNote);