import firebase from "../firebase/firebase";

export const addUser = async (authUser: any) => {
  const resp = await firebase
    .firestore()
    .collection("users")
    .doc(authUser.uid as string)
    .set({ ...authUser }, { merge: true });
  return resp;
};

export const getPost = async (id) => {
  const snapshot = await firebase
    .firestore()
    .collection("articles")
    .doc(String(id))
    .get();

  const data = snapshot.exists ? JSON.stringify(snapshot.data()) : null;
  return data;
};

export const getAllProjects = async () => {
  const snapshot = await firebase.firestore().collection("projects").get();
  const project = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return project;
};

export const getProjects = async (id) => {
  const snapshot = await firebase
    .firestore()
    .collection("projects")
    .doc(String(id))
    .get();

  const data = snapshot.exists ? JSON.stringify(snapshot.data()) : null;
  return data;
};

export const addPost = async (postData, id) => {
  let res = await firebase
    .firestore()
    .collection("articles")
    .doc(id)
    .set(postData);
  return res;
};

export const addProject = async (data, id) => {
  let res = await firebase.firestore().collection("projects").doc(id).set(data);

  return res;
};

export const getAllPosts = async () => {
  const snapshot = await firebase.firestore().collection("articles").get();
  const post = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return post;
};
