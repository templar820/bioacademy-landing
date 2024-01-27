
import { useState } from 'react';
import { PopupsService } from '$popup-service/model/PopupsService';
import { PopupsContainerModel } from '$popup-service/model/Common';

export function PopupWrapper(type: PopupsContainerModel.ETypeWrapper) {
  const popupsService = PopupsService;
  const [isClosed, setClosed] = useState(false);

  const close = (data = null) => {
    popupsService.close(type, data);
    setClosed(true);
  };

  return {
    isClosed,
    close,
  };
}
