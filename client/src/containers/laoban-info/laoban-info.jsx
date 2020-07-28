import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import HeaderSelector from '../../components/header-selector/header-selector';

import { updateUser } from '../../redux/actions';

class LaobanInfo extends Component {
	state = {
		header: '',
		post: '',
		info: '',
		company: '',
		salary: '',
	};

	setHeader = (header) => {
		this.setState({
			header,
		});
	};

	handleChange = (name, value) => {
		this.setState({
			[name]: value,
		});
	};

	save = () => {
		this.props.updateUser(this.state);
	};

	render() {
		const { header, type } = this.props.user;
		if (header) {
			const path = type === 'dashen' ? '/dashen' : '/laoban';
			return <Redirect to={path} />;
		}

		return (
			<div>
				<NavBar>Hiring Info</NavBar>
				<HeaderSelector setHeader={this.setHeader} />
				<InputItem
					placeholder="Position"
					onChange={(val) => {
						this.handleChange('post', val);
					}}
				>
					{/* Position: */}
				</InputItem>
				<InputItem
					placeholder="Company Name"
					onChange={(val) => {
						this.handleChange('company', val);
					}}
				>
					{/* Company Name: */}
				</InputItem>
				<InputItem
					placeholder="Salary"
					onChange={(val) => {
						this.handleChange('salary', val);
					}}
				>
					{/* Salary: */}
				</InputItem>
				<TextareaItem
					// title="Requirements"
					placeholder="Requirements"
					rows={3}
					onChange={(val) => {
						this.handleChange('info', val);
					}}
				/>
				<Button type="primary" onClick={this.save}>
					Save
				</Button>
			</div>
		);
	}
}

export default connect((state) => ({ user: state.user }), { updateUser })(
	LaobanInfo
);
