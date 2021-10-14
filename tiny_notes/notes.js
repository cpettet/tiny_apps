const generateNotes = () => {
  const localStorage = window.localStorage;

  const renderNotes = () => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      const savedNotes = JSON.parse(saved);
      showNotes(savedNotes);
    }
  };

  const notesContainer = document.createElement("div");
  notesContainer.className = "notes__container";
  notesContainer.style.border = `5px solid ${apps["notes"].color}`;

  const newNoteForm = document.createElement("form");
  newNoteForm.className = "new-note-form";

  const newNoteInput = document.createElement("input");
  newNoteInput.className = "new-note-form__input";
  newNoteInput.type = "text";
  newNoteInput.placeholder = "Enter new note here....";
  newNoteForm.append(newNoteInput);

  const newNoteSubmit = document.createElement("button");
  newNoteSubmit.className = "new-note-form__submit";
  newNoteSubmit.type = "submit";
  newNoteSubmit.innerText = "Submit";
  newNoteForm.append(newNoteSubmit);

  document.querySelector(".display").append(notesContainer);
  document.querySelector(".options").append(newNoteForm);

  const showNotes = (notes) => {
    notes.forEach((note) => {
      createNoteElement(note);
    });
  };

  const addNote = (text) => {
    const note = {
      text: text,
      timeStamp: Date.now(),
    };
    const notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    createNoteElement(note);
  };

  const createNoteElement = (note) => {
    const newNoteDiv = document.createElement("div");
    newNoteDiv.className = "note";
    newNoteDiv.id = note.timeStamp;
    newNoteDiv.innerText = note.text;

    notesContainer.append(newNoteDiv);
  };

  newNoteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newNoteText = newNoteInput.value.trim();
    newNoteInput.value = "";
    addNote(newNoteText);
  });

  renderNotes();
};
