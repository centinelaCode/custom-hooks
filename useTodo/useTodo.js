import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';


// initial state reducer
const initialState = [];

// actualiza el Local Storage
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
  // definimos el reducer
  // se le pasa: nuestro reducer(todoReducer y el state inicial)
  // obtenemos: el state(todos) y la funcion modificadora(dispatch)
  // Al dispatch se le tien que pasar la action: la cual debe incluir el type y payload
  const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

  // El efecto para actualizar el Local Storage cuando carga y cuando cambian los todos
  useEffect(() => {
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    
  }, [todos])
  

  // funcion que hace dispatch para agregar un nuevo todo
  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    dispatch( action );
  }

  // funcion que hace dispatch para remover un nuevo todo
  const handleRemoveTodo = ( id ) => {
    // console.log({ id })
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  // funcion que hace dispatch para marca como completado el todo
  const onToggleTodo = ( id ) => {
    // console.log({ id })
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> todo.done===false).length,
    handleNewTodo,
    handleRemoveTodo,
    onToggleTodo,
  }
}