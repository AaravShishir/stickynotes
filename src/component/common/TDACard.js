import React from "react";
import { Card } from "react-bootstrap";
import helper from "../../shared/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class TDACard extends React.Component {
  render() {
    return (
      <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-3">
        <Card className={this.props.Data.background}>
          <Card.Body className="py-3">
            <Card.Title>{this.props.Data.title}</Card.Title>
            <Card.Text>{this.props.Data.body}</Card.Text>
            <Card.Link className="text-success" onClick={() => this.props.setShowViewNotes(true, this.props.Data.title, this.props.Data.body)}>
              <FontAwesomeIcon title="View" icon={faEye} />
            </Card.Link>
            <Card.Link className="text-primary" onClick={() => this.props.setShowEditNotes(true, this.props.Data.title, this.props.Data.body)}>
              <FontAwesomeIcon title="Edit" icon={faEdit} />
            </Card.Link>
            <Card.Link className="text-danger" onClick={() => this.props.setShowDeleteNotes(true, this.props.Data.title)}>
              <FontAwesomeIcon title="Delete" icon={faTrashAlt} />
            </Card.Link>
            <Card.Link className="text-muted time-card-text">{helper.FormatDate(this.props.Data.createdOn)}</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default TDACard;
