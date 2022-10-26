import React, {useEffect, useState} from 'react'
import '../routes/Profile'
import FriendsListItem from './FriendsListItem';
import MyListItem from './MyListItem';
import people from '../data/people.json'
import axios from 'axios';

import '../styles/FriendsList.scss';

function FriendsList() {

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

  
  return (
    <div className='FriendsList'>
      <section className="main_section">
        <header><h2>My Profile</h2></header>
        {names.map((name,index) => (<MyListItem 
                                        key={index}
                                        name={name.name}
                                        img={people[index].img}
                                        message={people[index].message}
                                      />
        )).slice([0],[1])}
      </section>
      <section className="main_section">
        <header><h2>Friends</h2></header>
        {names.map((name,index) => (<FriendsListItem 
                                        key={index}
                                        name={name.name}
                                        img={people[index].img}
                                        message={people[index].message}
                                      />
        )).slice([1],[11])}
      </section>
    </div>
  )
}

export default FriendsList