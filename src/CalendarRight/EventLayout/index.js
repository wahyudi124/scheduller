import React,{Component} from 'react';
import { Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import EventCard from './EventCard';


class EventLayout extends Component{
    render(){
        return(
            <Card.Group>
            <EventCard/>
          </Card.Group>
        )
    }
}

export default EventLayout;