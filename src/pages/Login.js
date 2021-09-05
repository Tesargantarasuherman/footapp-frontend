import React, { Component } from 'react';
import FormLogin from '../component/FormLogin';
import FormRegister from '../component/FormRegister';
import axios from 'axios'
import { GoogleLogin, GoogleLogout } from 'react-google-login';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formActive: false,
            formRegister: {
                name: "",
                email: "",
                password: "",
                api_token: "",
                provider: "",
                provider_id: "",
            },
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

    componentDidMount() {
        let token = localStorage.getItem("token");
        console.log(token)
    }

    responseGoogle = (response) => {
        this.setState({
            formRegister: {
                email: response.profileObj.email,
                name: response.profileObj.name,
                provider_id: response.profileObj.googleId,
                provider: response.tokenObj.idpId,
                api_token: response.tokenObj.access_token
            },
        }, () => {
            localStorage.setItem("id", response.profileObj.googleId);
            localStorage.setItem("token", response.tokenObj.access_token);
            localStorage.setItem("username", response.profileObj.name);
            localStorage.setItem("email", response.profileObj.email);
        })
        axios.post('http://localhost:8000/register', this.state.formRegister).then(res => {
            console.log(res.data);

        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div class="container top-center">
                <div class="h-80 bg-green br-20">
                    <div class="row no-gutters">
                        <div class="col-sm mobile-hide" >
                            <div className="futsal">
                                Ayo Futsalin,<br />
                                Kuy
                            </div>
                            <img src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" className="img-fluid bl-20" alt="Responsive image" />
                        </div>
                        <div class="col-sm">
                            <div class="my-4  d-flex align-items-center justify-content-center">
                                <button type="submit" className="btn-outline-green mr-2" onClick={this.activeLogin}>Login</button>
                                <button type="submit" className="btn-outline-green" onClick={this.activeRegister}>Register</button>

                            </div>
                            <div className="d-flex justify-content-center ">
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
                            <div className="d-flex align-items-center justify-content-center">
                                <GoogleLogin
                                    clientId="862537460238-0suciho0vh9nr46070lvui80mlei8u9d.apps.googleusercontent.com"
                                    buttonText="Masuk Dengan Google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
