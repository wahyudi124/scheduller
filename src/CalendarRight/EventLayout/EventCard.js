import React,{Component} from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'


class EventCard extends Component{
    render(){
        return(
        <Card color="red" >
            <Card.Content>
                <Image floated='right' size='mini' src={this.props.icon} />
                <Card.Header>{this.props.name}</Card.Header>
                <Card.Meta>{this.props.createtime}</Card.Meta>
                <Card.Description>
                {this.props.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Apply
                </Button>
                <Button basic color='red'>
                    Delete
                </Button>
                </div>
            </Card.Content>
        </Card>
        )
    }
}

export default EventCard;