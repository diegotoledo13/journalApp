import { collection, getDocs } from "firebase/firestore/lite";
import { FirestoreDB } from "../firebase/config";

export const loadNote = async (uid = "") => {
  const collectionRef = collection(FirestoreDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);
  const notes = [];
  docs.forEach((doc) =>
    notes.push({
      id: doc.id,
      ...doc.data(),
    })
  );
  return notes;
};
