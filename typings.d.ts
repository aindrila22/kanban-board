interface Board {
    columns: Map<TypedColumn, Column>
}

type TypedColumn = "todo" | "onprogress" | "done"
type Priority = "low"| "high" | "completed"

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo {
    id: string,
    status: TypedColumn,
    priority:Priority,
    title: string,
    description?: string,
    comments: number,
    files: number,
    images?: Image[],
    avatars: Avatar[]
}

interface Image {
    picId: string,
    src: string,
}
interface Avatar {
    aId: string,
    src: string,
}