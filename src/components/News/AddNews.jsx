import React, { useState } from 'react';
import { addNewsAction } from '../../actions/index'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

function AddNews() {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleAdd = (title, content, date) => {
      dispatch(addNewsAction(title, content,date))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      handleAdd(title, content, new Date().toString())
      setTitle('')
      setContent('')
    }
    return (
      <div className="mb-4" style={{display: 'flex', justifyContent: 'center'}}>
        <Form onSubmit={handleSubmit} style={{width: '300px'}}>
          <Form.Group>
            <Form.Label style={{textAlign: 'center'}}>Title</Form.Label>
            <Form.Control placeholder='title' onChange={(e) => setTitle(e.target.value)} value={title} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control placeholder='content' onChange={(e) => setContent(e.target.value)} value={content} />
          </Form.Group>
        <Button type="submit">Add</Button>
        </Form>
      </div>
    )
  }

export default AddNews;
