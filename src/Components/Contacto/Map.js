import GoogleMapReact from 'google-map-react';



const Map = () => {
	const dataMap = {
		center: {
			lat: -33.40,
			lng: -70.57
		},
		zoom:11
	}

	return (  
		<>
				<GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
          defaultCenter= {dataMap.center}
          defaultZoom={dataMap.zoom}
        >
				</GoogleMapReact>
	</>
	);
}
 
export default Map;