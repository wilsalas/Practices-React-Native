import React from 'react';
import { Root } from 'native-base';
import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Net from '../screens/net';
import Recording from '../screens/recording';
import Brightness from '../screens/brightness';
import SideBar from "../screens/sidebar";


/* Definir los screens que serán visibles al presionar clic sobre los botones
del sidebar */
const Drawer = createDrawerNavigator(
    {
        Net: {
            screen: Net,
        },
        Recording: {
            screen: Recording,
        },
        Brightness: {
            screen: Brightness
        }
    }, {
        initialRouteName: 'Net',
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <SideBar  {...props} />
    }
);

/* Definir los screens generales del app */
const AppNavigator = createStackNavigator(
    {
        Drawer: { screen: Drawer },
        Brightness: {
            screen: Brightness
        }
    }, {
        initialRouteName: 'Brightness',
        headerMode: 'none'
    }
)

/* configurar el stack de navegación */
const AppContainer = createAppContainer(AppNavigator);

export default () => (
    <Root>
        <AppContainer />
    </Root>
);