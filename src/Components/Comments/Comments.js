import React, {useState} from 'react';
import EditModal from '../EditModal/EditModal';
import './Comments.css';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const Comments = ({state, dispatch}) => {

    const [showModal, setShowModal] = useState(false);
    const [idToBeEdited, setIdToBeEdited] = useState();

    const deleteComment = (id) =>{
       dispatch({
           type: "DELETED_COMMENT",
           payload: {
               id,
           }
       })
    }

    const editComment = (id) =>{
        setShowModal(true);
        setIdToBeEdited(id);
    }

    const closeModal = () =>{
        setShowModal(false);
    }

    return (
        <div className="commentsSection">
            {state.length ?
            state.map((item)=>{
                return (
                    <div key={item.id} className="individualComment">
                    <div className="commentDetails">
                    <p>{item.comment}</p>
                    <div className="commentOptions">
                    <AiFillEdit className="editIcon" onClick={()=>{editComment(item.id)}}/>
                    <AiFillDelete className="deleteIcon" onClick={()=>{deleteComment(item.id)}}/>
                    </div>
                    </div>
                    </div>
                )
            })
            :
            <p className="placeholderText">No comments posted</p>
            }
            {showModal && <EditModal showModal={showModal} idToBeEdited={idToBeEdited} closeModal={closeModal} dispatch={dispatch} state={state}/>}
        </div>
    )
}

export default Comments
