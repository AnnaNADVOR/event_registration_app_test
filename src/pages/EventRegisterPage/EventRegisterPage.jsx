import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useParams } from 'react-router-dom';
import EventRegistrationForm from "components/EventRegistrationForm/EventRegistrationForm";
import GoBackButton from "components/GoBackButton/GoBackButton";

const EventRegisterPage = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location.state?.from ?? '/');
    
    const params = useParams();
    const currentEventId = params.eventId; 

    return (
        <section className='section'>
            <div className='container'>
                <GoBackButton location={prevLocationRef.current}/>
                <EventRegistrationForm eventId={currentEventId}/>
            </div>
        </section>
    )
}

export default EventRegisterPage; 