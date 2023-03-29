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
            {inRange && (
                <p>YES</p>
            )}
            {/* {inRange && <Dialog
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
            </Dialog>} */}
        </Container>
    )

}

export default ProximityAlert