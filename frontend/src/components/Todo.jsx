import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

const Todo = ({ id, title, description, completeTodo, deleteTodo, editTodo }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setNewTitle(title)
    setNewDescription(description)
  }
  const handleShow = () => setShow(true);

  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const editTodoHandler = (title, description) => {
    handleClose()
    const todo = {
      id,
      title, 
      description,

    }
    editTodo(todo)
    setNewTitle(title)
    setNewDescription(description)
  }


  return (
    <>
      <Row className="border-bottom pt-3">
        <Col md={1}></Col>
        <Form>
        </Form>

        <Col className='d-flex '>
          <Form.Check type='checkbox'  onChange={() => completeTodo(id)} />
          <h5 style={{margin: "0 20px"}}>{title}</h5>
          <p>{description}</p>
        </Col>

        <Col md={2}>
          <Form className="d-grid gap-2">
            <Button variant='info' className=" my-2 btn-block" onClick={handleShow}>Edit</Button>
          </Form>
          <Form className="d-grid gap-2">
            <Button variant='danger' className="my-2 btn-block" onClick={() => deleteTodo(id)}>Delete</Button>
          </Form>
        </Col>
      </Row>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='title' className=''>
              <Form.Label>Title</Form.Label>
              <Form.Control type='text' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control type='text'  value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => editTodoHandler(newTitle, newDescription)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Todo