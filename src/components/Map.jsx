import { MapContainer, TileLayer, useMap, Marker, Popup, Circle } from 'react-leaflet'
import { Icon, map } from 'leaflet'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from 'react-router-dom'

const Map = () => {
    const [myLat, setMyLat] = useState(0);
    const [myLong, setMyLong] = useState(0);
    useEffect(() => {
        function getMyLocation() {
            const toastId = toast.loading('Tracking location on map...');

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        toast.success('Successfully tracked.', {
                            id: toastId
                        });
                        // what to do once we have the position
                        setMyLat(position.coords.latitude)
                        setMyLong(position.coords.longitude)
                        // console.log(position.coords.latitude);
                        // console.log(position.coords.longitude);
                    },
                    (error) => {
                        // display an error if we cant get the users position
                        toast.error('Geolocating error.', {
                            id: toastId
                        });
                        console.error('Error getting location:', error);
                    }
                );
            }
            else {
                // display an error if not supported
                toast.error('Geolocation is not supported by this browser.', {
                    id: toastId
                });
                console.error('Geolocation is not supported by this browser.');
            }
        }

        getMyLocation();
    }, [])
    const position = [myLat, myLong]
    // const position = [-2.607845, 29.73475]

    return (
        <>
            <Toaster />
            {myLong != 0 ?
                <div className='w-full h-full overflow-hidden rounded' style={{ zIndex: '1' }}>
                    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
                        <TileLayer attribution='Briefcase Tracker' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}> <Popup> Briefcase located in this range. </Popup> </Marker>
                        <Circle center={position} radius={1000} pathOptions={{ color: '#077bff' }} />
                    </MapContainer>
                </div>

                :

                <p>Loading map</p>

            }

        </>
    )
}

export default Map
