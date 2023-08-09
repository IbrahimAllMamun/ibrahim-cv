import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CTA = () => {
    return ( 
        <div className='cta-comp'>
            <button className='btn btn-cta btn-trans'>
                DOWNLOAD CV <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
            </button>
            <button className='btn btn-cta btn-trans'>
                CONTACT ME <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
            </button>
        </div>
     );
}
 
export default CTA;