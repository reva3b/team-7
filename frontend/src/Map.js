import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from './config.json';
import { data } from './data';
import axios from 'axios';
import Dot from './Dot';
 
class Map extends Component {
    static defaultProps = {
        center: [59.93, 30.33],
        data: {},
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            address: "",
            data: this.props.data
        }
    }

    componentDidMount() {
        
    }

  render() {
    return (
      // Important! Always set the container height explicitly
      <center>
      <div style={{height: '50vh', width: '95%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.maps }}
          center={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
              this.state.data.map((item) => (
                    <Dot
                    upvotes={item.upVotes}
                    lat={item.lat}
                    lng={item.lng}
                    title={item.title}
                    category={item.category}
                    quantity={item.quantity}
                    time={item.time}
                    img={item.img}
                    body={item.body}
                    text={item.name}
                  />
              ))
          }
        </GoogleMapReact>
      </div>
      </center>
    );
  }
}
 
export default Map;