import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./news.css";

function NewsComponent() {
  const [newsData, setNewsData] = useState([]); // Ensure initial state is an empty array
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentNews = newsData.slice(firstIndex, lastIndex);  // Ensure this is an array
  const nPage = Math.ceil(newsData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/news");
        const data = await response.json();

        
  
        // Assuming the API returns an object with a `news` property containing the array
        if (data && Array.isArray(data.news)) {
          setNewsData(data.news);
        } else {
          console.error("Unexpected API response format:", data);
          setNewsData([]); // Set to an empty array if not valid
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
  
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-left mb-4">Saifee News</h2>
      <p className="text-left text-muted mb-4 w-75">
        Stay updated with the latest news and announcements. Below are the most recent articles.
      </p>

      <div className="row">
        {newsData.length > 0 ? (
          currentNews.map((news) => (
            <div key={news._id} className="col-md-3 col-sm-6 mb-3">
              <div className="card bg-white text-dark">
                <div className="card-body border border-2 rounded">
                  <h5 className="card-title">{news.title.substring(0, 15)}...</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date(news.date).toLocaleDateString()}
                    </small>
                  </p>
                  <p className="card-text">
                    {news.body.substring(0, 100)}...
                  </p>
                  {/* Link to the news details page */}
                  <div className="card-overlay">
                  <Link to={`/news/${news._id}`} className="btn btn-outline-dark read">
                  Read More
                  </Link>
                </div>
                <Link to={`/news/${news._id}`} className="btn btn-outline-dark read1">
                  Read More
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No news available.</div>
        )}
      </div>

      {/* <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
        </ul>
      </nav> */}

<nav className="mt-5 d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <Link to="" className="page-link" onClick={prePage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <Link to="" className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link to="" className="page-link" onClick={nextPage}>
              Next
            </Link>
          </li>
        </ul>
      </nav>


    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default NewsComponent;
