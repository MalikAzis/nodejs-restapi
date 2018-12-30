module.exports = app => {
  const notes = require("../controllers/noteController.js");

  // Create a new Note
  app.post("/notes", notes.create);

  // Retrive all Notes
  app.get("/notes", notes.findAll);

  // Retrive a single Note with noteID
  app.get("/notes/:noteId", notes.findOne);

  // Update a Note with noteId
  app.put("/notes/:noteId", notes.update);

  // Delete a note with noteId
  app.delete("/notes/:noteId", notes.delete);
};
