import React, { useState } from "react";
import "./blogs.css";
import BlogsData from "./blogs.json";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [currentPage, setCurrentPge] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const BData = BlogsData.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(BlogsData.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  return (
    <>
      <div className="contImge container-fluid bg-success">
        {/*img is here as a backGround  */}
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
              }}>
              SAIFEE BLOG
            </p>
          </div>
        </div>
      </div>

      {/* ################ */}
      <div className="w-75 p-5">
        There is a famous proverb stating, “Health is Wealth,” which is
        self-explanatory. Health is an asset to human life, which leads to a
        stable and calm mind, ultimately leading to a wealthy life. If a person
        is taking good care of their health, they get mental peace and can focus
        on their work further. When we fall sick, it makes us irritated and
        unstable. Staying healthy is about being physically, mentally, and
        socially fit.
      </div>
      {/*cards */}
      <div class="row row-cols-1 row-cols-md-3 ms-5 g-2 ">
        {BData.map((blog) => (
          <div className="col mx-auto col-12 col-lg-4 col-md-6  mt-5">
            <div
              key={blog.id}
              className="card"
              style={{ width: "22rem", border: "none" }}>
              <img
                src={blog.url}
                className="card-img-top"
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
                    textOverflow: " ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                  {blog.title}
                </h5>
                <p
                  className="card-text "
                  style={{
                    overflow: "hidden",
                    height: "77px",
                  }}>
                  {blog.body}
                </p>
                <button to="" className="btn  cardBtn">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className=" mt-5 d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <Link to="" className="page-link" onClick={prePage}>
              Prev
            </Link>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}>
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
      setCurrentPge(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPge(id);
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPge(currentPage + 1);
    }
  }
};

export default Blogs;
