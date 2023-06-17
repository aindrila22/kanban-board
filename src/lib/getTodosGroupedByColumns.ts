import datas from "./data.json"


export const getTodosGroupedByColumns = async() =>{

    const columns = datas.reduce((acc, todo)=>{
       if(!acc.get(todo.status as TypedColumn)){
        acc.set(todo.status as TypedColumn, {
            id: todo.status as TypedColumn,
            todos: []
        })
       }
       acc.get(todo.status as TypedColumn)!.todos.push({
        id: todo.id,
        status: todo.status as TypedColumn,
        priority:todo.priority as Priority,
        title: todo.title,
        ...(todo.description && {description: todo.description}),
        comments: todo.comments,
        files: todo.files,
        ...(todo.images && {images: todo.images}),
        avatars: todo.avatars
       });

       return acc;
    }, new Map<TypedColumn, Column>)

  

    const columnTypes: TypedColumn[] = ["todo", "onprogress" , "done"];
    for(const columntype of columnTypes){
        if(!columns.get(columntype)){
            columns.set(columntype, {
                id: columntype,
                todos: [],
            })
        }
    };

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort(
            (a, b) => (columnTypes.indexOf(a[0])-columnTypes.indexOf(b[0]))
        ) 
    );

    const board:Board = {
        columns: sortedColumns
    }


    return board;
}