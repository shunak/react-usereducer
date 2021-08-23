import { useReducer } from 'react';

// Set initial state
const initialState = 0;
// Crate reducer for Action
const reducer = (count = initialState, action:any ) => {
  switch (action.type) {
    case "add_count":
      const newCount = count + 1;
      return newCount;
    default:
      return count;
  }
};

const App = () => {
	// Call state and Dispatch function by useReducer
	const [count, dispatch] = useReducer(reducer,initialState);
	// Event for calling Dispatch function
	const handleAddCount = () => {
    dispatch({type: "add_count",payload: count});
	};
  return (
    <div>
      <button onClick={handleAddCount}>Add Count</button>
      <p>{ count }</p>
    </div>
  )
}

export default App;
