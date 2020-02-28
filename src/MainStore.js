import { observable, action } from 'mobx';

export default class MainStore {
  @observable user = {
    firstName: 'Erdem',
    lastName: 'Uslu'
  };
}

const store = new MainStore();
export default store;
