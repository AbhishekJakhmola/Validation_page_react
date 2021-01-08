import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useHistory } from 'react-router';

function App(props) {
	const [ fname, setFname ] = useState('');
	const [ lname, setLname ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ mobno, setMobno ] = useState('');
	const [ password, setPW ] = useState('');
	const [ cpassword, setCPW ] = useState('');
	const [ agree, setAgree ] = useState('');
	const history = useHistory();
	const validEmailRegex = RegExp(
		/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	);
	const nameRegex = RegExp(/^[A-Za-z]+/);
	const phnoRegex = RegExp(/^[0-9\b]+$/);

	const submit = () => {
		if (!nameRegex.test(fname)) alert('Not a valid First Name .');
		else if (!nameRegex.test(lname)) alert('Not a valid Last Name .');
		else if (!validEmailRegex.test(email)) alert('Not a valid Email ID .');
		else if (!phnoRegex.test(mobno)) alert('Not a valid mobile number .');
		else if (!password.length >= 8) alert('Not a valid password. Must have more than 8 characters.');
		else if (cpassword !== password)
			alert('Password confirmation failed. Password in both the fields should match.');
		else if (!agree) alert('You must agree to continue.');
		else {
			history.push({ pathname: '/display', state: { fname, lname, mobno, email } });
		}
	};

	return (
		<div className="App">
			<h>Sign Up Here</h>
			<br />
			First Name:<input
				type="string"
				onChange={(event) => {
					setFname(event.target.value);
				}}
				value={fname}
			/>
			<br />
			Last Name:<input
				type="string"
				onChange={(event) => {
					setLname(event.target.value);
				}}
				value={lname}
			/>
			<br />
			Email ID:<input
				type="string"
				onChange={(event) => {
					setEmail(event.target.value);
				}}
				value={email}
			/>
			<br />
			Mobile No:<input
				type="string"
				onChange={(event) => {
					setMobno(event.target.value);
				}}
				value={mobno}
			/>
			<br />
			Password:<input
				type="password"
				onChange={(event) => {
					setPW(event.target.value);
				}}
				value={password}
			/>
			<br />
			Confirm Password:<input
				type="password"
				onChange={(event) => {
					setCPW(event.target.value);
				}}
				value={cpassword}
			/>
			<br />
			<input
				type="checkbox"
				onChange={(event) => {
					setAgree(event.target.checked);
				}}
				value={agree}
			/>
			<label> I agree that the given information is correct.</label>
			<br />
			<button onClick={submit}>Submit</button>
		</div>
	);
}

export default App;
