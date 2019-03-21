import React, {Component} from 'react';

class Input extends Component {
    render(){
        return (
            <div>
                Podaj temperature w cels: <input type="text" onChange={this.props.changeTemp}/>
            </div>
        )
    }
}

export default Input