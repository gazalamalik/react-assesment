import React, { Component } from "react";
import Home from './Home';
import PostForm from "./PostForm";
//import post from "./post";



const Main1 = props =>{

    const {activetab,tab3} = props;
    console.log(active)
    switch(activetab) {
        case 'tab1':
            return <Home />;
        case 'tab2':
            return <PostForm action={tab3} />;
        case 'tab3':
            return <post />;
        default:
            return null;

    }
}

    export default Main1;





