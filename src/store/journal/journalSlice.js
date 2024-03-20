import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
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
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNote: (state) => {},
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
} = journalSlice.actions;
