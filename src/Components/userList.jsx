import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserServices } from "../services/UserServices";

let UserList = () =>{

    let [state , setState] =useState({
        user:[]
    })

    useEffect( () => {
        UserServices.getAllUser().then((response) =>{
            setState({
                ...state,
                user:response.data
            })
        }).catch((error) =>{
            console.log(error);
        });
    },[])

    return(
<>

<Container>
    <Row>
        <Col>
        <h2 className="text-dark">User List</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam eaque odit sequi, fugiat numquam non officiis aut ea in qui modi commodi!</p>
        </Col>
    </Row>
    <Row>
        <Col>
        <Table className="shadow-lg text-center">
            <thead>
                <tr>
                    <th>sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {
                state.user.length > 0 &&
            state.user.map( user =>{
                    return(
                        <tr key= {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    )
            })
        }
            </tbody>
        </Table>
        </Col>
    </Row>
</Container>
</>
)
}

export default UserList;