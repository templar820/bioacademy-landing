import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography,
} from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { PopupWrapper } from '$popup-service/model/PopupWrapper';
import { PopupsContainerModel } from '$popup-service/model/Common';
import logo from '$assets/images/logo.png';

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

interface IPropsCenterWrapper {
  title: string;
  body: string;
}

function CenterWrapper(props: IPropsCenterWrapper) {
  const {
    close,
    isClosed,
  } = PopupWrapper(PopupsContainerModel.ETypeWrapper.CENTER);
  
  const handleClose = () => {
    close();
  };
  
  console.log('DIALOG', !isClosed);
  return (
    <Dialog
      open={!isClosed}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="d-flex justify-content-center flex-column align-items-center p-4">
        <img src={logo} width={132}/>
        <DialogTitle>
          <Typography
            textAlign={"center"}
            variant={"h3"}
          >
            {props.title}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography
              textAlign={"center"}
              variant={"body2"}
            >
              {props.body}
            </Typography>
          </DialogContentText>
        </DialogContent>
      </div>
    
    </Dialog>
  );
}

export default CenterWrapper;
