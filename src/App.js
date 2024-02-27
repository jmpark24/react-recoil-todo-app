import { useRecoilValue } from 'recoil';
import './App.css';
import TodoItemCreator from './components/TodoItemCreator';
import { filteredTodoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';
import TodoListFilters from './components/TodoListFilters';
import TodoListStats from './components/TodoListStats';
import { currentUserNameQuery } from './userAtoms';
import React from 'react';

function App() {
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  console.log(filteredTodoList);
  return (
    <div className="App">
      <React.Suspense fallback={<div>...loading</div>}>
        <CurrentUserInfo />
      </React.Suspense>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      
        {filteredTodoList.map(todoItem => 
          <TodoItem key={todoItem.id} item={todoItem}/>
        )}
      
    </div>
  );
}

export default App;

const CurrentUserInfo = () => {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>
}