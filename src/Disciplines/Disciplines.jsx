import React from 'react';
import img from '../../public/img/qiqong.jpg';
import Modal from './Modal/Modal.jsx';
import Button from './Modal/Button/Button.jsx';
import Disciplines1 from './Discipline1/Discipline1.jsx';

import './Disciplines.css';

class Disiplines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal(bool) {
        this.setState({modal: bool});
    }

    render() {
        return (
            <div className='contaireDisciplines'>
                <div className='titreDisciplines'>
                    <h1>Nos Disiplines</h1>
                </div>
                <div className='containerGrid'>
                    <div className='grid'>
                        <div className='titreGrid'>
                            <h2>Qi Qong</h2>
                        </div>
                        <div className='containerGridCircle'>
                            <div className='gridCircle'>
                                <div className='description styleDesPla'>
                                    {this.state.modal && <Disciplines1 titre='QI GONG' openModal={this.openModal}/>}
                                    <Button description='Description' openModal={this.openModal} bool={true} />
                                </div>
                                <img src={img}/>
                                <div className='planing styleDesPla'>
                                    <p>Planing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='titreGrid'>
                            <h2>Titre</h2>
                        </div>
                        <div className='containerGridCircle'>
                            <div className='gridCircle'>
                                <div className='description styleDesPla'>
                                    <p>Description</p>
                                </div>
                                <img src={img}/>
                                <div className='planing styleDesPla'>
                                    <p>Planing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='titreGrid'>
                            <h2>Titre</h2>
                        </div>
                        <div className='containerGridCircle'>
                            <div className='gridCircle'>
                                <div className='description styleDesPla'>
                                    <div className='imageDisipline'></div>
                                </div>
                                <div className='contPlaDes'>
                                    <div className='planingConte'>Planing</div>
                                    <div className='descriptionConte'>Description</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Disiplines;
