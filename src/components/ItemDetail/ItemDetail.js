import React from 'react'
import { Card } from 'semantic-ui-react'

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const ItemDetail = ({data}) => {

	return (
        <div className="ItemList">
			<Card>
			{/* <Image src={data.m} wrapped ui={false} /> */}
			<Card.Content>
			<Card.Header>{data.id}</Card.Header>
			<Card.Header>{data.title}</Card.Header>
			{/* <Card.Meta>
				<span className='date'>{data.userId}</span>
			</Card.Meta> */}
			<Card.Description>{data.body}</Card.Description>
			</Card.Content>
			</Card>
        </div>
    );

};

export default ItemDetail;