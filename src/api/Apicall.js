import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

//https://www.reddit.com/r/space.json
class Apicall extends Component {


  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    axios.get(`https://www.reddit.com/r/${this.state.subredt}.json`)
    .then(response => {
      const posts = response.data.data.children.map(obj => obj.data);
      this.setState({posts});
    })
    .catch(error => {

    });
  }


  constructor(props){
    super(props);

    this.state = {
      posts: [],
      subredt: 'technology'
    };
    this.getReddit = this.getReddit.bind(this);
  }




  render(){
    return(
      <div>

        <NavBar />

        <div className="main container App">

           <input id="icon_prefix" type="text" placeholder="Enter search Topic" class="validate"/>

           <button class="btn waves-effect waves-light" onClick={this.getReddit} >
             Search
           </button>


          <h1>{`/r/${this.state.subredt}`}</h1>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </div>

        <Footer />

      </div>
      );
    }
  }

  export default Apicall;
