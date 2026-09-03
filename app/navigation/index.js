import React from 'react';
import { createBottomTabNavigator, BottomTabBar, createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TracksScreen from '../screens/TracksScreen';
import SingleTrackScreen from '../screens/SingleTrackScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FlightDashboardScreen from '../screens/FlightDashboardScreen';
import FlightDetailsScreen from '../screens/FlightDetailsScreen';

import s from '../styles';

const OperationsNavigator = createStackNavigator(
  {
    Dashboard: { screen: FlightDashboardScreen, navigationOptions: { title: 'Flight Operations' } },
    FlightDetails: { screen: FlightDetailsScreen, navigationOptions: { title: 'Flight Details' } },
  },
  { initialRouteName: 'Dashboard' },
);

const SettingsNavigator = createMaterialTopTabNavigator(
  { Settings: SettingsScreen, Profile: ProfileScreen },
  { tabBarOptions: { upperCaseLabel: false, labelStyle: { paddingTop: 16, textTransform: 'none', color: '#000000' }, style: { backgroundColor: '#eeeeee' } } },
);

const TrackingNavigator = createStackNavigator(
  {
    Tracks: { screen: TracksScreen, navigationOptions: { title: 'Recorded Tracks' } },
    SingleTrack: { screen: SingleTrackScreen, navigationOptions: { title: 'Track Details' } },
  },
  { initialRouteName: 'Tracks' },
);

const TabBarComponent = (props) => <BottomTabBar {...props} />;

export default createBottomTabNavigator(
  {
    Operations: OperationsNavigator,
    Tracking: TrackingNavigator,
    Live: HomeScreen,
    Settings: SettingsNavigator,
  },
  {
    initialRouteName: 'Operations',
    tabBarComponent: (props) => <TabBarComponent {...props} />,
    tabBarOptions: { activeTintColor: s.colors.fg, inactiveTintColor: 'gray' },
  },
);
