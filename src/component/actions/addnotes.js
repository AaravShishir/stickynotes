import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal show={this.props.ShowAddNotes.show} size="md" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Add Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="Form.Title">
              <Form.Label column sm="3">
                <strong>Title</strong>
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Enter Title" className="py-0 txt-editcontent" defaultValue={this.props.ShowAddNotes.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Form.Description">
              <Form.Label column sm="3">
                <strong>Description</strong>
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  placeholder="Enter Description"
                  as="textarea"
                  rows="2"
                  className="py-2 txt-editcontent"
                  defaultValue={this.props.ShowAddNotes.description}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Form.Color">
              <Form.Label column sm="3" className="py-0">
                <strong>Background</strong>
              </Form.Label>
              <Col sm={9}>
                <Form.Check inline type="radio" label="Grey" name="formHorizontalRadios" id="formHorizontalRadios1" />
                <Form.Check inline type="radio" label="Yellow" name="formHorizontalRadios" id="formHorizontalRadios2" />
                <Form.Check inline type="radio" label="Blue" name="formHorizontalRadios" id="formHorizontalRadios3" />
                <Form.Check inline type="radio" label="Green" name="formHorizontalRadios" id="formHorizontalRadios4" />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.setShowAddNotes(false)}>Cancel</Button>
          <Button className="btn btn-success">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddNotes;
