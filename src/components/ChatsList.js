import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom';
import people from '../data/people.json'
import axios from 'axios';
import ChatsListItem from './ChatsListItem';

function ChatsList() {

  const [names, setNames] = useState([]);
    const nameUrl = "https://jsonplaceholder.typicode.com/users";

    const getNames = async () => {
        try {
            const response = await axios(nameUrl);
            setNames(response.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        getNames();
    }, []);

    const [texts, setTexts] = useState([]);
    const textUrl = "https://jsonplaceholder.typicode.com/todos";

    const getTexts = async () => {
        try {
            const response = await axios(textUrl);
            setTexts(response.data.slice(0,10));
        } catch (error) {
        }
    };

    useEffect(() => {
        getTexts();
    }, []);

  return (
    <div className='ChatsList'>
      <section className="main_section">
        <header className="blind"><h2>Freinds</h2></header>
        {names.map((name,index)=>(
          <ChatsListItem 
            key={index}
            name={name.name}
            img={people[index].img}
            text={texts[index].title}
          />
        )).slice([1],[11])}
      </section>
    </div>
  )
}

export default ChatsList