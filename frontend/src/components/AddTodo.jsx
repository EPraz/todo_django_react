import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const AddTodo = ({ addTodo }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTodoHandler  = (e) => {
    e.preventDefault()
    addTodo({
      title,
      description,
      completed: false,
    })
    setTitle('')
    setDescription('')
  }

  return (

    <Form>
      <Form.Group controlId='title' className='my-4'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' value={title} placeholder='Enter Todo Title' onChange={(e) => setTitle(e.target.value)} required/>
      </Form.Group>

      <Form.Group controlId='description'  className='my-4'>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' value={description} placeholder='Enter Description' onChange={(e) => setDescription(e.target.value)} required/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={addTodoHandler}>
        Add Todo
      </Button>
    </Form>
  )
}

export default AddTodo