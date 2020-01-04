import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super()

        this.state = {
            course_modules: []
        }

        // this.state = {
        //     course_modules: [
        //         { id: 1, title: 'Ruby on Rails with React', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', active: false },
        //         { id: 2, title: 'Java with Spring', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', active: false },
        //         { id: 3, title: 'Ruby for Developers', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', active: false },
        //         { id: 4, title: 'Rails for Making Money', description: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos', active: false }                
        //     ]
        // }
    }

    componentDidMount() {
        axios.get('/episodes.json')
            .then(res => {
                // debugger
                let ar = []
                res.data.episodes.map( item => {
                    ar.push({id:item.id, title: item.title, description: item.description, active: false})
                })
                this.setState({course_modules: ar})
            })
            .catch(error => {
                // debugger
            })
    }


    handleVideoChange(item, event) {
        event.preventDefault()

        let course_modules = [...this.state.course_modules ]
        course_modules.map( item => {
            item.active = false
        })
        
        item.active = !item.active
        
        course_modules[item.id - 1] = item
        
        this.setState({course_modules})
        console.log('course_modules', course_modules)

    }


    render() {
        return (
            <div>
                <Jumbotron />
                <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
            </div>
        )
    }
}

export default Home;





