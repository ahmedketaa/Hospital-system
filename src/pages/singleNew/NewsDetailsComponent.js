import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './NewsDetailsComponent.module.css'; // Import the CSS module

function NewsDetailsComponent() {
  const { id } = useParams(); // Get the ID from the URL
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch the single news article using the ID
        const response = await fetch(`http://localhost:5000/api/news/${id}`);
        const data = await response.json();


        if (data) {
          setNews(data.news);
        } else {
          console.error("Unexpected API response format:", data);
          setNews(null); // Handle the case where no data is returned
        }
      } catch (error) {
        console.error('Error fetching news details:', error);
        setNews(null); // Handle the error case
      } finally {
        setLoading(false); // Ensure loading state is updated regardless of success or error
      }
    };

    fetchNews();
  }, [id]);

  if (loading) return (
    <div className={styles.spinnerContainer}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  if (!news) return (
    <div className={styles.noNews}>
      <p>No news available.</p>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={`card ${styles.card}`}>
        <div className={styles.cardBody}>
          <h1 className={styles.cardTitle}>{news.title}</h1>
          <p className={styles.cardDate}>
            <strong>Published on: </strong>{new Date(news.date).toLocaleDateString()}
          </p>
          <p className={styles.cardText}>{news.body}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetailsComponent;
