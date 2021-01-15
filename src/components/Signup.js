import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'

export default function Signup() {
    return (
       <>
       <Card>
           <Card.Body>
               <h2 classnName="text-center mb-4">Sign Up</h2>
               <Form>
                   <Form.Group id="email">
                     <Form.Label>Email</Form.Label>
                     <Form.control type="email" ref={emailRef}required></Form.control>
                   </Form.Group>

                   <Form.Group id="password">
                     <Form.Label>Password</Form.Label>
                     <Form.control type="password" ref={passwordRef}required></Form.control>
                   </Form.Group>

                   <Form.Group id="password-confirm">
                     <Form.Label>Password confirmation</Form.Label>
                     <Form.control type="password" ref={passwordConfirmRef}required></Form.control>
                   </Form.Group>
               </Form>
           </Card.Body>
       </Card>
       <div className="w-100 text-center mt-2">
           Already have an account? Log In
       </div>
       </>
    )
}
