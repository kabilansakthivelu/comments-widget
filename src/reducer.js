export default function reducer(state, action){
    if(action.type === "ADDED_COMMENT"){
        return [...state,
        {
            id: action.payload.id,
            comment: action.payload.comment,
        }]
    }
    if(action.type === "DELETED_COMMENT"){
        return state.filter((item)=>{
           return item.id !== action.payload.id;
        })
    }
    if(action.type === "EDITED_COMMENT"){
        return state.map((item)=>{
           if(item.id === action.payload.id){
               console.log(action.payload.comment);
               return {
                   id: action.payload.id,
                   comment: action.payload.comment,
               }
           }
           else{
               return item;
           }
        })
    }
}