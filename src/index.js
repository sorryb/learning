import React from 'react';
import ReactDOM from 'react-dom/client';

class BoilledWater extends React.Component
{
    constructor(props){
        super(props);
    }

    render()
    {
        const temperature = this.props.celsius;
        return (
            temperature >= 100 ? <p>Hot water - {temperature}</p> : <p>Not so hot-{temperature}</p>

        );
    }

}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

class Calculator extends React.Component
{
    constructor(props){
        super(props);
        this.state = {temperature:1};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        this.setState({temperature: e.target.value});
      }

    render(){
            const temperature = this.state.temperature;
        return (

            <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input type="text" value={temperature} onChange={this.handleChange}/>

            <BoilledWater celsius = {parseFloat(temperature)}/>
            <br/>
            <BoilingVerdict  celsius = {parseFloat(temperature)} />
            </fieldset>
            
        );
    }


}

const element = <Calculator/>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);