import React,{Component} from 'react';
import { Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import EventCard from './EventCard';
import Header from './Header';


class EventLayout extends Component{
    render(){
        return(
            <div>
            <Header/>
            <Card.Group>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            </Card.Group>
          </div>
        )
    }
}

export default EventLayout;