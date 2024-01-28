import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/Root.store';

export default function (component, router = true) {
  const obj = RootStore;
  return observer(component);
}
