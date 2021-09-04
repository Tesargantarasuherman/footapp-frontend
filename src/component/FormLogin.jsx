import React, { Component } from 'react';
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
class FormLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formLogin: {
                email: "",
                password: "",
            },
        };
    }
    handleSubmitLogin = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:8000/login',this.state.formLogin).then(res=>{
            console.log(res.data);
            // sessionStorage.setItem("token", res.data.token);
            // sessionStorage.setItem("username", res.data.data.name);
            // sessionStorage.setItem("email", res.data.data.email);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }
    handleFormChangeLogin = (event) => {
        let formLoginNew = { ...this.state.formLogin };
        formLoginNew[event.target.name] = event.target.value;
        this.setState({
            formLogin: formLoginNew,
        }, () => console.log(formLoginNew))
    }
    render() {
        return (
            <div>
                <form  onSubmit={this.handleSubmitLogin}>
                    <h3 className="text-white">Login</h3>
                    <div className="form-group">
                        <label className="text-white">Email address</label>
                        <input type="email" className="form-control form-shadow" name="email" value={this.state.formLogin.email} onChange={this.handleFormChangeLogin}  placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label className="text-white">Password</label>
                        <input type="password" className="form-control form-shadow"  value={this.state.formLogin.password}
                            name="password"
                            onChange={this.handleFormChangeLogin} placeholder="Password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-success btn-block mb-4">Login</button>
                </form>
                <GoogleLogin
                clientId="862537460238-0suciho0vh9nr46070lvui80mlei8u9d.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </div>
        );
    }
}

export default FormLogin;
