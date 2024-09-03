import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Socials from "../config/socials.ts";

const Render = (props: {id: number, key: string}) => {

    function makeHobbyList(hobbies: string[], offsetSize: number=2, barLength: number=15) {
        return hobbies.map((hobby, index) => (<Fragment key={index}>
            <span className={'kanit-thin mx-'+offsetSize}>{hobby}</span>
            {index < hobbies.length-1 && (
                <hr className="hr d-flex" style={{height:"2px", width: barLength+"px"}}/>
            )}  
        </Fragment>))
    }

    return (
        <section key={props.id} id={props.key}>
            <Row className='g-0'>
                <Col md={6} className='d-flex flex-column justify-content-center align-items-center min-vh-25 vh-100'>
                    <div className="h-50 d-flex flex-column justify-content-center align-items-center px-5 pt-5 pt-md-2">
                        <h1 className='kanit-light'>Ingenuity through Creativity</h1>
                        <h5 className='ps-lg-5 kanit-extralight'>The human work is finite, but one's ideas lives on to infinity</h5>
                        <div className='w-100 d-flex justify-content-center align-items-center px-5'>
                            { // hobby list
                                makeHobbyList(['Programmer','Artist','Writer'])
                            }
                        </div>
                        <div className="mb-5 w-75 d-flex justify-content-center align-items-center px-5">   
                            { // generate brand links
                                Socials.map((tag) => <a key={tag.id} href={tag.link} target="_blank" rel="noreferrer" className="mx-2 text-dark  "><i className={'fa-brands fa-'+tag.brand}></i></a>)
                            }
                        </div>
                    </div>
                </Col>
                <Col md={6} className='d-flex flex-column justify-content-center align-items-center vh-md-100'>
                </Col>
            </Row>
        </section>
    )
}

export { Render };