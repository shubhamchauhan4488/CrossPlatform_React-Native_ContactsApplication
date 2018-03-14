import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem,Button } from 'react-native-elements';
import call from 'react-native-phone-call'


class UserDetail extends Component {
  render() {
    const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: picture.large}}
          featured
          title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
          caption={email}
        />

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
          <Button
            title="Call"
            buttonStyle={{ marginTop: 20, backgroundColor : 'green' }}
            onPress={() => {
              const args = {
                number: phone, // String value with the number to call
                prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
              }
              console.log("call initiated")
              call(args).catch(console.error)
            }
          }
          />  
        </List>

        <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;
