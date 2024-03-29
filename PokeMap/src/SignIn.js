import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Label, Input, Item, Form, Button } from 'native-base';

var myBackground = require('../assets/LandingPage.png');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
    }
    LogIn = () => {
        var email = this.state.email;
        var password = this.state.password;

        this.props.signIn(email, password);
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={myBackground} style={styles.backgroundImage} >
                    <View style={styles.InputStyle}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    autoCorrect={false}
                                    onChangeText={(password) => this.setState({ password })}
                                    secureTextEntry
                                />
                            </Item>
                        </Form>
                        <View style={{ marginTop: 10 }}>
                            <Button
                                primary
                                block
                                onPress={this.logIn}
                            >
                                <Text style={{ color: 'white', fontSize: 17 }}>Sign In/Sign Up</Text>
                            </Button>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: width,
        height: height,
    },
    InputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 5,
    },

}

export default SignIn;