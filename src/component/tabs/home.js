import React from "react";
import TDACard from "../common/TDACard";
import "../../assets/styles/home.css";
import stickyNotesAPI from "../../api/common_api";
import ViewNotes from "../actions/viewnotes";
import EditNotes from "../actions/editnotes";
import AddNotes from "../actions/addnotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AllTodos: [],
      ShowViewNotes: { show: false, title: "", description: "" },
      ShowEditNotes: { show: false, title: "", description: "" },
      ShowAddNotes: { show: false, title: "", description: "" },
      ShowDeleteNotes: false,
    };
  }

  async componentDidMount() {
    let Todos = await stickyNotesAPI.getToDos();
    this.setState({ ...this.state, AllTodos: Todos });
  }

  setShowViewNotes = (flag, title, desc) => {
    this.setState({ ...this.state, ShowViewNotes: { show: flag, title: title, description: desc } });
  };

  setShowEditNotes = (flag, title, desc) => {
    this.setState({ ...this.state, ShowEditNotes: { show: flag, title: title, description: desc } });
  };

  setShowAddNotes = (flag) => {
    this.setState({ ...this.state, ShowAddNotes: { show: flag, title: "", description: "" } });
  };

  render() {
    if (this.state.AllTodos.length > 0) {
      return (
        <div className="light">
          <div className="row">
            {this.state.AllTodos.map((element) => {
              return (
                <TDACard
                  setShowViewNotes={this.setShowViewNotes.bind(this)}
                  setShowEditNotes={this.setShowEditNotes.bind(this)}
                  key={element.todoId}
                  Data={element}
                ></TDACard>
              );
            })}
          </div>
          <ViewNotes ShowViewNotes={this.state.ShowViewNotes} setShowViewNotes={this.setShowViewNotes.bind(this)} />
          <EditNotes ShowEditNotes={this.state.ShowEditNotes} setShowEditNotes={this.setShowEditNotes.bind(this)} />
          <AddNotes ShowAddNotes={this.state.ShowAddNotes} setShowAddNotes={this.setShowAddNotes.bind(this)} />
          <div title="Add Notes" className="add-notes" onClick={() => this.setShowAddNotes(true)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="light">
          <div className="row">Loading...</div>
        </div>
      );
    }
  }
}

export default Home;
