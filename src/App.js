import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './components/Home';
//import { renderIntoDocument } from 'react-dom/test-utils';
//import post from './components/post';
import Main1 from './components/Main1';
import post from './components/PostForm';




class  App extends Component {

  constructor(props){
    super(props)
    this.state={
      activetab:'tab1'
    }
  }
  tab1(){
    console.log('tab1')
    this.setState({
      activetab:'tab1'
    })
  }

  tab2(){
    console.log('tab2')
    this.setState({
      activetab:'tab2'
    })
  }
  tab2(){
    console.log('tab3')
    this.setState({
      activetab:'tab3'
    })
  }

  render(){
  return (

   <Router>


    <div className="App">
       <nav  className="navbar navbar-expand-lg navbar-inverse bg-warning bg-light">
              <div className="navbar-header">
                <button>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 </button>
              </div>
      
              <div className="navbar-cooapse collapse" id="navbarSupportedContent">
      
                  <ul class="nav nav-tabs mr-auto navbar-fixed-top">
                      <li className="active nav-item"><link to={'/'} className="nav-link" onClick={this.tab1()}>Home</link></li>

                      <li className="active nav-item"><link to={'/'} className="nav-link" >About</link></li>
                      <li className="active nav-item"><link to={'/create'} className="nav-link" onClick={this.tab2()}>Create_Post</link></li>
                      <li className="active nav-item"><link to={'/post'} className="nav-link" onClick={this.tab3()}>Blogs</link></li>
                 </ul>
         
              </div>
        </nav>
   </div><br/><br/>
   <Main1 activetab={this.state.activetab} tab3={()=>this.tab3()}/>

 </Router>

      
  ); 

  

}
}


export default App;
