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
