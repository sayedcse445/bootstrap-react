import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

let Register = () => {

    let [state , setState] = useState({
        user:{
            username:'',
            email:"",
            password:''
        }
    })

    let updateInput = (e) =>{
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name] : e.target.value
            }
        })
    }

    let register =(e) =>{
        e.preventDefault();
        console.log(state.user);
    }

    return(
        <>
        <pre>{JSON.stringify(state)}</pre>
        <Container className="mt-2">
            <Row>
                <Col xs={6}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor:'orangered'}}>
                        User Register
                    </Card.Header>
                    <Card.Body style={{backgroundColor:'#9EDDFF'}}>
                        <Form>
                        <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                name="username"
                                onChange={updateInput}
                                type="username" placeholder="Enter Your FullName"></Form.Control>
                            </Form.Group>

                            <Form.Group className="">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                name="email"
                                onChange={updateInput}
                                type="email" placeholder="Enter Your Email"></Form.Control>
                                <Form.Text className="text-muted">Your Email is more important to us</Form.Text>
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                name="password"
                                onChange={updateInput}
                                type="password" placeholder="Enter Your Password"></Form.Control>
                                <Form.Check type="checkbox" label="label me out"/>
                            </Form.Group>
                            <Button onClick={register} variant="primary" type="submit">Button</Button>
                        </Form>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Register