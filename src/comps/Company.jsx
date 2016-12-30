
import React from 'react';

export default class Company extends React.Component{
    onCompanyClick(){
        this.props.onCompClick();
    }
    onCompanyRemove(e){
          this.props.onCompRemove(); 
          e.stopPropagation();
    }
render(){
    return(
        <div className="companyStyle" style={{backgroundColor: this.props.bgc}}
        onClick={this.onCompanyClick.bind(this)}>
          <button className="bn btn-danger pull-right" onClick={this.onCompanyRemove.bind(this)}> Remove </button>
        
 <h4>{this.props.name}</h4>
        </div>
    )
}
}