import React, {useState, useEffect} from 'react';
import firebase from "./firebaseConfig"

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] =useState(false);

  const ref = firebase.firestore().collection("Articles")
  console.log("should be articles: ", ref)

  //ONE TIME GET FUNCTION
  function getArticles() {
    setLoading(true);
    ref.onSnapshot((querySnapshot)=> {
      const articles = []
      querySnapshot.forEach((doc)=>{
        articles.push(doc.data())
      })
      setArticles(articles)
      setLoading(false);
    });
  }
  useEffect(() => {
    getArticles()
    // eslint-disable-next-line
  }, []);


  if(loading){
    return <h1>Loading ...</h1>
  }
  return (
    <div className="App">
      <h1>Articles</h1>
      {articles.map((article)=>(
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <h4>{article.url}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
