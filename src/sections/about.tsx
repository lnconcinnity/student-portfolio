import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Render = (props: {id: number, key: string}) => {
    return (
        <section key={props.id} id={props.key}>
            <Row className="g-1">
                <Col md={3} className="d-flex flex-column vh-50">
                </Col>
                <Col md={3} className="d-flex flex-column vh-50">
                </Col>
            </Row>
        </section>
    )
}

export { Render };