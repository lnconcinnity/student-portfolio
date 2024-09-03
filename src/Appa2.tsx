
import React, { Fragment, useEffect } from "react"
import PortfolioNavbar from "./components/PortfolioNavbar.jsx"
import { Col, Container, Row } from "react-bootstrap"
import { SectionsList } from "./packages/sections.ts"
import { spyOnSection } from "./packages/scrollspy.ts"

const brandLinks = [
    {
        id: 0,
        brand: 'github',
        link: 'https://github.com/lnconcinnity'
    },
    {
        id: 1,
        brand: 'facebook',
        link: 'https://www.facebook.com/giandwayne.romero.3'
    }
]

function generateHobbyList(hobbies: string[], offsetSize: number=2, barLength: number=15) {
    return hobbies.map((hobby, index) => (<Fragment key={index}>
        <span className={'kanit-thin mx-'+offsetSize}>{hobby}</span>
        {index < hobbies.length-1 && (
            <hr className="hr d-none d-xl-flex" style={{height:"2px", width: barLength+"px"}}/>
        )}
    </Fragment>))
}

export default function App() {
    useEffect(() => {
        spyOnSection('header', 160)
        SectionsList.map((tag) => spyOnSection(tag.key));
    }, [])
    
    return (
        <>
        <header id='header'>
            <PortfolioNavbar />
            <section className='p-0 mt-0'>
                <Container fluid>
                    <Row className='g-0'>
                        <Col lg={4} className='d-flex flex-column justify-content-center align-items-center vh-100'>
                            <div className="h-50 d-flex flex-column justify-content-center align-items-center px-5">
                                <h1 className='kanit-light'>Ingenuity through Creativity</h1>
                                <h5 className='ps-lg-5 kanit-extralight'>The human work is finite, but one's ideas lives on to infinity</h5>
                                <div className='w-100 d-flex justify-content-center align-items-center px-5'>
                                    { // hobby list
                                        generateHobbyList(['Programmer','Artist','Writer'])
                                    }
                                </div>
                            </div>
                            <div className="mb-5 w-75 d-flex justify-content-center align-items-center px-5">   
                                { // generate brand links
                                    brandLinks.map((tag) => <a key={tag.id} href={tag.link} target="_blank" rel="noreferrer" className="mx-2 text-dark  "><i className={'fa-brands fa-'+tag.brand}></i></a>)
                                }
                            </div>
                        </Col>
                        <Col lg={6} className='d-flex flex-column justify-content-center align-items-center vh-100'>
                        </Col>
                    </Row>
                </Container>
            </section>
        </header>
        <Container fluid>
            { // generate web sections
                SectionsList.map((tag) => <section key={tag.id} id={tag.key}>{tag.build()}</section>)
            }
        </Container>
        </>
    )
}