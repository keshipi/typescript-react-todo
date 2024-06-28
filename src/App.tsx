import { useState } from 'react';
import { TodoList } from './components/TodoList';
import { dummyTodoList } from './data/dummyTodoList';
import { AddTodoForm } from './components/AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState(dummyTodoList);

  const changeCompleted = (id: number) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const addTodo = (title: string) => {
    setTodoList((prevTodoList) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };

      return [newTodo, ...prevTodoList];
    });
  };
  return (
    <main className="mx-auto mt-10 max-w-xl">
      <h1 className="text-center text-4xl">Todoアプリ</h1>
      <div className="space-y-5">
        <AddTodoForm addTodo={addTodo} />
        <div className="rounded bg-slate-200 p-5">
          <TodoList todoList={todoList} changeCompleted={changeCompleted} />
        </div>
      </div>
    </main>
  );
}

export default App;
