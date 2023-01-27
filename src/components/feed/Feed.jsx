import React, { useState } from "react";
import "./feed.css"

function Feed(props) {
    const [inputText, setInputText] = useState("")
    const [comments, setComments] = useState(props.data.comments)

    function addComment() {
      setComments([
        ...comments, {
          username: "Chanok Pathompatai",
          userCover: "",
          commentText: inputText
        }
      ])
      setInputText("")
    }

    return (
        <div className="feedContainer">
            <h2>{props.data.username}</h2>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.username} - {comment.commentText}</li>
              ))}
            </ul>
            <div>
              <input value={inputText} type="text" name="" id="" onChange={(e) => setInputText(e.target.value)} />
              <button onClick={() => addComment()}>post</button>
            </div>
        </div>
    );
}

export default Feed;
