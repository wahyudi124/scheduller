import React,{Component} from 'react';
import {Button,Icon} from 'semantic-ui-react';

class Header  extends Component {
    constructor(props)
    {
        super(props);
        this.state = 
        {
            inActive : false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        this.setState(state => ({
            inActive: !state.inActive,
          }));
    }


    data = () =>{
        
           return <input class ="_search" autofocus= "autofocus" onBlur={this.handleClick} />
    }

    render(){

        const data =  this.state.inActive ?  (this.data()) : 
                                            (<Button basic color="red" icon onClick ={this.handleClick} >
                                            <Icon name='search' color="red" />
                                            </Button>)

    return(
    <section class="calendar-header">
        <div class="event_header">
                <h2><strong>List Event</strong></h2>
                {/*  */}
                <div class="filtermode">
                {data}
                <Button basic color="red" icon>
                    <Icon name='bookmark' color="red" />
                </Button>
                <Button basic color="red" icon>
                    <Icon name='bookmark outline' color="red" />
                </Button>
                <Button basic color="red" icon>
                    <Icon name='braille' color="red" />
                </Button>
                </div>
                
        </div>
    </section>
    )
    }
}

export default Header;