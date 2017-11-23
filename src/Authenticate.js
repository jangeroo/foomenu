import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQdz43eKelWkLjx43SknFK3V3lZH_sHfk",
    authDomain: "foomenu-eb8b9.firebaseapp.com",
    databaseURL: "https://foomenu-eb8b9.firebaseio.com",
    projectId: "foomenu-eb8b9",
    storageBucket: "foomenu-eb8b9.appspot.com",
    messagingSenderId: "775939329581"
};
  
firebase.initializeApp(config);

class Authenticate extends Component {

    _handleLogin = async event => {
        var provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider).then(user => {
            console.log(this.props)
           this.props.setUserID({ userID: user.additionalUserInfo.profile.id, username:user.additionalUserInfo.profile.name });
           
        })
        if (this.props.userID)  this.props.routeProps.history.push('/myAccount');
    }

    render() {
    
        return (
            <div className="authenticationContainer authenticationForm">
                <button className='btnLogin' onClick={this._handleLogin}>SIGN IN WITH GOOGLE</button>
            </div>);
    }

}

export default Authenticate;