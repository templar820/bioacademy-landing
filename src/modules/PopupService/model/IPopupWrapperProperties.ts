export const size = [
  'small',
  'medium',
  'large',
  'extra-large',
  'full-width',
  'full-width-padding',
] as const;
type Size = (typeof size)[number];

export interface IPopupWrapperProperties {
  component?: object;
  propsData?: {
    isMobileViewHidden?: boolean;
    isDesktopViewHidden?: boolean;
    isMobileLineBarVisible?: boolean;
    isBackIconVisible?: boolean;
    isCloseIconVisible?: boolean;
    isDarkenedBackgroundVisible?: boolean;
    borderRadius?: string;
    isGrabber?: boolean;
    size?: Size;
    title?: string;
    theme?: {
      background?: string;
    };
  };
  isForwardPointerEventsFurther?: boolean;
}
