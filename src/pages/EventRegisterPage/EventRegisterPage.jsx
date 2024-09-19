import { useLocation } from "react-router-dom";
import { useRef } from "react";

import EventRegistrationForm from "components/EventRegistrationForm/EventRegistrationForm";
import GoBackButton from "components/GoBackButton/GoBackButton";

const EventRegisterPage = () => {
    const location = useLocation();
    const prevLocationRef = useRef(location.state?.from ?? '/');

    return (
        <section className='section'>
            <div className='container'>
                <GoBackButton location={prevLocationRef.current}/>
                <EventRegistrationForm/>
            </div>
        </section>
    )
}

export default EventRegisterPage; 