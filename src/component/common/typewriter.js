import React from "react";

export default class Typewriter extends React.Component {
  state = {
    typeColor: {
      color: "black",
    },
    typed: "",
  };

  componentDidMount() {
    this.typeWord(
      this.props.inputStrings[0],
      [].concat(this.props.inputStrings)
    );
  }

  typeWriter(string, words) {
    if (string.length === 0) {
      words = words.slice(1);
      if (words.length != 0) {
        this.setState({ typed: "" });
      }
      words[0] && this.typeWord(words[0], words);
    } else {
      this.setState((state, props) => ({
        typed: state.typed.concat(string[0]),
      }));

      setTimeout(() => this.typeWriter(string.slice(1), words), 300);
    }
  }

  typeWord(word, words) {
    this.stringChecker(word, words);
  }

  stringChecker(string, words) {
    this.typeWriter(string, words);
  }

  render() {
    return (
      <div style={this.state.typeColor}>
        <h2>I {this.state.typed}</h2>
      </div>
    );
  }
}
