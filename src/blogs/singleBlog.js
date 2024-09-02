import React from "react";
import { Link } from "react-router-dom";
import "./singleBlog.css";
const SingleBlog = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          style={{
            backgroundColor: "#eeeeee",
            width: "1380px",
            marginLeft: "-15px",
            padding: "15px",
          }}>
          <div className="ms-5" style={{ fontFamily: "-moz-initial" }}>
            <p>
              <span>
                <Link
                  to=""
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
                  to=""
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
              BLOG SINGLE TITLE
            </p>
          </div>
        </div>
        {/* ############################################# */}
        <div className=" upprphoto col-sm-10 col-md-10 col-lg-10 mx-auto mt-5">
          <img
            src="singlBlog.webp"
            alt="Blogs"
            className="img-fluid"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className=" col col-sm-10 col-md-10 col-lg-10 mx-auto mt-5 ">
          <p>
            "As you know, kidneys remove waste and fluids from the body through
            urination. With chronic kidney disease, kidney function is gradually
            lost. End-stage renal failer is when dialysis or a kidney transplant
            is needed to stay alive\nSimilar to how high blood pressure is
            called a silent killer, many people don't know they have chronic
            kidney disease until it is discovered during a lab test for another
            reason. Because kidney disease usually doesn't cause symptoms in
            earlier stages, it often is not discovered until later in the course
            of the disease process. In fact, one in nine people may not know
            they have chronic kidney disease, but it affects about 14% of the
            population. That's more than 30 million people in the U.S.\nYour
            healthcare professional will discuss what's best to help slow
            progression of kidney disease in your situation, but some
            recommendations typically include:\nOne key dietary adjustment to
            prevent the development or progression of chronic kidney disease is
            sodium restriction. Some people cook with a lot of salt and often
            add more salt at the table. Many processed foods also have added
            salt.\nReduce sodium intake by limiting convenience foods, salty
            snacks and processed meats and cheeses.
          </p>{" "}
          <p>
            Overall, try to eat fresher foods rather than foods that come out of
            a can or a bag. You can still enjoy many food.\nIncrease fluid
            intake as well. Lack of fluid can lead to disease progression and
            affect how well medications work.\nTreatments for chronic kidney
            disease usually involve tackling the underlying issue. One of the
            most common causes of chronic kidney disease is high blood pressure,
            also known as hypertension.\nHigh blood pressure relates to the
            pressure inside of blood vessels when the heart is pumping and when
            it relaxes. That pressure can increase as we age
          </p>
          <p>
            A number of medical problems are associated with increases in blood
            pressure over time, which can lead to cardiovascular disease and
            chronic kidney disease. Controlling those disease processes is
            extremely important.\nHigh blood pressure responds to our lifestyle
            choices, including getting regular exercise, avoiding processed
            foods, reducing sodium intake and eating more fruits and vegetables.
            All of these things reduce high blood pressure without
            medications.\nSometimes those lifestyle changes aren't enough. These
            are the patients who need medications to help with blood pressure
            control."
          </p>
        </div>
        <h4
          className="mt-5"
          style={{
            color: "#222f66",
            fontFamily: "-moz-initial",
            fontWeight: "bold",
            marginLeft: "110PX",
          }}>
          Other Blogs
        </h4>
      </div>
    </>
  );
};

export default SingleBlog;
