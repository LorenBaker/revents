import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <List.Item>
        <Item.Image size='mini' circular src={attendee.photoURL} />
      </List.Item>
    );
  }
}

export default EventListAttendee;
