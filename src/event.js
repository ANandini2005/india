import React from 'react';
import { NavLink } from 'react-router-dom';
import './event.css'; 
import logouticon from './images/logout.webp';
import backgroundVideo from './images/vd4.mp4';



const HS1 = {"padding-left" : "5px", "font-weight" : "bold"};
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};

class Event extends React.Component {
    render() {

        const culturalEvents = [
            { state: 'Maharashtra', event: 'Ganesh Chaturthi', time: 'September' },
            { state: 'Tamil Nadu', event: 'Pongal', time: 'January' },
            { state: 'Uttar Pradesh', event: 'Kumbh Mela', time: 'Every 12 years' },
            { state: 'Kerala', event: 'Onam', time: 'August/September' },
            { state: 'Gujarat', event: 'Navratri', time: 'September/October' },
            { state: 'Rajasthan', event: 'Gangaur', time: 'March/April' },
            { state: 'West Bengal', event: 'Durga Puja', time: 'October' },
            { state: 'Andhra Pradesh', event: 'Ugadi', time: 'March/April' },
            { state: 'Arunachal Pradesh', event: 'Losar', time: 'February/March' },
            { state: 'Assam', event: 'Bihu', time: 'April' },
            { state: 'Bihar', event: 'Chhath Puja', time: 'October/November' },
            { state: 'Chhattisgarh', event: 'Bastar Dussehra', time: 'October' },
            { state: 'Goa', event: 'Goa Carnival', time: 'February' },
            { state: 'Haryana', event: 'Holi', time: 'March' },
            { state: 'Himachal Pradesh', event: 'Kullu Dussehra', time: 'October' },
            { state: 'Jharkhand', event: 'Sarhul', time: 'Spring' },
            { state: 'Karnataka', event: 'Mysuru Dasara', time: 'October' },
            { state: 'Manipur', event: 'Sangai Festival', time: 'November' },
            { state: 'Meghalaya', event: 'Wangala Festival', time: 'November' },
            { state: 'Mizoram', event: 'Chapchar Kut', time: 'March' },
            { state: 'Madhya Pradesh', event: 'Khajuraho Dance Festival', time: 'February' },
            { state: 'Nagaland', event: 'Hornbill Festival', time: 'December' },
            { state: 'Odisha', event: 'Rath Yatra', time: 'June-July' },
            { state: 'Punjab', event: 'Baisakhi', time: 'April' },
            { state: 'Sikkim', event: 'Losar', time: 'February-March' },
            { state: 'Telangana', event: 'Bathukamma', time: 'September-October' },
            { state: 'Tripura', event: 'Kharchi Puja', time: 'July-August' },
            { state: 'Uttarakhand', event: 'Makar Sankranti', time: 'January' }
        ];



            return (
                <div>
                    <div className='header'>
                        <label style={HS1}>INDIA | Culture Management System</label>
                        <NavLink to="/home" className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                        <NavLink to="/states" className="nav-link">States in India</NavLink>
                        <NavLink to="/traditions" className="nav-link">Traditions</NavLink>
                        <NavLink to="/event" className="nav-link">Event</NavLink>
                        <label style={HS2} onClick={this.logout}>Logout</label>
                        <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                        <label id='HL1' style={HS4}></label>
                        <div id="header"></div>
                    </div>
                    
                    <div className="events-container">
                         <div className="video-background">
    <video autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  </div>
                        <h2>Cultural Events Across India</h2>
                        <div className="events-list">
                            {culturalEvents.map((event, index) => (
                                <div className="event-item" key={index}>
                                    <h3>{event.state}</h3>
                                    <p><strong>Event:</strong> {event.event}</p>
                                    <p><strong>Time:</strong> {event.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
    }
}

export default Event;
