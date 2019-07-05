import React, { Component } from 'react';

class CSales extends Component {
    sumP(price){
        this.setState({total : this.state.total + price});
       
    }
    constructor(props) {
        super(props); 
    
        this.state = {
             total: 0,
        };
        this.sumP=this.sumP.bind(this);
    }
    
    render() {
        var courses = this.props.items.map((item,i) => {
            return <Course name={item.name} price={item.price}
            key={i} sumP={this.sumP} active={item.active}/>
        });
      return (
        <div>
        <h1>I am from sales domain</h1>
        <div id="courses">
        {courses}
        <p id="total">total <b>{this.state.total}</b></p></div>
        </div>
      );
    }
  }

  class Course extends Component {
        clicker(){
            var active = !this.state.active;
            console.log(active,'1')
            this.setState({active:active});
            console.log(this.state.active,'2')
            this.props.sumP(active ? this.props.price : -this.props.price);
        }
      
      constructor(props) {
          super(props);
      
          this.state = {
               active: false
          };
          this.clicker = this.clicker.bind(this);
      }
      
    render() {
    console.log(this.state.active,'3')
      return (
        <div>
        <p  onClick={this.clicker}>{this.props.name}<b>{this.props.price}</b></p>

        </div>
      );
    }
  }
  

  export default CSales;