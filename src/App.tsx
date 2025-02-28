import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { TodoSummary } from './components/TodoSummary';
import { useTodoList } from './hooks/useTodoList';

function App() {
  const { todoList, changeCompleted, addTodo, deleteTodo, deleteAllCompleted } =
    useTodoList();
  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="space-y-5 rounded bg-slate-200 p-5">
          <TodoList
            todoList={todoList}
            changeCompleted={changeCompleted}
            deleteTodo={deleteTodo}
          />
          <TodoSummary deleteAllCompleted={deleteAllCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
