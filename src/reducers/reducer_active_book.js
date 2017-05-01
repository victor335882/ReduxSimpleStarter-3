//State argument is not application state, only the state
//this reducer is responsible for
export default function(state= null, action) {
  //if the action has a type of BOOK_SELECTED will return
  //the book(action.payload) that was selected action
  //if the action is anything else we just return the current state
  switch(action.type) {
    case 'BOOK_SELECTED':
    return action.payload;
  }
  return state
}
