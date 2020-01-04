import React, { Component } from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'


export default class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        const items = this.props.course_modules.map( (item) => {
            let handleVideoChange = this.props.handleVideoChange.bind(this, item)
            return(
                item.active ?
                <ActiveItem handleVideoChange={handleVideoChange} key={item.id} title={item.title} description={item.description} />
                :
                <Item handleVideoChange={handleVideoChange} key={item.id} title={item.title} description={item.description} />
            )
        })

        return(
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">React for Rails Developers - Videos</h2>
                    </div>

                    {items}
                </div>
            </div>
        )
    }
}


