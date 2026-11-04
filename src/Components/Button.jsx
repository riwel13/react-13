import { Component } from "react";

class Button extends Component {

    render() {
        return(
<button onClick={this.props.openModal} type="button" className="bg-red-100 py-2 px-4 w-40 mx-auto text-xl font-bold
text-amber-900 rounded-full">open</button>
        )
    }
}

export default Button