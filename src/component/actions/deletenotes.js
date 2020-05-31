import React from "react";
import { Modal, Button } from "react-bootstrap";

class DeleteNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal show={this.props.ShowDeleteNotes.show} size="md" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Delete Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="my-2">
            Are you sure you want to delete "<strong>{this.props.ShowDeleteNotes.title}</strong>" note?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.setShowDeleteNotes(false, this.props.ShowDeleteNotes.noteName)}>Close</Button>
          <Button className="btn btn-danger" onClick={() => this.props.setShowDeleteNotes(false, this.props.ShowDeleteNotes.noteName)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeleteNotes;
