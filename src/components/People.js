import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function People(props) {
    const {id, name, email, img, title, message, chats} = props;
  return (
    <div className='people'>
        <Link to= {'/chatting'} state={props}>
            <img src={img} alt={title} title={title} />
            <div className="people_data">
                <h3 className="people_name">{name}</h3>
                <h4 className='people_message'>{message}</h4>
                <div className="people_chats">
                    {chats.map((chat,index) =>{
                        return(
                            <span className='people_chat' key={index}>{chat}</span>
                        )
                    })}
                </div>
            </div>
        </Link>
    </div>
  )
}

People.PropTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
    chats : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default People