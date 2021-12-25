import InputArea from './Components/InputArea/InputArea';
import Comments from './Components/Comments/Comments';
import {useReducer} from 'react';
import reducer from './reducer';
 
function App() {

  const initialState = [];

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <InputArea dispatch={dispatch}/>
      <Comments state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
