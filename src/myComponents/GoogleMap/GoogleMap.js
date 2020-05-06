// import React from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import CurrentLocation from './Map';


// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// class GoogleMap extends React.Component{
//     state = {
//         showingInfoWindow: false,  //Hides or the shows the infoWindow
//         activeMarker: {},          //Shows the active marker upon click
//         selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
//       };
//       onMarkerClick = (props, marker, e) =>
//       this.setState({
//         selectedPlace: props,
//         activeMarker: marker,
//         showingInfoWindow: true
//       });
    
//     onClose = props => {
//       if (this.state.showingInfoWindow) {
//         this.setState({
//           showingInfoWindow: false,
//           activeMarker: null
//         });
//       }
//     };
//     render() {
//         return (
//             <CurrentLocation
//             centerAroundCurrentLocation
//             google={this.props.google}
//           >
//             <Marker onClick={this.onMarkerClick} name={'current location'} />
//             <InfoWindow
//               marker={this.state.activeMarker}
//               visible={this.state.showingInfoWindow}
//               onClose={this.onClose}
//             >
//               <div>
//                 <h4>{this.state.selectedPlace.name}</h4>
//               </div>
//             </InfoWindow>
//           </CurrentLocation>
//         );
//       }
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDAhVHEwJizVeQ8f8i0LABUfspR8ASTlWU'
//   })(GoogleMap);
import React from 'react';
import {GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './Map';


class GoogleMap extends React.Component{
  constructor(props){
    super(props);
    this.state={
      latitude: null,
      longitude: null,
      userAddress: null,
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    }
  }
  onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
  getLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates=(pos)=>{
    console.log(pos.coords);
    this.setState({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    })
  }
  handleLocationError=(error)=>{
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
      alert("An unknown error occurred.");
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.getLocation}>Location</button>
    <p>lat: {this.state.latitude}</p>
    <p>long: {this.state.longitude}</p>
    <p>add: {this.state.userAddress}</p>
    {
      this.state.latitude&&this.state.longitude?
      <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
            lat={this.state.latitude}
            lng={this.state.longitude}
            
          >
            <Marker onClick={this.onMarkerClick} name={'current location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation> : null
    }
      </div>
    );
  }
}
export default GoogleApiWrapper({
      apiKey: 'AIzaSyDAhVHEwJizVeQ8f8i0LABUfspR8ASTlWU'
    })(GoogleMap);