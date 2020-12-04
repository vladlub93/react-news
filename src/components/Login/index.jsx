import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginAction, logoutAction } from '../../actions/index'
import ReactDom from 'react-dom'
import { Form, Button } from 'react-bootstrap'


function Login({ open, onClose }) {
  const dispatch = useDispatch()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  
  const handleLogoutClick = () => {
    dispatch(logoutAction());
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginAction(login, password));
    setLogin('')
    setPassword('')
    onClose()
  }

  return ReactDom.createPortal(
    <>
    {open?
    (
    <>
    <div className="modalWrapper">
    <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Login</Form.Label>
    <Form.Control value={login} onChange={(e) => setLogin(e.target.value)} placeholder='login' />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
  </Form.Group>
  <Button className="mr-3" variant="primary" type="submit">
    Sign In
  </Button>
  <Button onClick={handleLogoutClick}>Log Out</Button>
</Form>
    </div>
    </>)
    : null}
    </>,
    document.getElementById('portal')
  );
}







export default Login;
