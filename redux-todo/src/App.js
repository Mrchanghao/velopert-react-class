import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate/PageTemplate';
import TodoInputContainer from './containers/TodoInputContainer';
import TodolistContainer from './containers/TodolistContainer';
// import TodoInput from './components/TodoInput/TodoInput';
// import TodoList from './components/TodoList/TodoList';





class App extends Component {
  
  render() {
    return (
      <PageTemplate>
        <TodoInputContainer/>
        <TodolistContainer />
      </PageTemplate>
    );
  }
}

export default App;


  // state = {
  //   value: '',
  //   todos: []
  // }
  // id = 2;
  // getId = () => {
  //   return ++this.id;
  // }

  // handleChange = (e) => {
  //   // console.log(e.target.value)
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const {todos, value} = this.state;
  //   const newTodo = {
  //     text: value,
  //     done: false,
  //     id: this.getId()
  //   }
  //   this.setState({
  //     todos: [...todos, newTodo],
  //     value: ''
  //   })
  

  // handleToggle = (id) => {
  //   //우선 id로 배열의 인덱스를 찾음
  //   const {todos} = this.state;
  //   const index = todos.findIndex(todo => todo.id === id);

  //   const toggled = {
  //     ...todos[index],
  //     done: !todos[index].done
  //   }

  //   this.setState({
  //     todos: [
  //       ...todos.slice(0, index),
  //       toggled, ...todos.slice(index + 1, todos.length)
  //     ]
  //   })
  // }

  // handleRemove = (id) => {
  //   const {todos} = this.state;
  //   const index = todos.findIndex(todo => todo.id === id);
  //   // slice로 전후 데이터 복사 후 찾은 인덱스를 삭제
  //   this.setState({
  //     todos: [
  //       ...todos.slice(0, index),
  //       ...todos.slice(index + 1, todos.length)
  //     ]
  //   })
  // }






