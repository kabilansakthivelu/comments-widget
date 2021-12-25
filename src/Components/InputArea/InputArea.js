import React, {useRef} from 'react';
import './InputArea.css';

const InputArea = ({dispatch}) => { 

    const commentRef = useRef();

  const postComment = (e) =>{
        e.preventDefault();
        let comment = commentRef.current.value;
        let id = new Date().getTime().toString();
        if(comment !== ""){
        dispatch({
            type: "ADDED_COMMENT",
            payload: {
                id,
                comment,
            }
        })
        commentRef.current.value = "";
        }
    }

    return (
        <div className="inputArea">
        <h2 className="heading">Post your comment</h2>
            <form onSubmit={postComment}>
                <textarea className="inputField" name="comment" cols="50" rows="3" ref={commentRef}></textarea>
                <br />
                <button className="postBtn">Post</button>
            </form>
        </div>
    )
}

export default InputArea
