import React from 'react'
import { Segment, Icon } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react';

const Marker = latlng => (
  <Icon name='marker' size='big' color='red' />
);

const EventDetailedMap = ({lat,lng}) => {
    const zoom=14
    return (
      <Segment attached='bottom' style={{padding:0}}>
    {/* Important! Always set the container height explicitly */}
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDZeXpDZTQCrgHXqboPDMboUjUOiOR2FGI'
            }}
            defaultCenter={{lat, lng}}
            defaultZoom={zoom}
          >
            <Marker lat={lat} lng={lng} />
          </GoogleMapReact>
        </div>
      </Segment>
    );
}

export default EventDetailedMap
