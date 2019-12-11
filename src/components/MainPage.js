import React from 'react'
import MyVerticallyCenteredModal from './LoginModal'

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            whoami: ''
        };
    }

    setModalShow = (value, whoami) =>{
        this.setState({
            modalShow: value,
            whoami: whoami
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <button onClick={() => this.setModalShow(true, "Vendor")} className="spnd-btn" who="Vendor">Vendor</button>
                    <button onClick={() => this.setModalShow(true, "Client")} className="spnd-btn" who="Client">Client</button>
                </div>
                <MyVerticallyCenteredModal
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    whoami={this.state.whoami}
                />
            </React.Fragment>
        )
    }
}