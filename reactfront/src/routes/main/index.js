import React from 'react';

import Footer from 'components/footer'
import Header from 'components/header'
import Sitelinks from 'components/sitelinks'

import { Container, Row, Col, Button, Jumbotron } from 'react-bootstrap';

class Main extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Container className="my-md-9">
          <img alt="Main background"></img>
          <Row>
            <Col md={4} className="text-center">
              <h1>Example Site Main Page</h1>
            </Col>
            <Col md={8}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit tincidunt turpis. Donec volutpat volutpat lorem nec consectetur. Quisque condimentum accumsan pellentesque. Nulla ligula erat, finibus eleifend nunc ut, lacinia placerat metus. Vestibulum quis feugiat lorem. Duis facilisis tellus sed mollis interdum. Ut viverra facilisis risus in condimentum. Phasellus tincidunt, lacus ac imperdiet congue, erat dui facilisis orci, vitae tristique ante lectus at risus. Nunc ut luctus orci.
            </Col>
          </Row>
        </Container>
        <Container className="my-md-6" as={Jumbotron}>
          <Row className="justify-content-center">
            <Col md={8}>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl nisi, eleifend vel nisl eu, scelerisque varius metus. In aliquet massa eget ipsum volutpat rhoncus. Vivamus efficitur tempor tellus, in lacinia elit tincidunt volutpat. Pellentesque mattis diam quis tincidunt pretium. Nunc at felis sem.</div>
            </Col>
          </Row>
          <Row className="mt-3 justify-content-sm-center">
            <Col xs="auto" md={{ span: 3, offset: 8 }}>
              <Button className="justify-end">Achieve More</Button>
            </Col>
          </Row>
        </Container>
        <Container className="mb-md-8">
          <Row className="justify-content-center mb-md-3">
            <Col md={4} className="text-center">
              <h2>Product Line Description</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={4} lg={3} className="text-center">
              <img alt="Small Icon 1" className="m-3"></img>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit tincidunt turpis.</div>
            </Col>
            <Col md={4} lg={3} className="text-center">
              <img alt="Small Icon 2" className="m-3"></img>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl nisi, eleifend vel nisl eu, scelerisque varius metus.</div>
            </Col>
            <Col md={4} lg={3} className="text-center">
              <img alt="Small Icon 3" className="m-3"></img>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac purus ultrices, ultrices velit nec, dictum metus.</div>
            </Col>
          </Row>
        </Container>
        <Container className="mb-md-8">
          <Row>
            <Col md={3} className="text-center">
              <h3>Featured Information 1</h3>
              <img alt="Highlight 1"></img>
            </Col>
            <Col md={9}>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl nisi, eleifend vel nisl eu, scelerisque varius metus. Mauris fermentum dolor quis leo scelerisque varius in sed risus. In aliquet massa eget ipsum volutpat rhoncus. Ut vulputate non nisl ac varius. Etiam egestas, urna nec convallis rutrum, velit dui dictum felis, ut tempus dolor dui vitae mauris. Mauris posuere in eros nec rhoncus. Vivamus efficitur tempor tellus, in lacinia elit tincidunt volutpat. Phasellus porttitor turpis at tempus aliquam. Nullam aliquet sagittis nunc et blandit. Maecenas elementum elit id felis iaculis vehicula. Pellentesque mattis diam quis tincidunt pretium. Nunc at felis sem. In eu diam venenatis, aliquam massa eu, facilisis erat.</div>
            </Col>
          </Row>
        </Container>
        <Container className="my-md-8">
          <Row>
            <Col md={9}>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac purus ultrices, ultrices velit nec, dictum metus. Donec semper sem in sapien laoreet, sed aliquam risus aliquet. Phasellus non arcu non est posuere suscipit in ac tellus. Aliquam nec lectus hendrerit, volutpat nisl sed, rhoncus neque. Mauris accumsan ipsum id leo molestie, at posuere ligula volutpat. Aliquam non purus a lectus efficitur congue a in diam. Duis id justo ut felis egestas pretium. Morbi dignissim neque sed velit porttitor pellentesque. Donec suscipit, sapien ac tristique dictum, velit ex eleifend odio, in ullamcorper justo dolor sed turpis. Sed sed pulvinar dui. Suspendisse scelerisque ante vel faucibus condimentum. Maecenas pulvinar neque lectus, vel elementum ligula venenatis in. Morbi bibendum ante et purus consequat dictum.</div>
            </Col>
            <Col md={3} className="text-center">
              <h3>Featured Information 2</h3>
              <img alt="Highlight 2"></img>
            </Col>
          </Row>
        </Container>
        <Sitelinks />
        <Footer />
      </div>
    )
  }
}

export default Main;