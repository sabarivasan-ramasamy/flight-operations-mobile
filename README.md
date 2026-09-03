# Flight Operations Mobile

A cross-platform React Native mobile application prototype for flight operations workflows. The project combines an operational flight dashboard with flight details, GPS/location tracking, map visualization, local persistence, and a service layer designed around REST-style APIs.

## Features

- Flight operations dashboard with assigned flights and operational status
- Flight details including route, departure/arrival, gate and aircraft
- Navigation using React Navigation
- GPS/location tracking and live map visualization
- Background location tracking support from the original tracking module
- Local storage for recorded tracks
- Loading and error states in the dashboard
- Service-layer separation for flight data
- Jest test setup
- Android and iOS project structure

## Architecture

```text
Screens / UI
     |
     v
Navigation + Components
     |
     v
Service Layer (flightService)
     |
     v
REST-style Flight Data

Live Tracking -> Location Manager -> Mapbox -> Track Storage
```

The flight service currently uses mock data so the UI can be demonstrated without an external backend. The service interface is intentionally separated so it can later call a real REST API.

## Technology

React Native, JavaScript, React Navigation, REST API concepts, Mapbox, GPS/location services, AsyncStorage, Jest, Android, iOS.

## Important attribution

This repository started as a fork/adaptation of the open-source Mappo3 React Native GPS tracking project. The original project was created for GPS tracking/recording for freeflight use cases. This repository adds a flight-operations-oriented workflow and should be considered an adapted project rather than an original application built entirely from scratch.
