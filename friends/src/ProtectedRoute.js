import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest}) =>{
    return(
        <Route {...rest} render={props=>{
            return(
                localStorage.getItem("token")? (
                    <Component {...props} {...rest}/>
                ): (
                    <Redirect to="/"/>
                )
            )
        }}/>
    )
};

export default ProtectedRoute;