import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import firebase from "../../firebase/firebase";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  const db = firebase.firestore();
  const [data, setData] = useState<
    | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
    | undefined
  >();
  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {
    const res = db.collection("articles").doc(id);
    const dataobj = await res.get().then((datas) => {
      setData(datas);
      setLoading(false);
    });
  };
  // TODO: change db to mongo
  useEffect(() => {
    fetchPost().catch((err) => {
      console.log(err);
    });
  }, []);

  if (loading) return <h1>LOADING...</h1>;
  const aD = data.data();

  return (
    <>
      <Navbar />
    </>
  );
}

export default Post;
