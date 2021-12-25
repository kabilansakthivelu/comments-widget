import React from 'react';
import './Comments.css';
import {AiFillDelete} from 'react-icons/ai';

const Comments = ({state}) => {
    return (
        <div className="commentsSection">
            {state.map((item)=>{
                return (
                    <div key={item.id} className="individualComment">
                    <div className="commentDetails">
                    <p>{item.comment}</p>
                    <AiFillDelete className="deleteIcon"/>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Comments
