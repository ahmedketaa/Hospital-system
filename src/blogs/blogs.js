import React, { useState, useEffect } from "react";
import "./blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;

  useEffect(() => {
    // Fetch the blogs data from the API
    fetch("http://localhost:5000/api/blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        // If the response is an object with a blogs array, extract the array
        const blogsArray = Array.isArray(data) ? data : data.blogs;
        setBlogsData(blogsArray);  // Ensure blogsData is an array
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentBlogs = blogsData.slice(firstIndex, lastIndex);  // Ensure this is an array
  const nPage = Math.ceil(blogsData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="contImge container-fluid bg-success">
        {/* img is here as a background */}
      </div>

      <div className="header container-fluid">
        <div className="row">
          <div className="col-12">
            <p>
              <span style={{ fontFamily: "-moz-initial" }}>
                <Link to="" style={{ border: "none", color: "grey" }}>
                  Home
                </Link>
              </span>{" "}
              <span style={{ color: "#222f66" }}>{">"}Blog</span>{" "}
            </p>
            <p
              style={{
                marginTop: "-15px",
                fontFamily: "-moz-initial",
                fontSize: "23px",
                color: "#29367d",
              }}
            >
              SAIFEE BLOG
            </p>
          </div>
        </div>
      </div>

      {/* Blog content */}
      <div className="w-75 p-5">
        There is a famous proverb stating, “Health is Wealth,” which is
        self-explanatory. Health is an asset to human life, which leads to a
        stable and calm mind, ultimately leading to a wealthy life. If a person
        is taking good care of their health, they get mental peace and can focus
        on their work further. When we fall sick, it makes us irritated and
        unstable. Staying healthy is about being physically, mentally, and
        socially fit.
      </div>

      {/* Blog cards */}
      <div className="row row-cols-1 row-cols-md-3 ms-5 g-2">
        {currentBlogs.map((blog) => (
          <div className="col mx-auto col-12 col-lg-4 col-md-6 mt-5 " key={blog._id}>
            <div className="card" style={{ width: "22rem", border: "none" }}>
              <img
                src={blog.url}
                className="card-img-top mb-2"
                alt="img"
                style={{
                  width: "22rem",
                  height: "13rem",
                  borderRadius: "10px",
                }}
              />
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{
                    overflow: "hidden",
                    height: "30px",
                    fontFamily: "-moz-initial",
                    color: "#222f66",
                    fontSize: "22px",
                    fontWeight: "bold",
                    width: "300px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {blog.title}
                </h5>
                <p className="card-text" style={{ overflow: "hidden", height: "77px" }}>
                  {blog.body}
                </p>
                <Link to={`/singleBlog/${blog._id}`} className="btn cardBtn">
                  READ MORE
                </Link>          
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
    </>
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
};

export default Blogs;
