import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react'

import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

 const UserCard = ({img, name, price, boton }) => (
 	<>
 		<div className='UserCard'>
 			<Card>
 				<Image src={img} wrapped ui={false} />
 				<Card.Content>
 					<Card.Header>{name}</Card.Header>
 					<Card.Meta>{price}</Card.Meta>
 					<Button>{boton}</Button>
 				</Card.Content>
 			</Card>
			 
			<ItemCount/>

 		</div>

			 
	</>
 );


export default UserCard;