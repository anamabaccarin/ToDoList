import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

export default class Header extends Component {
    render(){
        return(
            <AppBar position="static">
                <ToolBar>
                    <Typography>
                    To Do List
                    </Typography>
                </ToolBar>
            </AppBar>
        )
    }
}