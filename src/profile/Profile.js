import React from 'react'
import PropTypes from 'prop-types';
import { defaultProps } from 'default-props'
const Profile = (props) => {
   
    return (
        
       <div className= "App-header">
           <h1>Welcome </h1>
           {/* <img src={props.photo} alt='BillGates' height= {500} width={500}  ></img> */}
           <h2>This is the profile of {props.fullName}</h2>
           <div className='photo'>{props.photo}</div>
           <h3> He is a {props.profession}</h3>
           <p> Biographie: {props.bio}</p>
           {props.alertMe()}
       </div> 
            
        
     )
 };
 Profile.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    // photo: PropTypes.photo,
 };

//  Use PropsType to check props.  
 Profile.defaultProps = {
    fullName :"Mahdi", 
    bio :"krughMOIZHRGJEBEHRGPOQMJNJBKVQBFNNBQDKJBVQLDFBQJDJDFN",
    profession :"developpeur",

 };
 
 export default Profile
