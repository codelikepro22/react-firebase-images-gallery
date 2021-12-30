import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';

const deleteDocument = (collectionName, documentId) => {
  return deleteDoc(doc(db, collectionName, documentId));
};

export default deleteDocument;
