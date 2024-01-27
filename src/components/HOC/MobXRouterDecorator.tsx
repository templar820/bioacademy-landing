import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import RootStore from '../../stores/Root.store';

export default function (component, router = true) {
  const obj = RootStore;

  if (!router) return observer(component);
  return withRouter((observer(component)));
}
