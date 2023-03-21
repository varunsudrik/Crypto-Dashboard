import { useEffect, useState } from "react";
import axios from "axios";

function NewsFeed() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live9.p.rapidapi.com/news/CryptoNews",
      headers: {
        "X-RapidAPI-Key": "4937bb121bmsh7609e948e1a4bacp133fdejsn9d1c8ce15bc9",
        "X-RapidAPI-Host": "crypto-news-live9.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        //console.log(response.data);
        setNews(response.data);
        console.log(news);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div className="news-feed">
      {news.map((e) => (
        <p> {e.title} </p>
      ))}
    </div>
  );
}

export default NewsFeed;
