import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

class EditNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal show={this.props.ShowEditNotes.show} size="md" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} controlId="Form.Title">
              <Form.Label column sm="3">
                <strong>Title</strong>
              </Form.Label>
              <Col sm="9">
                <Form.Control type="text" placeholder="Title" className="py-0 txt-editcontent" defaultValue={this.props.ShowEditNotes.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="Form.Description">
              <Form.Label column sm="3">
                <strong>Description</strong>
              </Form.Label>
              <Col sm="9">
                <Form.Control as="textarea" rows="2" className="py-2 txt-editcontent" defaultValue={this.props.ShowEditNotes.description} />
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
          <Button onClick={() => this.props.setShowEditNotes(false, this.props.ShowEditNotes.title, this.props.ShowEditNotes.description)}>
            Cancel
          </Button>
          <Button>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditNotes;
