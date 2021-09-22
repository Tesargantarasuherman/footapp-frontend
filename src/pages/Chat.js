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
                        {
                            this.state.isiChatSaya.map(isi => {
                                return(
                                    isi.aktif == true ?
                                    (
                                        <div className="text-danger">
                                            {isi.isi_chat}
                                        </div>
                                    ) :
                                    (
                                        <div>
                                            {isi.isi_chat}
                                        </div>
                                    )
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        )
    }
}

export default Chat;
