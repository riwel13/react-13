import { Component } from "react";
import { createPortal } from "react-dom";

const rootModal = document.getElementById("root-modal")



class Modal extends Component {
    state = {
        name: ""
    }
  componentDidMount() {

    window.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
    
  }

  handleEscClose = (event) => {
      if (event.code === "Escape") {
        this.props.closeModal();
      }
    }

  handleBackdropclose = (event) => {

    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onName(this.state.name);

    this.setState({
      name: ""
    })
     this.props.closeModal()
    
  }
  render() {
    
    return (
      createPortal( <div
        onClick={this.handleBackdropclose}
        className="fixed top-0 right-0 left-0 bottom-0 bg-red-200/50 flex justify-center items-center"
      >
        <div className="h-64 w-96 rounded-xl bg-white p-4 shadow-lg relative flex justify-center items-center gap-4 flex-col">
          <button
            onClick={this.props.closeModal}
            type="button"
            className="absolute top-4 right-4"
          >
            x
          </button>
        <form onSubmit={this.handleSubmit}>
          <input className="block rounded-md w-full h-10 border-red-900 border-solid border pl-3"type="text" placeholder="enter your name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
          <button className="bg-red-900 py-2 px-4 w-40 mx-auto text-xl font-bold
text-white rounded-full mt-4" type="submit">sent</button>
        </form>
          
        </div>
      </div>, rootModal)
     
    );
  }
}

export default Modal;
