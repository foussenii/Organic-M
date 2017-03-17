import React from 'react';
const styles = {
  paddingRight: '10px',
  paddingTop: '10px',
}
class Button extends React.Component{
    constructor(props){
        super(props);
        this.initClick=this.initClick.bind(this);
    }
        initClick(){
            this.props.openModal(this.props.bool);
        }
    render(){
        return(
            <div onClick={this.initClick} style={styles}>
              {this.props.description}

            </div>
        );
    }
}
export default Button;
