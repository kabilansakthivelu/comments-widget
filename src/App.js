import InputArea from './Components/InputArea/InputArea';
import Comments from './Components/Comments/Comments';
import {useReducer, useRef} from 'react';
import reducer from './reducer';
 
function App() {

  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  const commentRef = useRef();

  const postComment = (e) =>{
        e.preventDefault();
        let comment = commentRef.current.value;
        let id = new Date().getTime().toString();
        dispatch({
            type: "ADDED_COMMENT",
            payload: {
                id,
                comment,
            }
        })
        commentRef.current.value = "";
    }

  return (
    <div className="App">
      <InputArea postComment={postComment} commentRef={commentRef}/>
      <Comments state={state}/>
    </div>
  );
}

export default App;
