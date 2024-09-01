import React, { useState } from "react";
import "./blogs.css";
import BlogsData from "./blogs.json";
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
        {BlogsData.map((blog) => (
          <div className="col mx-auto mt-5 ">
            <div key={blog.id} className="card" style={{ width: "22rem" }}>
              <img
                src={blog.url}
                className="card-img-top"
                alt="img"
                style={{ width: "22rem", height: "13rem" }}
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
                <a href="/." className="btn btn-primary">
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
