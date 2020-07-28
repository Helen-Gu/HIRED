import React, { Component } from 'react';
import {
	NavBar,
	WingBlank,
	List,
	InputItem,
	WhiteSpace,
	Radio,
	Button,
} from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../../redux/actions';
import Logo from '../../components/logo/logo';

const ListItem = List.Item;

class Register extends Component {
	state = {
		username: '',
		password: '',
		password2: '',
		type: 'laoban',
	};

	register = () => {
		this.props.register(this.state);
	};

	handleChange = (name, val) => {
		this.setState({
			[name]: val,
		});
	};

	toLogin = () => {
		this.props.history.replace('/login');
	};

	render() {
		const { type } = this.state;
		const { msg, redirectTo } = this.props.user;

		if (redirectTo) {
			return <Redirect to={redirectTo} />;
		}

		return (
			<div>
				<NavBar>
					<h3>H&nbsp;I&nbsp;R&nbsp;E&nbsp;D</h3>
				</NavBar>
				<Logo />
				<WingBlank>
					<List>
						{msg ? <div className="error-msg">{msg}</div> : null}
						<WhiteSpace />
						<InputItem
							placeholder="Username"
							onChange={(val) => {
								this.handleChange('username', val);
							}}
						>
							{/* Username: */}
						</InputItem>
						<WhiteSpace />
						<InputItem
							placeholder="Password"
							type="password"
							onChange={(val) => {
								this.handleChange('password', val);
							}}
						>
							{/* Password: */}
						</InputItem>
						<WhiteSpace />
						<InputItem
							placeholder="Confirm password"
							type="password"
							onChange={(val) => {
								this.handleChange('password2', val);
							}}
						>
							{/* Confirm Password: */}
						</InputItem>
						<WhiteSpace />
						<ListItem>
							{/* <span>Are you a:</span>
							&nbsp;&nbsp;&nbsp; */}
							<Radio
								checked={type === 'dashen'}
								onChange={() =>
									this.handleChange('type', 'dashen')
								}
							>
								Talent
							</Radio>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<Radio
								checked={type === 'laoban'}
								onClick={() =>
									this.handleChange('type', 'laoban')
								}
							>
								Employer
							</Radio>
						</ListItem>
						<WhiteSpace />
						<Button type="primary" onClick={this.register}>
							Register
						</Button>
						<WhiteSpace />
						<Button onClick={this.toLogin}>Sign In</Button>
					</List>
				</WingBlank>
			</div>
		);
	}
}

export default connect((state) => ({ user: state.user }), { register })(
	Register
);
