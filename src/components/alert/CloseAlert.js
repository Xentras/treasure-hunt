import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Container } from "@mui/system"
import React, { useEffect, useState } from 'react';

function CloseAlert() {
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [inRange, setInRange] = useState(false)
    const [open, setOpen] = useState(false)
    let POIArray = [
        13.0225,
        14.0225,
        15.0225
    ]

    function closeToPOI() {
        const found = POIArray.find(POI => longitude >= POI - 0.0002 && longitude <= POI + 0.0002)
        console.log(POIArray)
        if (found) {
            setInRange(true)
            setOpen(true);
        }
    }

    const handleClose = () => {
        const index = POIArray.indexOf(found)
        POIArray.splice(index, 1)
        setOpen(false);
    };

    useEffect(() => {
        closeToPOI()
    }, [longitude])

    useEffect(() => {
        navigator.geolocation.watchPosition(position => {
            console.log(position)
            console.log(POIArray)
            setLongitude(position.coords.longitude)
            setLatitude(position.coords.latitude)
        })
    })

    return (
        <Container>
            {inRange && <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>}
        </Container>
    )

}

export default CloseAlert