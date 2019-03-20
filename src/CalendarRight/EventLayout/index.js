import React,{Component} from 'react';
import { Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import EventCard from './EventCard';
import Header from './Header';
import PageInation from './PageInation';


class EventLayout extends Component{
    render(){
        return(
            <div class="_evencalendar">
            <Header/>
            <div>
            <Card.Group>
            <EventCard name = "Tangal Merah" createtime="1990" description= "hallo"/>
            <EventCard name = "Tangal Merah" createtime="1990" description= "hallo"/>
            <EventCard name = "Tangal Merah" createtime="1990" description= "hallo"/>
            <EventCard name = "Tangal Merah" createtime="1990" description= "hallo"/>
            </Card.Group>
            </div>
            <div class = "margin_pagin">
            <PageInation/>
            </div>
          </div>
        )
    }
}

export default EventLayout;