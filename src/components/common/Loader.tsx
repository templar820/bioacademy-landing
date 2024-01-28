import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import MobXRouterDecorator from '$components/HOC/MobXRouterDecorator';
import { useRootStore } from '$hooks/useRootStore';

function Loader(props) {
  const stores = useRootStore();
  const open = stores.AppStore.getLoader();
  if (!open) {
    return null;
  }
  return (
    <Backdrop
      open
      style={{
        zIndex: 123
      }}
    >
      <CircularProgress thickness={6} size={56} style={{color: "white"}}  />
    </Backdrop>
  );
}

export default MobXRouterDecorator(Loader);
