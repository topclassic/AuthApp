//import liraries
import React, { Component } from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner} from './common'
import firebase from 'firebase'
// create a component
class LoginForm extends Component {

    state = {email:'', password:'',error:'', loading:false}

    onButtonPress(){
        const {email, password} = this.state
        this.setState({error:'',loading:true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })

    }
    onLoginFail(){
        this.setState({error:'Authentication Failed.', loading:false})
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        })
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }
   
    render() {
        return (
           <Card>
               <CardSection>
                   <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
               </CardSection>        
               <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
               </CardSection>
               <Text style={styles.errorStyle}>
                    {this.state.error}
               </Text>
               <CardSection>
                   {this.renderButton()}
               </CardSection>

           </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorStyle:{
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    },

});

//make this component available to the app
export default LoginForm;
