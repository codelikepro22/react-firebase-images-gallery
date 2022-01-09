import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from './config';

const updateUserRecords = (collectionName, uid, updatedObj) => {
  return new Promise(async (resolve, reject) => {
    const q = query(collection(db, collectionName), where('uid', '==', uid));
    try {
      const snapshot = await getDocs(q);
      const updatePromises = [];
      snapshot.forEach((document) => {
        updatePromises.push(
          updateDoc(doc(db, collectionName, document.id), updatedObj)
        );
      });
      await Promise.all(updatePromises);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export default updateUserRecords;
