import React,{Component} from 'react'
import {Pagination} from 'semantic-ui-react'

class PageInation extends Component{
    render(){
        return(
            <div >
                 <Pagination
                    boundaryRange={0}
                    defaultActivePage={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                    totalPages={10}
                    />
            </div>
        )
    }
}

export default PageInation;