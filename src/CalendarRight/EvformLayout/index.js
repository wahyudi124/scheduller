import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';
import Header from './Header';
import Baseform from './Baseform';
import ACform from './ACForm';

class EvformLayout extends Component{
    render(){
        return(
            <div>
                <Header judul = "Create New Event"/>
                <Baseform/>
                <ACform/>
                
            </div>
        )
    }
}

export default EvformLayout;