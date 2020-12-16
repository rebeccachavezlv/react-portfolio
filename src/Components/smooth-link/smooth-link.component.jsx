import React from 'react'
import { Link } from "react-scroll";
import ButtonComponent from '../button/button.component'

class SmoothLink extends React.Component {
    constructor(props){
        super(props);

        this.state={
            to: this.props.to,
            button: this.props.button,
            label: this.props.label,
            effect: this.props.effect
        }
    }
    render(){
        return (
            <Link
                activeClass="active"
                to={this.state.to}
                spy={false}
                smooth={true}
                offset={0}
                duration={700}
                >
                    {this.state.button ? <ButtonComponent title={this.state.label} effect={this.state.effect}/> : 'goodbye'}
                </Link>
        )
    }
};

export default SmoothLink