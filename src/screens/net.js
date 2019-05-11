import React, { Component } from 'react';
import { NetInfo } from 'react-native'
import { Body, Title, Container, Header, Text, Toast } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { styleNet } from '../styles/styles';

export default class Net extends Component {

    constructor() {
        super();
        this.state = {
            isConnected: null,
        };
    }

    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({ isConnected }); }
        );
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this._handleConnectivityChange
        );
    }
    _handleConnectivityChange = (isConnected) => {

        this.setState({
            isConnected,
        });

        Toast.show({
            text: this.state.isConnected ? "Conectado a internet" : "No hay conexión a internet",
            position: "bottom",
            duration: 10000,
            type: this.state.isConnected ? "success" : "danger"
        })

    };


    render() {
        return (
            <Container>
                <Grid>
                    <Header rounded style={styleNet.header}>
                        <Body style={styleNet.body}>
                            <Title>Net Info</Title>
                        </Body>
                    </Header>
                    <Row style={styleNet.row}>
                        <Text style={styleNet.text}>{this.state.isConnected ? 'Online' : 'Offline'}</Text>
                    </Row>
                </Grid>
            </Container>
        )
    }
} 