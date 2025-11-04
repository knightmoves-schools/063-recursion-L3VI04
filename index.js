function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        modifiedTodos.push('done - ' + todos[index]); // prepend the string
        return transform(index + 1, todos, modifiedTodos); // recursive call
    }else{
        return modifiedTodos;
    }
}
