import React from "react";
import { Modal, Button } from "react-bootstrap";

class ViewNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal show={this.props.ShowViewNotes.show} size="md" aria-labelledby="contained-modal-title-vcenter" animation={false} centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{this.props.ShowViewNotes.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="my-2">{this.props.ShowViewNotes.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.setShowViewNotes(false, this.props.ShowViewNotes.title, this.props.ShowViewNotes.description)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewNotes;
