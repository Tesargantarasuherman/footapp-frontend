import React, { Component, useState } from 'react';
import axios from 'axios'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const FormLogin = () => {
    const [formlogin, setFormLogin] = useState({ email: '', password: '' });

    const handleChangeFormLogin =(e)=>{
        setFormLogin({
            ...formlogin,
            [e.target.name]:e.target.value
        })
    }
     const handleSubmitLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/login', this.state.formLogin).then(res => {
            console.log(res.data);
            localStorage.setItem("id", res.data.data.user.provider_id);
            localStorage.setItem("token", res.data.data.api_token);
            localStorage.setItem("username", res.data.data.user.name);
            localStorage.setItem("email", res.data.data.user.email);
        }
        )
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <h3 className="text-white">Login</h3>
                <div className="form-group">
                    <label className="text-white">Email address</label>
                    <input type="email" className="form-control form-shadow" name="email" value={formlogin.email} onChange={handleChangeFormLogin} placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label className="text-white">Password</label>
                    <input type="password" className="form-control form-shadow" value={formlogin.password}
                        name="password"
                        onChange={handleChangeFormLogin} placeholder="Password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success btn-block mb-4">Login</button>
            </form>
        </div>
    );
}
export default FormLogin

// class FormLogin extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             formLogin: {
//                 email: "",
//                 password: "",
//             },
//         };
//     }
//     handleSubmitLogin = (e) => {
//         e.preventDefault()

//         axios.post('http://localhost:8000/login', this.state.formLogin).then(res => {
//             console.log(res.data);
//             localStorage.setItem("id", res.data.data.user.provider_id);
//             localStorage.setItem("token", res.data.data.api_token);
//             localStorage.setItem("username", res.data.data.user.name);
//             localStorage.setItem("email", res.data.data.user.email);
//         }
//         )
//             .catch(error => {
//                 console.log(error)
//             })
//     }
//     handleFormChangeLogin = (event) => {
//         let formLoginNew = { ...this.state.formLogin };
//         formLoginNew[event.target.name] = event.target.value;
//         this.setState({
//             formLogin: formLoginNew,
//         }, () => console.log(formLoginNew))
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmitLogin}>
//                     <h3 className="text-white">Login</h3>
//                     <div className="form-group">
//                         <label className="text-white">Email address</label>
//                         <input type="email" className="form-control form-shadow" name="email" value={this.state.formLogin.email} onChange={this.handleFormChangeLogin} placeholder="Enter email" />
//                     </div>
//                     <div className="form-group">
//                         <label className="text-white">Password</label>
//                         <input type="password" className="form-control form-shadow" value={this.state.formLogin.password}
//                             name="password"
//                             onChange={this.handleFormChangeLogin} placeholder="Password" placeholder="Password" />
//                     </div>
//                     <button type="submit" className="btn btn-success btn-block mb-4">Login</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default FormLogin;
