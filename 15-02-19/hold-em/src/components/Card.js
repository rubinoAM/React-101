import React from 'react';

function Card(props){ //Shows a card
	const theCard = `/cards/${props.card}.png`;
	return(
		<div className="col-sm-2">
			<img src={theCard} class="card" alt=''/>
		</div>
	);
}

export default Card;