function transform(todos, index = 0) {
  if (index >= todos.length) {
    return todos;
  }

  // Line 8: Prepend 'done - ' to each todo description
  todos[index] = 'done - ' + todos[index];

  // Line 9: Recursively call the transform function
  return transform(todos, index + 1);
}

