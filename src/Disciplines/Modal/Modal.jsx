import React from 'react';
import './Modal.css';
import Button from './Button/Button.jsx';
class Modal extends React.Component {
    render() {
        return (
            <div>
                <div className="modal">
                    <div className="overlay">
                        <div className='close'>
                            <Button openModal={this.props.openModal} bool={false} description='X'/>
                        </div>
                        <div className='titre'>{this.props.titre}</div>
                        <div className='containerDes'>
                            <div className='descriptionC'>
                                <p>
                                    {this.props.descriptionC}
                                </p>
                            </div>
                            <div className='sousCategorieC'>
                                <p>{this.props.sousCategorieC}</p>
                                <div className='sousCategorie'>
                                    {this.props.sousCategorie}
                                    <p className='descriptionSousC'>{this.props.descriptionSousC}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;
