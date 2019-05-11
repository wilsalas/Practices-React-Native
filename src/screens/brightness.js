import React, { Component } from 'react';
import {
    Container, Content, Text, Button
} from 'native-base';
import { Slider } from 'react-native';
import { Brightness, Permissions } from 'expo';

export default class Recording extends Component {

    constructor(){
        super();
        this.state = {
            brightness: 0
        }
    }

    async componentDidMount() {
        await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS);
    }

    ChangeBrightness = async value => {
        console.warn("Hola");

        const { status } = await Permissions.getAsync(Permissions.SYSTEM_BRIGHTNESS);
        if (status === "granted") {
            Brightness.setBrightnessAsync(value)
        }
    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text >Hola mundo brightness </Text>
                    <Slider
                     style={{width:300}}   
                    step={1}
                    minimumValue={0}
                    maximumValue={100}
                    value={this.state.brightness}
                    onValueChange={val => this.setState({brightness:val})}
                    onSlidingComplete={val => console.warn(val)}
                    />
                </Content>
            </Container>
        );
    }
}