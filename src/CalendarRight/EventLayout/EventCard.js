import React,{Component} from 'react';
import { Button, Card, Image,Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
import PropTypes from 'prop-types';


class EventCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            idkey : this.props.idkey,
        }
    }

    render(){
        const changebt = this.props.applied ? (<Button onClick={this.props.onAppliedClick}  color='green'> <Icon name='check' /> Applied </Button>) : 
                                             (<Button onClick={this.props.onApplyClick} basic color='green'> Apply </Button>)
        return(
        <div>
        <Card color="red">
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
                {changebt}
                {/* <Button basic color='green'>
                    Apply
                </Button> */}
                <Button basic color='red' onClick = {this.props.onDeleteClick}>
                    Delete
                </Button>
                </div>
            </Card.Content>
        </Card>
        </div>
        )
    }
}

EventCard.propTypes = {
    applied : PropTypes.bool,
    name : PropTypes.string,
    description : PropTypes.string,
    createtime : PropTypes.string,
    onAppliedClick :PropTypes.func,
    onApplyClick :PropTypes.func,
    onDeleteClick :PropTypes.func,
    idkey : PropTypes.number,
}

export default EventCard;