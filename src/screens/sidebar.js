import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Left,
    Right
} from 'native-base';

const datas = [
    {
        name: "Conexión",
        route: "Net",
        icon: "wifi"
    },
    {
        name: "Camara",
        route: "Camera",
        icon: "camera"
    },
    {
        name: "Grabar",
        route: "Recording",
        icon: "microphone"
    },
    {
        name: "Modificar Brillo",
        route: "Brush",
        icon: "brush"
    },
];

export default class SideBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Content
                    bounces={false}
                    style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem
                                button
                                noBorder
                                onPress={() =>
                                    this.props.navigation.navigate(data.route)
                                }
                            >
                                <Left>
                                    <Icon
                                        active
                                        name={data.icon}
                                        style={{ color: "#777", fontSize: 26, width: 30 }}
                                    />
                                    <Text >
                                        {data.name}
                                    </Text>
                                </Left>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}