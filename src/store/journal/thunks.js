import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirestoreDB } from "../../firebase/config";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirestoreDB, `${uid}/journal/notes`));
    const setDocResp = await setDoc(newDoc, newNote);
  };
};
