import React, { Component } from 'react'
import Hog from './Hog'


export default class HogContainer extends Component {


    renderHogs = () => {
        let id_index = 0
        return this.props.hogs.map((hog) => {
            id_index += 1
            return (<Hog key={id_index} info={hog} hidden={false}/>)
        })
    }

    render(){
        return (
            <div className="ui grid container">
                {this.renderHogs()}
            </div>

        )
    }

}