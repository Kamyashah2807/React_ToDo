import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';

const Edit = props => {
  const [todo, setTodo ] = useState(props.currentTodo)

  useEffect(() => {
    setTodo(props.currentTodo)
  },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setTodo({ ...todo, [name]: value })
  }

  return (
    <div className='container'>
    <Form
      onSubmit={event => {
        event.preventDefault()
        props.updateTodo(todo.id, todo)
      }}
    >
    <div className='mb-3'>
      <label className='form-label'>Title</label>
      <input 
        className='form-control' 
        type="text" 
        name="title" 
        value={todo.title} 
        onChange={handleInputChange} 
        required
      />
    </div>

    <div className='mb-3'>
      <label className='form-label'>Description</label>
      <input 
        className='form-control'
        type="text"
        name='description'
        value={todo.description}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className='mb-3'>
      <label className='from-label'>Time</label>
      <input 
        className='form-control'
        type="time"
        name='time'
        value={todo.time}
        onChange={handleInputChange}
        required
      />
    </div>

    <div className='mb-3'>
      <label className='from-label'>Date</label>
      <input 
        className='form-control'
        type="date"
        name='date'
        value={todo.date}
        onChange={handleInputChange}
        required
      />
    </div>

    <Button style={{marginTop: "10px"}} size='sm' type="submit" className="button btn-primary">Update</Button>&nbsp;
    <Button style={{marginTop: "10px"}} size='sm' type="submit" onClick={() => props.setEditing(false)} className="button btn-danger">Cancel</Button>
        
    </Form>
    </div>
  )
}

export default Edit