import React, { Component } from 'react'
import ListarTarefas from '../components/ListarTarefas'

export default class Home extends Component{
    render (){
        return(
            <div>
                <ListarTarefas/>
            </div>
        )
    }
}