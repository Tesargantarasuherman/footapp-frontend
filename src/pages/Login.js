import React, { Component } from 'react';
import FormLogin from '../component/FormLogin';
import FormRegister from '../component/FormRegister';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formActive:false
        };
    }


    activeRegister = () => {
        this.setState({
            formActive: true,
        })
    }
    activeLogin = () => {
        this.setState({
            formActive: false,
        })
    }
    render() {
        return (
            <div class="container top-center">
                <div class="h-80 bg-green br-20">
                    <div class="row no-gutters">
                        <div class="col-sm mobile-hide" >
                            <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="img-fluid bl-20" alt="Responsive image" />
                        </div>
                        <div class="col-sm">
                            <div class="my-4  d-flex align-items-center justify-content-center">
                                <button type="submit" className="btn-outline-green mr-2" onClick={this.activeLogin}>Login</button>
                                <button type="submit" className="btn-outline-green" onClick={this.activeRegister}>Register</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                {/* Form */}
                                {
                                    this.state.formActive ? (

                                        <FormRegister />
                                    ) : (
                                        <>

                                            <FormLogin />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
