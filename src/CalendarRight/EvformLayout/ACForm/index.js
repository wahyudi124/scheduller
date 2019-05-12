import React from 'react'
import { Dropdown,Button } from 'semantic-ui-react'


const options = [
    { key: 1, text: 'AC', value: 1 },
    { key: 2, text: 'Light', value: 2 },
    { key: 3, text: 'Alert', value: 3 },
    { key: 4, text: 'Test', value: 4 },
    { key: 5, text: 'afsa', value: 5 },
    { key: 6, text: 'asfasf', value: 6 },
    { key: 7, text: 'sfsf', value: 7 },
    { key: 8, text: 'fdfd', value: 8 },
    { key: 9, text: 'gfgf', value: 9 },
    { key: 10, text: 'sdsd', value: 10 },
    { key: 11, text: 'sds', value: 11 },
    { key: 12, text: 'sas', value: 12 },
]

const ACform = () => {
    return(
    <div>
    <div className="acform">
    <Dropdown
        placeholder='AC CODE'
        fluid
        multiple
        search
        selection
        options={options}
    />
    </div>
    <div className="summitbt">
    <Button color='red'>Save</Button>
    </div>
    </div>
    )
}

export default ACform;