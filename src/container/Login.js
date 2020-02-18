import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import { onSignIn } from '../Auth';
import { login } from '../action/index'

class Login extends Component {

  state = {
    email: '',
    pin: '',
  }

  handleSignIn = () => {
    this.props.dispatch(login(this.state.email, this.state.pin));
    onSignIn(this.state.email, this.state.pin)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/logo-project.png')}
          />
          <Text style={styles.textLogo}>M-Banking DBBS 3</Text>
        </View>
        <View style={styles.viewInput}>
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email: email })}
            placeholder="Email"
            style={styles.textInput}
            underlineColorAndroid='rgba(0,0,0,0)'
          ></TextInput>
          <TextInput
            value={this.state.pin}
            onChangeText={(pin) => this.setState({ pin: pin })}
            placeholder="PIN"
            style={styles.textInput}
            secureTextEntry={true}
          >
          </TextInput>
          <TouchableOpacity
            onPress={
              () => this.handleSignIn()
            }
            style={styles.buttonLogin}
          >
            <Text style={styles.textLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSignUp}>
          <Text style={styles.textSignUpLabel}>Don't have an account yet? </Text>
          <TouchableOpacity
            onPress={
              () => this.props.navigation.navigate('Register')
            }
          >
            <Text style={styles.textSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    fontWeight: '500',
  },
  viewLogo: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  viewInput: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  viewSignUp: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',
  },
  textInput: {
    width: 300,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 16,
  },
  imageLogo: {
    width: 130,
    height: 130,
  },
  textLogo: {
    marginVertical: 10,
    fontSize: 20,
  },
  textLogin: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ffffff',
  },
  textSignUpLabel: {
    fontSize: 16,
  },
  textSignUp: {
    fontSize: 16,
    color: 'rgb(0,0,255)',
  },
  buttonLogin: {
    borderRadius: 10,
    backgroundColor: '#1c313a',
    width: 300,
    paddingVertical: 15,
    marginVertical: 10,
  }
});

const mapStateToProps = state => ({
  state: state.login
})

export default connect(mapStateToProps)(Login)