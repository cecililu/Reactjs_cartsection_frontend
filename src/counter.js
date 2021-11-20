
import React, { Component } from 'react'
export default  class Counter extends Component{

countDisplayHandler=()=>{
 if (this.props.counter.value===0 ){
     return 'Zero'}
else{
      return this.props.counter.value
 }  

 }
handleColor=()=>{
    if (this.props.counter.value===0)
     {
         return "badge bg-warning text-dark";
    }else{
        return "badge bg-success ";
    }}
render(){
  return (
    <div className='row' >
     <div className='col-1 '>
        <span className={this.handleColor()}> {this.countDisplayHandler()}</span> 
     </div>
     
     <div className='col'>
        <button className="btn btn-secondary btn-sm " onClick={()=>this.props.onIncrement(this.props.counter)}> +</button > 
        <button className="btn btn-secondary btn-sm m-2" onClick={()=>this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value===0 ? "disabled" : ""}> - </button > 
        <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(this.props.counter)}>Delete</button >
       </div> 
       
      
      
         
         
    </div>
  );
} 

    
}
