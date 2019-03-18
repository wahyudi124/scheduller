import React,{Component} from 'react';
import DateItem from './DateItem';
import Header from './Header';

class DateLayout extends Component{
    render(){
        return(
            <section>
            <Header month = "January" year= "2019"/>
            <section class="calendar-row">
                <div class="calendar-day day-name">Mon</div>
                <div class="calendar-day day-name">Tue</div>
                <div class="calendar-day day-name">Wed</div>
                <div class="calendar-day day-name">Thu</div>
                <div class="calendar-day day-name">Fri</div>
                <div class="calendar-day day-name">Sat</div>
                <div class="calendar-day day-name">Sun</div>
            </section>
            <section class="calendar-row">
                <DateItem date = {10} ecount = {0} mode="weekend"/>
                <div class="calendar-day active">
                <span class="calendar-date">1</span>
                <br/><span class="calendar-event">4</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">2</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">3</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">4</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">5</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">6</span>
                </div>
            </section>
            <section class="calendar-row">
                <div class="calendar-day">
                <span class="calendar-date">7</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">8</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">9</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">10</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">11</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">12</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">13</span>
                </div>
            </section>
            <section class="calendar-row">
                <div class="calendar-day">
                <span class="calendar-date">14</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">15</span>
                <br/><span class="calendar-event">5</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">16</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">17</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">18</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">19</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">20</span>
                </div>
            </section>
            <section class="calendar-row">
                <div class="calendar-day">
                <span class="calendar-date">21</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">22</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">23</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">24</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">25</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">26</span>
                <br/><span class="calendar-event">1</span>
                </div>
                <div class="calendar-day weekend">
                <span class="calendar-date">27</span>
                </div>
            </section>
            <section class="calendar-row">
                <div class="calendar-day">
                <span class="calendar-date">28</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">29</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">30</span>
                </div>
                <div class="calendar-day">
                <span class="calendar-date">31</span>
                <br/><span class="calendar-event">3</span>
                </div>
                <div class="calendar-day inactive">
                <span class="calendar-date">1</span>
                </div>
                <div class="calendar-day weekend inactive">
                <span class="calendar-date">2</span>
                </div>
                <div class="calendar-day weekend inactive">
                <span class="calendar-date">3</span>
                </div>
            </section>
            </section>
        )
    }
}

export default DateLayout;