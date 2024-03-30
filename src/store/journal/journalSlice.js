import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    //    notes: [],
    //      active: {
    //      id: "ABC123",
    //      title: "",
    //      body: "",
    //      date: 123456,
    //      imagesUrls: [],
    //    },
  },
  reducers: {
    savingNewNotes: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNote: (state) => {
      state.notes = action.payload;
    },
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNote,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNotes,
} = journalSlice.actions;
