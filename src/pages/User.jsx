import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users(){
    const { id } = useParams()
    const [user, setUsers] = useState({});

    async function fetchUsers(){
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${ id }`);

        setUsers(data);
        console.log(data);
    };
    
    useEffect(() => {
        fetchUsers()
    }, [])
        
    return(
        <div>
            <Link to="/">
                Go Back
            </Link>
            <div>{ user.id }</div>
            <div>{ user.name }</div>
            <div>{ user.email }</div>
            <div>{ user.username }</div>
        </div>
)}

export default Users