import React from 'react';

class Profile extends React.Component {

state = {
	user: ''
}


handleChange = (event) => {
	const {value} = event.target
	this.setState({user: value})
}

handleSubmit = (event) => {
	event.preventDefault()

}

render() {
	return(
		<form onSubmit={this.handleSubmit}>
		<label>
			<input type="text" onChange={this.handleChange}></input>
		</label>
		<button >Submit</button>
		</form>
	)
}
	
};

export default Profile;
