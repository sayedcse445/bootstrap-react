import React, { useState,state,incr, decr } from "react";
import { Button, Card, Col, Container, Row, } from "react-bootstrap";

let Counter = () => {


        let [state,setState] = useState ({
          count: 0
        })

        let incr = () =>{
          setState ({
            count:state.count + 1
          })
        }

        let decr = () =>{
        setState({
          count:state.count -1
        })
        }
        return (
            <>
                <Container className="mt-3">
                    <Row>
                        <Col xs={4}>
                            <Card className="shadow">
                                <Card.Body>
                                    <p className="diplay">{state.count}</p>
                                    <Button onClick={incr} variant="primary" className="m-2">incriment</Button>
                                    <Button onClick={decr} variant="danger" className="m-2">decriment</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }

    export default Counter;