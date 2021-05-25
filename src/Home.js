import React, { Component } from "react";



class Home extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (

    
  
    <div class="container"> 
   

    
 
   <nav >
     <div>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
       <span className="icon-bar"></span>
      
       <div className="navbar-cooapse collapse" id="navbarSupportedContent">
      
         <ul class="nav nav-tabs mr-auto navbar-fixed-top">
            <li className="active nav-item"><link to={'/'} className="nav-link" onClick={this.tab1()}>Home</link></li>

            <li className="active nav-item"><link to={'/'} className="nav-link" >About</link></li>
            <li className="active nav-item"><link to={'/create'} className="nav-link" onClick={this.tab2()}>Create_Post</link></li>
            <li className="active nav-item"><link to={'/post'} className="nav-link" onClick={this.tab3()}>Blogs</link></li>
                

           
         </ul>
         
       </div>
       </div>
    
   </nav>
   </div>

      
  );
  }
}

export default Home;