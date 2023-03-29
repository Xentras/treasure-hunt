import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Container } from "@mui/system"
import React, { useEffect, useState } from 'react';

function ProximityAlert(props) {
    const [inRange, setInRange] = useState(false)
    const [longitude, setLongitude] = useState()

    function distance(coords1, coords2) {
        const { lat: lat1, lon: lon1 } = coords1;
        const { lat: lat2, lon: lon2 } = coords2;
        const degToRad = x => x * Math.PI / 180;
        const R = 6371000;
        const halfDLat = degToRad(lat2 - lat1) / 2;  
        const halfDLon = degToRad(lon2 - lon1) / 2;  
        const a = Math.sin(halfDLat) * Math.sin(halfDLat) + 
                  Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * 
                  Math.sin(halfDLon) * Math.sin(halfDLon);  
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        return R * c; 
      }
      
    const paris = { lat: 48.864716, lon: 2.349014 };
    const newYork = { lat: 40.730610, lon: -73.935242 };

    useEffect(() => {
        setLongitude(props.location.longitude)
        function updateLocation() {
            if(longitude <= 13.0226934 && longitude >= 13.02267) {
                console.log('I RUN')
                setInRange(true)
            }
        }
        updateLocation()
    }, [props.location])

    return (
        <Container>
            <p>Long: {longitude}</p>
            <p>Yeah?</p>
            <p>distance test: {distance(paris, newYork)} meters</p>
            {inRange && (
                <p>YES</p>
            )}
        </Container>
    )

}

export default ProximityAlert