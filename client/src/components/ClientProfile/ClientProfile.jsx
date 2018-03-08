import React from 'react';
import ReactDOM from 'react-dom';

class Client extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:[],
      job:[]
    }
    this.getUser =this.getUser.bind(this);
    this.getPost =this.getPost.bind(this);
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

  addPost(jobName, jobDescription, jobImage){
    $.ajax({
      url: '',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        jobName: jobName,
        jobDescription: jobDescription,
        jobImage: jobImage
      })
    }).done(() =>{
      this.getPost();
    });
  }

  getPost(){
    $.ajax({
      url:'',
      method:'GET',
      success: (results)=>{
        this.setState({job:results});
      },
      error:(xhr, error)=>{
        console.log('getPost ajax request error');
      }
    })
  };

  componentDidMount(){
    this.getUser();
    this.getPost();
  }

  render(){
    return(

    )
  }
}
