import React,{Component} from 'react';
import {Form, Dropdown, Grid, Text} from 'semantic-ui-react';

const options = [
    { key: 1, text: 'AC', value: 1 },
    { key: 2, text: 'Light', value: 2 },
    { key: 3, text: 'Alert', value: 3 },
]

class Baseform extends Component{

    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render(){

        const {value} = this.state;
        
        return(
            <div >
                <Form>
                    <Form.Group>
                        <Form.Input label='Event Name' placeholder='New' width={6} />
                        <Form.Input label='Time' placeholder='08:00' width={4} />
                        <Form.Dropdown 
                             label = 'Select Mode'
                             onChange={this.handleChange}
                             options={options}
                             placeholder='Choose an option'
                             selection
                             value={value}>
                        </Form.Dropdown>
                    </Form.Group>
                    <Form.Group>
                    <Form.Checkbox label='Work Days' />
                    <Form.Checkbox label='Weakend' />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default Baseform;