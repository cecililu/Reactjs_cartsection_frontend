import React, { Component } from 'react'
import NavBar from './navbar';
import Counters from './counters'
class App extends Component{
    constructor(props){
        super()
        this.state={
            counters:[  {id:1,value:0},
                        {id:2,value:0},
                        {id:3,value:0},
                        {id:4,value:0}
        ]

        }}
handleIncrement=(counter)=>{
    const copy_counters =[...this.state.counters];
    const index=copy_counters.indexOf(counter)
    copy_counters[index]={...counter};
     copy_counters[index].value ++;
    this.setState({counters:copy_counters})
    
    };
handleDecrement=(counter)=>{
        const copy_counters =[...this.state.counters];
        const index=copy_counters.indexOf(counter)
        copy_counters[index]={...counter};
         copy_counters[index].value --;
        this.setState({counters:copy_counters})
        
        };    

handleDelete=(counter)=>{
      const counters=this.state.counters.filter(c=>(c.id)!==counter.id)
      this.setState({counters})
    }
 handleReset=()=>{
        const counters=this.state.counters.map(c=>{
            c.value= 0;
            return c;

        });
        this.setState({ counters })
        console.log(this.state.counters)
    }

render(){
    return (
    <div className="">
    <div className=''>
    <NavBar value={this.state.counters.filter(c=>c.value>0).length}/>
    </div>
    <Counters 
    onReset={this.handleReset} 
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    counters={this.state.counters}/>
    </div>  
   
    );
}
}
export default App;