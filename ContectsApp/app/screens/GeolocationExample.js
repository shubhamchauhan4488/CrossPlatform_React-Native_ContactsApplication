import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View>
          <List>
          <ListItem
            title="Latitude"
            rightTitle={this.state.latitude}
            hideChevron
          />
          <ListItem
            title="Longitude"
            rightTitle={this.state.longitude}
            hideChevron
          />
        </List>
        
            <Text> {this.state.error ? <Text>Error: {this.state.error}</Text> : null}</Text>
    </View>
    );
  }
}

export default GeolocationExample;