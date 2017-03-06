import React from 'react';
import './Disciplines.css';

class Disiplines extends React.Component {
    render() {
        return (
            <div className='contaireDisciplines'>
                <div className='titreDisciplines'>
                    <h1>Nos Disiplines</h1>
                </div>
                <div className='containerGrid'>
                    <div className='grid'>
                        <div className='titreGrid'>
                            <h2>Titre</h2>
                        </div>
                        <div className='containerGridCircle'>
                            <div className='gridCircle'>
                                <div className='description styleDesPla'>
                                    <p>Description</p>
                                </div>
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
                                  <div className='imageDisipline'>
                                  <img src='../../assets/OM4.jpg'/>
                                </div>
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
