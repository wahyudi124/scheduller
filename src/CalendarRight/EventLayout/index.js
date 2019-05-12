import React,{Component} from 'react';
import 'semantic-ui-css/semantic.css';
import EventCard from './EventCard';
import Header from './Header';
import '../../App.css'
import Modall from '../../Modal';
import PageInation from './PageInation';


class EventLayout extends Component{
    constructor(props){
        super(props);
        this.state ={
            modalshow : false,
            cardkey1 : 1,
            card1 : false,
            card2 : false,
            card3 : false,
            card4 : false,
            cardstate : 0
        }
        this.openModal = this.openModal.bind(this);
        this.onNoClick = this.onNoClick.bind(this);
        this.onYesClick = this.onYesClick.bind(this);
    }

    openModal(){
    
            this.setState ({modalshow : true})
        
    }
    onYesClick(){
        this.setState (prevState => ({card2 : !prevState.card2}),
            () => this.setState({modalshow : false})
            )
    }

    onNoClick(){
        this.setState ({modalshow : false})
    }

    render(){
        return(
            <div class="_evencalendar">
            <Modall show = {this.state.modalshow} onnoClick = {this.onNoClick} onyesClick = {this.onYesClick} />
            <Header/>
            <div class="_evcard">
            <EventCard 
            applied = {this.state.card1}
            name = "Routine Event"
            createtime="09-12-2018"
            description= "Initial Event"
            idkey = {this.state.idkey}
            onAppliedClick = {this.openModal}
            onDeleteClick = {this.openModal}
            onApplyClick = {this.openModal}
            />
            <EventCard 
            applied = {this.state.card2}
            name = "Routine Event"
            createtime="09-12-2018"
            description= "Initial Event"
            idkey = {this.state.idkey}
            onAppliedClick = {this.openModal}
            onDeleteClick = {this.openModal}
            onApplyClick = {this.openModal}
            />
            </div>
            
            <div class="_evcard">
            <EventCard applied = {this.state.card3} name = "Spesial Day" createtime="09-12-2018" description= "Custom Event"/>
            <EventCard applied = {this.state.card4} name = "Overtime Day" createtime="09-12-2018" description= "Custom Event"/>
            </div>
            
            <div class = "margin_pagin">
            <PageInation/>
            </div>
          </div>
        )
    }
}

export default EventLayout;