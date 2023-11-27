import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from '../components/User.jsx'
import { Link } from 'react-router-dom';

function Home(){
    const [user, setUsers] = useState([]);

    async function fetchUsers(){
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUsers(data);
        console.log(data);
    };

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        }, 2000)
    }, []);
        // undefined
        //  return <h1>{users[0]?.name}</h1>
        // same thing
        // return <h1>{users.length > 0 
        //     ? <h1>{ users[0]?.name}</h1> 
        //     : <h1>Loading...</h1>}</h1>;
        // return <h1>{users.length > 0 && users[0].name}</h1>;

    function renderUsers(){
        return user.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
            <User
                id={user.id}
                name={user.name}
                email={user.email}
                username={user.username}
                />
            </Link>
        ))
    }

    function renderSkeletonLoading(){
        return <h1>Loading...</h1>
    }
        
    return(
        <div>
            {user.length ? renderUsers() : renderSkeletonLoading()}
        </div>
    );
}

export default Home;