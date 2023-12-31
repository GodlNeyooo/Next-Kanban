interface Board {
    columns: Map<TypedColumn,Column>
}

type TypedColumn = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumn,
    todos: column
}

interface Todo{
    $id:string,
    $createdAt:string,
    title:string,
    status:TypedColumn,
    $collectionId: '',
    $databaseId: '',
    $updatedAt: '',
    $permissions: []
}
