import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

export default function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()

        

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }

            setLoading(false)
    }

    return (
       <>
       <Card>
           <Card.Body>
               <h2 className="text-center mb-4">Log in</h2>
               
               {error && <Alert variant="danger">{error}</Alert>}
               <Form onSubmit={handleSubmit}>
                   <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" ref={emailRef}required></Form.Control>
                   </Form.Group>

                   <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" ref={passwordRef}required></Form.Control>
                   </Form.Group>

                   <Button disabled={loading}className="w-100" type="submit">Log in</Button>
               </Form>
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
           Already have an account? Log In
       </div>
       </>
    )
}

