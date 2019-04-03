import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

//https://www.reddit.com/r/space.json
class Apicall extends Component {


  componentWillMount(){
    //this.getReddit();
  }

  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subredt}.json`)
    .then(response => {
      const posts = response.data.data.children.map(obj => obj.data);
      this.setState({posts});
    })
    .catch(error => {
      console.log(error);
    });
  }


  constructor(props){
    super(props);

    this.state = {
      value: '',
      posts: [],
      subredt: 'technology'
    };
    this.getReddit = this.getReddit.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // gets the user search topic
    this.setState({value: event.target.value});
  }

  getSearchResult() {
    if (this.state.value === '') {
      // here we have no entered search topic
      alert('Error, Please enter a search topic. ');

    } else {
      //alert('Entered search topic: ' + this.state.value.toLowerCase());
      //var topic = this.state.value.toLowerCase();
      axios.get(`https://www.reddit.com/r/${this.state.value.toLowerCase()}.json`)
      .then(response => {
        const posts = response.data.data.children.map(obj => obj.data);
        this.setState({posts});
      })
      .catch(error => {
        console.log(error);
      });
    }

  }




  render(){
    return(
      <div>

        <NavBar />

        <div className="main container App">

           <input id="icon_prefix" type="text" placeholder="Enter search Topic" class="validate" value={this.state.value} onChange={this.handleChange}/>

           <button class="btn waves-effect waves-light" onClick={this.getSearchResult} >
             Search
           </button>


          <h1>{`/r/${this.state.value.toLowerCase()}`}</h1>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </div>

        <div style={{height: '300px'}}>></div>

        <Footer />

      </div>
      );
    }
  }

  export default Apicall;
