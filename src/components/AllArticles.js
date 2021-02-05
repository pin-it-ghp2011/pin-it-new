import React, { useState, useEffect } from "react";
import firebase from "../firebaseConfig";
import axios from "axios";

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  //without using axios
  const ref = firebase.firestore().collection("articles");
  console.log("should be articles: ", ref);

  //ONE TIME GET FUNCTION
  function getArticles() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const articles = [];
      querySnapshot.forEach((doc) => {
        articles.push(doc.data());
      });
      setArticles(articles);
      setLoading(false);
    });
  }

  //using axios
  // async function getArticles() {
  //   try {
  //     let articles = [];
  //     console.log("getArticles func get called");
  //     articles = await axios.get("./api/v1/articles");
  //     console.log("getArticles func after axios");
  //     setArticles(articles);
  //     setLoading(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  useEffect(() => {
    getArticles();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="AllArticles">
      <h1>articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>Title : {article.title}</h2>
          <h4>{article.url}</h4>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
}

export default AllArticles;
