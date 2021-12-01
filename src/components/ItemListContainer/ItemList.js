import React, {useEffect, useState} from 'react';
import './ItemList.css';
import Item from '../ItemListContainer/Item';
//su card container
const ItemList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
    
        setTimeout(() => {
            console.log("Aparece luego de 2 segundos");
        //api de FETCH
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then ((json) => setUsers(json));
    }, 2000);
    },  []);


    //el array vacío es para que el useEffect se ejecute una vez luego del primer renderizado unicamente.
    //[variable]... sino, luego la variable
    return (
        <div className="ItemList">

            <h1>Users</h1>

            <div className="Item">
                {users.map((user) => {
                    return <Item data={user} key={user.id}/>;
                })}
            </div>

        </div>
    );
};
export default ItemList;