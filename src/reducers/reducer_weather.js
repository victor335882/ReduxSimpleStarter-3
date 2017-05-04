//reducer is just a function and the first argument is always our
//state for the user is responsible for.
//the second argument is always action
export default function(state = null, action) {
  console.log('Action received', action);
  return state;
}
