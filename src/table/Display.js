import React from 'react'
import { Table, Button} from 'react-bootstrap';

const Display = props => (
  <div className='container-fluid'>
  <div className='table-responsive'>
  <Table className='table table-bordered' style={{textAlign: "center"}}>
    <thead className='table table-dark'>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Time</th>
        <th>Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.todos.length > 0 ? (
        props.todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.time}</td>
            <td>{todo.date}</td>
            <td>
              <Button onClick={() => { props.editRow(todo)}} size='sm' className="button btn-primary">Edit</Button> &nbsp;
              <Button onClick={() => props.deleteTodo(todo.id)} size='sm' className="button btn-danger">Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No data found</td>
        </tr>
      )}
    </tbody>
  </Table>
  </div>
  </div>
)

export default Display