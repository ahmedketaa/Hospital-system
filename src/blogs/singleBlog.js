import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = () => {
  return (
    <div>
      <div className="ms-5" style={{ fontFamily: "-moz-initial" }}>
        <p>
          <span>
            <Link to="" style={{ border: "none", color: "grey" }}>
              Home
            </Link>
          </span>{" "}
          <span style={{ color: "grey" }}>{">"}Blog</span>{" "}
          <span style={{ color: "#222f66" }}>{">"}Blog Single</span>{" "}
        </p>
        <p
          style={{
            marginTop: "-15px",
            fontFamily: "-moz-initial",
            fontSize: "23px",
            color: "#29367d",
          }}>
          BLOG SINGLE TITLE
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
