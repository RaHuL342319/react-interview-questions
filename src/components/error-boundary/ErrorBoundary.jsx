/* eslint-disable no-unused-vars */
import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error){
        return({hasError: true})
    }

    componentDidCatch(error, info){
        console.log("Error caught:", error);
        console.log("Error info:", info);
    }

    render(){
        if(this.state.hasError){
            return(<p>Something went wrong!!!</p>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary;