import React, { useEffect, useState } from 'react';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PopupsService, TOpenedPopups } from '$popup-service/model/PopupsService';
import { PopupsContainerModel } from '$popup-service/model/Common';
import CenterWrapper from '$popup-service/components/CenterWrapper';

function PopupsContainer(props) {
  const unsubscribe$ = new Subject<boolean>();
  const [popups, setPopups] = useState({} as TOpenedPopups);
  
  PopupsService.openedPopupsStream$
    .pipe(takeUntil(unsubscribe$))
    .subscribe(openedPopups => {
      requestAnimationFrame(() => {
        setPopups({...openedPopups});
      });
    });

  useEffect(() => {
    return () => {
      unsubscribe$.next(true);
      unsubscribe$.complete();
    };
  }, []);
  
  return (
    <div className="popups-container">
      {Object.entries(popups).map(v => {
        const [key, value] = v
        
        // @ts-ignore
        return React.cloneElement(value.component, {
          key
        });
      })}
    </div>
  );
}

export default PopupsContainer;
