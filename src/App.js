import React, { useState, Fragment } from 'react'
import Add from './form/Add'
import Edit from './form/Edit'
import Display from './table/Display'

const App = () => {
	const initialFormState = { id: null, title: '', description: '', time: '', date: ''}

	const [ todos, setTodos ] = useState('');
	const [ currentTodo, setCurrentTodo ] = useState(initialFormState);
	const [ editing, setEditing ] = useState(false);

	const addTodo = todo => {
		todo.id = todos.length + 1
		setTodos([ ...todos, todo ])
	}

	const deleteTodo = id => {
		setEditing(false)
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const updateTodo = (id, updatedTodo) => {
		setEditing(false)
		setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
	}

	const editRow = todo => {
		setEditing(true)
		setCurrentTodo({ id: todo.id, title: todo.title, description: todo.description, time: todo.time, date: todo.date})
	}

	return (
		<div className="container">
			<h3 align="center">TODO LIST</h3>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h4 style={{color: "red"}}>Edit Todo</h4>
							<Edit
								editing={editing}
								setEditing={setEditing}
								currentTodo={currentTodo}
								updateTodo={updateTodo}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h4 style={{color: "red"}}>Add Todos</h4>
							<Add addTodo={addTodo} />
						</Fragment>
					)}
				</div>
				<div className="flex-large" style={{marginTop: "10px"}}>
					<h4 style={{color: "red"}}>View Todos</h4>
					<Display todos={todos} editRow={editRow} deleteTodo={deleteTodo} />
				</div>
			</div>
		</div>
	)
}

export default App