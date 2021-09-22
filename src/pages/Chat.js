import axios from 'axios';
import React, { Component } from 'react';
import Skeleton from '../component/Skeleton';
import SkeletonTurnamen from '../component/SkeletonTurnamen';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataChatSaya: [],
            isiChatSaya: []
        }
    }
    chatSaya() {
        let id = localStorage.getItem('id')
        axios.get(`http://localhost:8000/chatsaya/${id}`, {}).then(res => {
            setTimeout(() => { this.setState({ dataChatSaya: res.data.data }, () => console.log('val', this.state.dataChatSaya)) }, 5000)

        })
    }
    componentDidMount() {
        this.chatSaya();
    }
    lihatChat = (id_chat) => {
        // http://localhost:8000/chat/10581453821094379520/1094379520
        let id = localStorage.getItem('id')
        axios.get(`http://localhost:8000/chat/${id_chat}/${id}`, {}).then(res => {
            setTimeout(() => { this.setState({ isiChatSaya: res.data.data.chat }, () => console.log('val', this.state.isiChatSaya)) }, 5000)

        })
    }
    render() {
        return (
            <div className="container mt-4">
                <div className="body height-90  d-flex justify-content-between ">
                    <div className="w-25 bg-success br-10 ">
                        {this.state.dataChatSaya.map(data => {
                            return (
                                <div className='d-flex justify-content-center text-light mx-2  mt-5'>
                                    <button onClick={() => this.lihatChat(data.id_chat)}> {data.id_chat} </button>
                                </div>
                            )
                        })}

                    </div>
                    <div className="w-75 bg-success br-20 ml-4">
                        <div className="mx-4">
                            {
                                this.state.isiChatSaya.map(isi => {
                                    return (
                                        isi.aktif == true ?
                                            (
                                                <div className="container-chat">
                                                    <img src="https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" alt="Avatar" />
                                                    <p>{isi.isi_chat}</p>
                                                    <span className="time-right">11:00</span>
                                                </div>
                                            ) :
                                            (
                                                <div className="container-chat darker">
                                                    <img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Avatar" className="right" />
                                                    <p>{isi.isi_chat}</p>
                                                    <span className="time-left">11:05</span>
                                                </div>
                                            )
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;
