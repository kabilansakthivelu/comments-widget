export default function reducer(state, action){
    if(action.type === "ADDED_COMMENT"){
        return [...state,
        {
            id: action.payload.id,
            comment: action.payload.comment,
        }]
    }
}