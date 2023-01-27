import React, { useEffect, useState } from "react";
import Feed from "../feed/Feed";
import axios from "axios";

function FeedList() {
    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
      axios.get('https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa')
        .then((res) => {
          const data = res.data.feeds;
          setFeeds(data)
        })
    }, []);
    return (
        <div>
            <h1>FeedList</h1>
            {feeds.map((feed, i) => (
              <Feed key={i} data={feed}/>
            ))}
        </div>
    );
}

export default FeedList;
