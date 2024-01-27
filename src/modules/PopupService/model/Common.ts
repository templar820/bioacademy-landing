import { Component, ReactNode, FunctionComponent } from 'react';

export namespace PopupsContainerModel {
  export enum ETypeWrapper {
    PROMO = 'PopupPromo',
    CENTER = 'PopupCenterWrapper',
    SCREEN = 'PopupScreenWrapper',
    CENTER_TOP_SLIM = 'PopupCenterTopSlimWrapper',
    RIGHT_TOP_BOTTOM_CENTER_SLIM = 'RightTopBottomCenterSlimWrapper',
  }
  export interface IPopupComponentConfig {
    type: PopupsContainerModel.ETypeWrapper;
    component: ReactNode;
    propsData?: any;
    withReturnData?: boolean;
    isRouterOpened?: boolean;
    isForwardPointerEventsFurther?: boolean;
  }
}
