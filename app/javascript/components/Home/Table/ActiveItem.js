import React, { Component } from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'
import Video from './Video'

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0;
    background-color: #fff;
    box-shadow: 0px 0px 0px 3px #473228,
        -6px 6px #ef5f17,
        -6px 6px 0px 3px #473228;
    color: #333 !important;
    padding:10px 20px;
    font-size:18px;
`

const ActiveItem = (props) => {
    return(
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offset-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <Video/>
                            </div>                           
                            <div className="pt-4 pb-4">
                                <h4>{props.title}</h4>
                                <p>{props.description}</p>
                                <div className="cta-wrapper">
                                    <Button onClick={props.handleVideoChange} className="btn cta-btn">Watch</Button>
                                </div>
                            </div>                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveItem
