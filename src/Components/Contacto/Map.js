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
          bootstrapURLKeys={{ key: 'AIzaSyCbuvFUg8v-2R8TsCTdAhLy4kZL-ptYZ60'}}
          defaultCenter= {dataMap.center}
          defaultZoom={dataMap.zoom}
        >
				</GoogleMapReact>
	</>
	);
}
 
export default Map;