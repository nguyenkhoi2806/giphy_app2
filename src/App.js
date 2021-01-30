import { useEffect, useState } from "react";

import * as GIHPYAPI from "./api/GiphyApi";
import Error from "./components/Error";
import Loading from "./components/Loading";
import ListImage from "./components/ListImage";

import "./assets/scss/index.scss";

function App() {
  const [loading, setLoading] = useState(true);
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [imageLists, setImageLists] = useState([]);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 24;

  useEffect(() => {
    GIHPYAPI.getTrendy(limit, offset)
      .then((res) => {
        let newImageList = [...imageLists];
        newImageList = imageLists.concat(res.data.data);
        setImageLists(newImageList);
        setLoading(false);
        setLoadMoreLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [offset]);

  function loadMoreImages() {
    setOffset(offset + limit);
    setLoadMoreLoading(true);
  }

  if (error) return <Error />;

  if (loading) return <Loading />;

  return (
    <div className="App">
      <div className="container">
        <ListImage imageLists={imageLists} />
      </div>
      {loadMoreLoading && <Loading />}
      <div className="pb-3 pt-3 container container-load-more text-center">
        <button className="btn btn-primary" onClick={() => loadMoreImages()}>
          Load more
        </button>
      </div>
    </div>
  );
}

export default App;
