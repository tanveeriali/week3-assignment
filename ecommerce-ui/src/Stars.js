import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Stars extends React.Component{
    static propTypes = {
        num: PropTypes.number.isRequired,  
        reviews: PropTypes.number.isRequired,  
        
    }

    render() {
        const num = parseInt(this.props.num);
        let starArray = [];
        for (let i = 0;i<5; i++) {
           if (num <= i) {starArray.push('nofill')}
           else {starArray.push('fill')}
        }
        return (
            <div className="star">
                <div>{starArray.map((s,i) =>  
                    <FontAwesomeIcon icon={faStar} class={s} color="#fc5158"/>
                )}</div>
                <span>{this.props.reviews} reviews</span>
            </div>
        )
    }
}

export default Stars;

