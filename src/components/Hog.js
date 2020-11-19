import React, { Component } from 'react'

export default class Hog extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
            hidden: this.props.hidden
        }
    }
    

    parseImage() {
        let name = this.props.info.name.toLowerCase().split(" ").join('_')
        return require("../hog-imgs/" + name + ".jpg")
    }
    hideCard() {
        this.setState({hidden: true})
    }

    whatToShow() {
        if (this.state.clicked) {
            return (
                <div className="ui card minPigTile pigTile">
                    <div className="content">
                        <ul>
                            <li>Speciality: {this.props.info.specialty}</li>
                            <li>Weight: {this.props.info.weight}</li>
                            <li>Greased: {this.props.info.greased}</li>
                            <li>Highest Medal Achieved: {this.props.info['highest medal achieved']}</li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ui card minPigTile pigTile">
                    <div className="content">
                        <h3>{this.props.info.name}</h3>
                        <h2 onClick={() => this.hideCard()}>X</h2>
                    </div>
                    <div className="image">
                        <img src={this.parseImage()} alt="A picture of a hog"/>
                    </div>
                </div>
            )
        }
    }
    render(){
        if (this.state.hidden === false){
            return (
                <div className="ui eight wide column" onClick={() => {this.state.clicked ? this.setState({clicked:false}) : this.setState({clicked:true})}}>
                    {this.whatToShow()}
                </div>
            )
        } else {
            return (null)
        }

    }


}