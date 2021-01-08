import React, { useState } from 'react';
import { useHistory } from 'react-router';
function Display(props) {
	const history = useHistory();
	const [ data, setData ] = useState(history.location.state);
	return (
		<div>
			<h>Your Details</h>
			<br />
			First Name:{data.fname}
			<label />
			<br />
			Last Name:{data.lname}
			<label />
			<br />
			Email ID:{data.email}
			<label />
			<br />
			Mobile No:{data.mobno}
			<label />
			<br />
		</div>
	);
}

export default Display;
