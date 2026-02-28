export default function todoReducer(state, action){  //STATE IS current list of todos, action is object describing what u wanna do
    switch (action.type){
        case "add_todo":
        return [{id: Date.now(), title: action.payload.title, completed:false}, ...state];

        case "delete_todo":
        return state.filter((todo)=> todo.id !== action.payload.id);

        case "toggle_todo":
        return state.map((todo)=> //goes through each sueing map
        todo.id === action.payload.id  //
    ? {...todo , completed: !todo.completed} //spread operator avoids mutation and ! swtiches from true to false
: todo
);

case "edit_todo":
    return state.map((todo)=>
    todo.id === action.payload.id //looping through todos and finding match ID
        ?{...todo, title: action.payload.title} //replaces the title while everything remain same
        : todo
    );
    default:                //returns current state unchanged if action type doesnt match any case
        return state;

    }
}