import React, {Component} from 'react'
import Input from './Input/Input.js'
import Result from './Result/Result.js'

class Temperature extends Component{
    state = {
        "temperature":""
    }

    tempUpdate = (event) =>{
        let calc = event.target.value * 9/5 + 32;
        this.setState({
            "temperature":calc
        })
    }

    render(){
        return (<div>
        <Input changeTemp={this.tempUpdate}></Input>
        <Result temp={this.state.temperature}></Result>
        </div>
        )
    }

}
export default Temperature