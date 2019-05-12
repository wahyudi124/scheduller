import React from 'react';
import {Button, Icon} from 'semantic-ui-react'
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const Header = (props) => {
    return(
    <section class="hdisplay">
                <h2><strong>{props.month}</strong> {props.year}</h2>
                <div>
                <Button.Group>
                    <Button onClick = {props.prevmonth} > <Icon name='arrow left'/></Button>
                    <Button>{props.year}</Button>
                    <Button onClick = {props.nextmonth}><Icon name='arrow right'/></Button>
                </Button.Group>
                </div>
    </section>
    )
}

const MDTP = dispatch => {
    return {
         nextmonth : () => dispatch(actionCreators.next_calendar()),
         prevmonth : () => dispatch(actionCreators.prev_calendar())
    }
}

export default connect(null,MDTP)(Header);