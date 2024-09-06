import React from 'react';
import { Link } from 'react-router-dom';
import './news.css'

const newsData = [
  {
    id: 1,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 2,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 3,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 4,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 5,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 6,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 7,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 8,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id:9,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },

  {
    id: 10,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id: 11,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  {
    id:12,
    title: "Helping Seniors Learn New Hobbies",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    active: true,
  },
  // Add more news items similarly
];
function NewsComponent() {
  return (
    <div className="container my-5 news-container">
      <h2 className="text-left mb-4 section-title">Saifee News</h2>
      <p className="text-left text-muted mb-4 description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec 
        arcu ornare, ac hendrerit neque vulputate...
      </p>

      <div className="row">
        {newsData.map((news) => (
          <div key={news.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className={`card news-card ${news.active ? "bg-white text-dark" : ""}`}>
              <div className="card-body border border-2 rounded">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
                <Link to="#" className="btn btn-outline-dark read ">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item"><Link className="page-link" to="#">1</Link></li>
          <li className="page-item"><Link className="page-link" to="#">2</Link></li>
          <li className="page-item"><Link className="page-link" to="#">3</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NewsComponent;
