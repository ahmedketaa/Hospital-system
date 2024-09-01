import React, { useState } from "react";
import "./blogs.css";

const Blogs = () => {
  return (
    <div className="container-fluid cont">
      <div className="contImge container-fluid">
        <img
          src="blog.webp"
          alt="Blogs"
          className="img-fluid"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#eeeeee",
          width: "1380px",
          marginLeft: "-15px",
          padding: "15px",
        }}>
        <div className="ms-5">
          <p style={{ color: "grey", fontFamily: "-moz-initial" }}>
            Home <span style={{ color: "#222f66" }}>{">"}Blog</span>
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
      {/* ################ */}

      {/*cards */}
    </div>
  );
};

export default Blogs;
