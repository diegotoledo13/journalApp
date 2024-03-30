import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirestoreDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  savingNewNotes,
  setActiveNote,
  setNote,
} from "./journalSlice";
import { loadNote } from "../../helpers/loadNotes";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNotes());
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirestoreDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};
export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNote(uid);
    dispatch(setNote(notes));
  };
};
