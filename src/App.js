import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyVerticallyCenteredModal from './components/LoginModal'


class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			whoami: ''
		};
	}

	setModalShow(value, whoami) {
		// this.props.abcd = whoami;
		this.setState({
			modalShow: value,
			whoami: whoami
		})
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div>
						<button onClick={() => this.setModalShow(true, "Vendor")} className="spnd-btn" who="Vendor">Vendor</button>
						<button onClick={() => this.setModalShow(true, "Client")} className="spnd-btn" who="Client">Client</button>
					</div>

					{/* login form modal */}
					<MyVerticallyCenteredModal
						show={this.state.modalShow}
						onHide={() => this.setModalShow(false)}
						whoami={this.state.whoami}
					/>
					{/* login form modal */}
				</header>
			</div>
		);
	}
}

export default App;
