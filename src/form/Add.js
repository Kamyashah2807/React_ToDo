import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

const Add = props => {
	const initialFormState = { id: '', title: '', description: '', time: '', date: ''}
	const [ todo, setTodo ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setTodo({ ...todo, [name]: value })
	}


	return (
        <div className='container'>
		<Form onSubmit={event => {
            event.preventDefault()
            if (!todo.title ) return
            props.addTodo(todo)
            setTodo(initialFormState)
        }} >
            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input 
                    className='form-control' 
                    type="text" 
                    name="title" 
                    value={todo.title} 
                    placeholder='Enter Title'
                    onChange={handleInputChange} 
                    required
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input 
                    className='form-control' 
                    type="text"
                    name="description"
                    value={todo.description}
                    placeholder='Enter Description'
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Time</label>
                <input 
                    className='form-control'
                    type="time"
                    name="time"
                    value={todo.time}
                    placeholder='Enter Time'
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Date</label>
                <input 
                    className='form-control'
                    type="date"
                    name="date"
                    value={todo.date}
                    placeholder='Enter Date'
                    onChange={handleInputChange}
                    required
                />
            </div>

            <Button style={{marginTop: "10px"}} type="submit" className="button btn-success" size='sm'>Create</Button> &nbsp;
		</Form>
        </div>
	)
}

export default Add