import { useState, useEffect } from 'react';
import app from './config';
import { 
  addDoc, 
  collection, 
  deleteDoc,
  doc, 
  getDoc,
  getDocs, 
  getFirestore,
  onSnapshot,
  query,
  setDoc, 
  updateDoc,
  where
} from 'firebase/firestore';

async function addDocument(name, data) {
  let ref = null;

  try {
    const db = getFirestore(app);
    ref = await addDoc(collection(db, name), data);
  } catch (err) {        
    console.log(err);
  }

  return { 
    ...data, 
    id: ref.id
  };
}

async function updateDocument(name, id, data) {
  const db = getFirestore(app);
  const docRef = doc(db, name, id);
  await updateDoc(docRef, data);
}

async function deleteDocument(name, id) {
  const db = getFirestore();
  const docRef = doc(db, name, id);
  await deleteDoc(docRef);
}

async function setDocument(name, id, data) {
  const db = getFirestore(app);
  const docRef = doc(db, name, id);
  await setDoc(docRef, data);
}

function getCollection(name, realtime = false) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!realtime) {
        const db = getFirestore(app);
        const snap = await getDocs(collection(db, name));
        const docs = snap.docs.map((doc) => {
          const data = { ...doc.data(), id: doc.id };
          if (name !== 'config') data.ref = name;
          return data;
        });

        setData(docs);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (realtime) {
      const db = getFirestore(app);
      const unsubscriber = onSnapshot(
        collection(db, name), 
        (snap) => {
          const docs = snap.docs.map((doc) => ({ 
            ...doc.data(), 
            id: doc.id, 
            ref: name
          }));
          setData(docs);
        }
      );

      return () => {
        unsubscriber();
      };
    }
  }, []);

  return data;
}

function getDocument(name, id) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (id && !loading) {
      setLoading(true);

      const db = getFirestore(app);
      const docRef = doc(db, name, id);
      const snap = await getDoc(docRef);

      setData(snap.exists() ? snap.data() : {});
      setLoading(false);
    }
    }
    fetchData();
  }, [id]);

  return data;  
}

async function getByQuery(name, condition) {
  const data = [];

  const db = getFirestore(app);
  const q = query(collection(db, name), where(...condition));

  const snap = await getDocs(q);
  snap.forEach((doc) => { 
    data.push([
      ...data, 
      doc.id
    ]); 
  });

  return data;
}

export {
  addDocument,
  deleteDocument,
  getByQuery,
  getCollection,
  getDocument,
  updateDocument,
  setDocument,
};