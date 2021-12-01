import React, {useEffect, useState} from 'react';
import Loaderr from '../Loader/Loader';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		setTimeout (() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
        .then ((res) => setData(res.data));
		}, 2000);
    },  []);

    return (
        <div className="ItemList">
            <h1>Item Detail</h1>
			<ItemDetail data={data} />
            {isLoading ? <Loaderr /> : <ItemDetail data={data} />}
        </div>
    );
};
export default ItemDetailContainer;