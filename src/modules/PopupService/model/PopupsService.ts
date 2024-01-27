import { Observable, Subject } from 'rxjs';

import { PopupsContainerModel } from '$popup-service/model/Common';

type PopupContainerConfig = PopupsContainerModel.IPopupComponentConfig;

export type TOpenedPopups = Partial<
  Record<
    PopupsContainerModel.ETypeWrapper,
    {
      component: PopupContainerConfig['component'];
      propsData?: Record<string, any>;
      isRouterOpened?: boolean;
      isForwardPointerEventsFurther?: boolean;
    }
  >
>;

class PopupsServiceClass {
  constructor() {
    this.openedPopupsDataStreams$ = Object.values(
      PopupsContainerModel.ETypeWrapper
    ).reduce(
      (acc, popupType: PopupsContainerModel.ETypeWrapper) => ({
        ...acc,
        [popupType]: new Subject(),
      }),
      {}
    );
  }

  private openedPopups: TOpenedPopups = {};
  private openedPopupsDataStreams$: Partial<
    Record<PopupsContainerModel.ETypeWrapper, Subject<any>>
  > = {};
  private _openedPopupsStream$: Subject<TOpenedPopups> =
    new Subject<TOpenedPopups>();

  get openedPopupsStream$(): Observable<any> {
    return this._openedPopupsStream$.asObservable();
  }

  /**
   * Открыть popup, modal итд. с позицией на экране.
   * @param config - Обьект. (есть сам компонент и так же тип компонента)
   */
  public open<ReturnDataType>(
    config: PopupContainerConfig
  ): Subject<ReturnDataType | undefined> | undefined {
    if (this.openedPopups[config.type]) {
      this.close(config.type);
    }

    this.openedPopups = {
      ...this.openedPopups,
      [config.type]: {
        component: config.component,
        propsData: config.propsData,
        isRouterOpened: !!config.isRouterOpened,
        isForwardPointerEventsFurther: !!config.isForwardPointerEventsFurther,
      },
    };

    this._openedPopupsStream$.next(this.openedPopups);

    if (config.withReturnData) {
      return this.openedPopupsDataStreams$[config.type];
    }

    return new Subject();
  }

  public close(
    type: PopupsContainerModel.ETypeWrapper,
    data: any = null
  ): void {
    delete this.openedPopups[type];
    this._openedPopupsStream$.next(this.openedPopups);
    this.openedPopupsDataStreams$[type]?.next(data);
  }

  public closeAllPopups(): void {
    Object.keys(this.openedPopups).forEach((type) =>
      this.close(type as PopupsContainerModel.ETypeWrapper)
    );
  }

  public closeRouteChangePopups(): void {
    Object.keys(this.openedPopups).forEach((type) => {
      // @ts-ignore
      if (!this.openedPopups[type].isRouterOpened) {
        this.close(type as PopupsContainerModel.ETypeWrapper);
      }
    });
  }
}

export const PopupsService = new PopupsServiceClass();
