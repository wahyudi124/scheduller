import React,{Component} from 'react';
import {Modal,Header,Button,Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';



class Modall extends Component{
    render(){
    return(
        <Modal open= {this.props.show} basic size='small'>
        <Header icon='archive' content='Archive Old Messages' />
        <Modal.Content>
          <p>
            {this.props.msg}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick = {this.props.onnoClick} inverted>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick = {this.props.onyesClick} inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
    }
}

Modall.propTypes = {
  onyesClick : PropTypes.func,
  onnoClick : PropTypes.func,
  show : PropTypes.bool,
  msg : PropTypes.string,
}

export default Modall;