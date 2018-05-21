import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import Note from './Note.js';

export default class List extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="note-list">
            <h3>Your Notes:</h3>
                <Row>
                    <Col xs="4">
                    <Route path="/note" component={Note}/>
                        <Link to="/note">
                            <button>
                                <h1>Note Title</h1>
                                <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                            </button>
                        </Link>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                    <Col xs="4">
                        <button>
                            <h1>Note Title</h1>
                            <p>Morbi pharetra sem vel elit pulvinar interdum. Cras aliquam accumsan nunc.</p>
                        </button>
                    </Col>
                </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}