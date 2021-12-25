import React, {useRef, useEffect} from 'react';
import Modal from 'react-modal';
import './EditModal.css';

const EditModal = ({showModal, idToBeEdited, closeModal, state, dispatch}) => {

    const editRef = useRef();

    let res;

    useEffect(()=>{
        res = state.find((item)=>{
            return item.id === idToBeEdited;
        })
    }, [res])

    setTimeout(() => {
        editRef.current.value = res.comment;
    }, 0);

    const editedComment = (e) =>{
        e.preventDefault();
        dispatch({
            type:"EDITED_COMMENT",
            payload:{
                id: idToBeEdited,
                comment: editRef.current.value,
            }
        })
        closeModal();
    }

    return (
        <div>
            <Modal isOpen={showModal} onRequestClose={closeModal} className="modal">
            <h1>Edit comment</h1>
            <form onSubmit={editedComment}>
                <textarea className="inputField" name="comment" cols="50" rows="3" ref={editRef}></textarea>
                <br />
                <button className="postBtn">Update</button>
            </form>
            </Modal>
        </div>
    )
}

export default EditModal
