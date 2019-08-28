import React, {Component} from 'react'

import { Typography, List, ListItem, ListItemText, Fab} from '@material-ui/core'
import {Done} from '@material-ui/icons'

const classes = {
    mr: {
        marginRight: "50%"
    }
}

export default class ListarTarefas extends Component{
    constructor(){
        super()
        this.state = {
            tarefas: []
        }
    }

    componentWillMount(){
        this.carregarTarefas()

    }

    
    carregarTarefas(){
        fetch('http://localhost:8000/api/tarefas-pendentes', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
        .then(response => response.json())

        .then(tarefas => {
            this.setState({
                tarefas
            })
        })
    }


    concluirTarefa(id){
        fetch('http://localhost:8000/api/concluir-tarefa', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                id: id
            })
        })
       .then(response => response.json())
       .then(data => {
           if (data.salvou){
               this.carregarTarefas()
           }

       })
    }

    render(){
      return (
            <div>
                <Typography variant="h4">Lista de Tarefas</Typography>
                    <List>
                        { this.state.tarefas.map((tarefa, index) => {
                            return(
                                
                                <ListItem key={index}>
                                    <ListItemText primary={tarefa.description}/>
                                        <Fab 
                                            color="primary"
                                            onClick={() =>this.concluirTarefa(tarefa.id)}>
                                            <Done/>
                                        </Fab>
                                </ListItem>                                
                            )
                        })}
                    </List>
            </div>
        )
    }
}