import React, { Component } from 'react';
import axios from 'axios'

class FormRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formRegister: {
                name: "",
                email: "",
                password: "",
            },
        };
    }
    handleSubmitRegister = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:8000/register',this.state.formRegister).then(res=>{
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
    handleFormChangeRegister = (event) => {
        let formRegisterNew = { ...this.state.formRegister };
        formRegisterNew[event.target.name] = event.target.value;
        this.setState({
            formRegister: formRegisterNew,
        }, () => console.log(formRegisterNew))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitRegister}>
                    <h3>Register</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nama</label>
                        <input type="text" name="name" className="form-control" value={this.state.formRegister.name} onChange={this.handleFormChangeRegister} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" value={this.state.formRegister.email} onChange={this.handleFormChangeRegister} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" value={this.state.formRegister.password} onChange={this.handleFormChangeRegister} placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-success btn-block mb-4">Register</button>
                </form>
            </div>
        );
    }
}

export default FormRegister;
