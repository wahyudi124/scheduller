import React from 'react';

const Header = (props) => {
    return(
    <section class="calendar-header">
                <h2><strong>{props.judul}</strong></h2>
                <div class="calendar-nav">
                {/* <a href="#"><i class="fas fa-arrow-left"></i></a><a href="#">Today</a><a href="#"><i class="fas fa-arrow-right"></i></a>&nbsp; */}
                </div>
    </section>
    )
}

export default Header;