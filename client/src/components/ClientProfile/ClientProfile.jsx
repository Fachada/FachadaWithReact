import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import PostJob from './components/ClientProfile/PostJob.jsx';
import JobPost from './components/ClientProfile/JobPostList.jsx';

class Client extends React.Component {
  constructor(props){
    super(props);
    this.state={
      user:[],
      jobs:[]
    }
    this.getUser =this.getUser.bind(this);
    this.getPost =this.getPost.bind(this);
    this.addPost=this.addPost.bind(this);
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
  };

  getPost(){
    $.ajax({
      url:'',
      method:'GET',
      success: (results)=>{
        this.setState({jobs:results});
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
    return(<div>
      <PostJob addItem={this.addPost} />
      <JobPost jobs={this.state-jobs}/>
      </div>
    )
  }
}
