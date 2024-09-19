import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./singleBlog.css";

const SingleBlog = () => {
  const { id } = useParams(); // Get blog ID from the URL
  const [blogData, setBlogData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the single blog using the id from the URL
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the blog");
        }
        return response.json();
      })
      .then((data) => {
        setBlogData(data.blog); // Assuming data contains the blog details
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Optionally, you can fetch related blogs as well (if there's an API for it)
    fetch(`http://localhost:5000/api/blogs`)
      .then((response) => response.json())
      .then((data) => setRelatedBlogs(data.blog.slice(0, 3))) // Get the first 3 blogs as related blogs
      .catch((err) => console.error(err));
      
    }, [id]);
    
  if (loading) {
    return <p>Loading blog...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!blogData) {
    return <p>No blog data available</p>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid header">
          <div className="row">
            <div className="col-12">
              <p>
                <span>
                  <Link
                    to="/"
                    style={{
                      border: "none",
                      color: "grey",
                      textDecoration: "none",
                    }}>
                    Home
                  </Link>
                </span>{" "}
                <span style={{ color: "grey" }}>
                  {">"}
                  <Link
                    to="/blogs"
                    style={{
                      border: "none",
                      color: "grey",
                      textDecoration: "none",
                    }}>
                    Blog
                  </Link>
                </span>{" "}
                <span style={{ color: "#222f66" }}>{">"}Blog Single</span>{" "}
              </p>
              <p
                style={{
                  marginTop: "-15px",
                  fontFamily: "-moz-initial",
                  fontSize: "23px",
                  color: "#29367d",
                }}>
                {blogData.title}
              </p>
            </div>
          </div>
        </div>

        {/* Blog Image */}
        <div className="upprphoto col-sm-10 col-md-10 col-lg-10 mx-auto mt-5">
          <img
            src={blogData.url}
            alt={blogData.title}
            className="img-fluid"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Blog Content */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-md-10" style={{ maxWidth: "90%" }}>
            <p>{blogData.body}</p>
          </div>
        </div>

        {/* Related Blogs Section */}
        <h4
          className="mt-5 mb-5"
          style={{
            color: "#222f66",
            fontFamily: "-moz-initial",
            fontWeight: "bold",
            marginLeft: "110px",
          }}>
          Other Blogs
        </h4>

        <div className="row ms-5 mb-5 ps-5">
          {relatedBlogs.map((blog) => (
            <div className="col-12 col-lg-4 col-md-6" key={blog.id}>
              <div className="card" style={{ width: "22rem", border: "none" }}>
                <img
                  src={blog.url}
                  className="card-img-top"
                  alt={blog.title}
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
                    }}>
                    {blog.title}
                  </h5>
                  <p className="card-text" style={{ overflow: "hidden", height: "77px" }}>
                    {blog.body}
                  </p>
                  <Link to={`/getOneBlogs/${blog.id}`} className="btn cardBtn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
