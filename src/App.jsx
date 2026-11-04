import "./App.css";
import React from "react";
import Modal from "./Components/Modal";
import Button from "./Components/Button";
import Title from "./Components/Title";

class App extends React.Component {
  state = {
    isModal: false,
    name: "",
  };

  componentDidMount() {
    const userName = localStorage.getItem("name");
    this.setState({
      name: userName || ""
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.name !== this.state.name) {
      localStorage.setItem("name", this.state.name);
    }
  }

  toggleModal = () => {
    this.setState((prev) => {
      return {
        isModal: !prev.isModal,
      };
    });
  };

  handleName = (text) => {
    this.setState({
      name: text,
    });
  };
  render() {
    console.log(this.state.name);

    return (
      <>
        {!this.state.name ? <Button openModal={this.toggleModal} /> : null}
        <Title name={this.state.name} />
        {this.state.isModal && (
          <Modal closeModal={this.toggleModal} onName={this.handleName} />
        )}
      </>
    );
  }
}

export default App;
