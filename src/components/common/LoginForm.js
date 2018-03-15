import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Connect, connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import Spinner from './Spinner';

class LoginForm extends Component {
    
    onEmailChange(text) {
       this.props.emailChanged(text);
    }

    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }


    onButtonPress () {
        const {email , password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderErorr() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor:"white"}}>
                    <Text style={{ color:"red", fontSize:20 }}>{this.props.error}</Text>
                </View>
            )
        }
    }
    
    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    };
    render() {
        return (
            <Card>       
                <CardSection>    
                 <TextInput 
                 label="email"
                 placeholder = "email@gmail.com"
                 onChangeText = {this.onEmailChange.bind(this)}
                 value = {this.props.email}
                  />        
                </CardSection>


                <CardSection>
                    <TextInput
                        label="pwd"
                        placeholder="****"
                        secureTextEntry
                        onChangeText = {this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>

              {this.renderErorr()}

                <CardSection> 
                        {this.renderButton()}
                    </CardSection>

            </Card>   
        );
    }
}

const mapStateToProps = state => {
    return ({
        email: state.auth.email, 
        password: state.auth.password,
        error : state.auth.error,
        loading :state.auth.loading
    });


};

export default connect(mapStateToProps, {
    emailChanged,passwordChanged,loginUser
    }) (LoginForm);



    