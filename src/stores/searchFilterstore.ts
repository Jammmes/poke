import { observable, action } from 'mobx';
import { RootStore } from './rootStore';

export class SearchFilterStore {
  @observable public filter: string = '';

  constructor(public root: RootStore) { }

  @action public changeSearchFilter(newFilter: string) {
    this.filter = newFilter;
  }

  @action public getSearchFilter() {
    return this.filter;
  }
}
