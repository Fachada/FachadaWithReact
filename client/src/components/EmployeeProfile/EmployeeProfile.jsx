import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Client extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:[],
    }
    this.getUser =this.getUser.bind(this);
    }

  getUser(){
    $.ajax({
      url: '',
      method: 'GET',
      success: (results)=>{
        this.setState({user:results})
      },
      error: (xhr, error)=>{
        console.log('ajax request error');
      }
    })
  };


  componentDidMount(){
    this.getUser();
  }

  render(){
    return(<div>
      </div>
    )
  }
}
