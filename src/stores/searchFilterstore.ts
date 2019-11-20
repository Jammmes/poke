import { observable, action } from 'mobx';

export class SearchFilterStore {
  @observable public filter: string = 'ccc';

  @action public clearSearchFilter() {
    this.filter = '';
  }

  @action public changeSearchFilter(newFilter: string) {
    this.filter = newFilter;
  }

  @action public getSearchFilter() {
    return this.filter;
  }
}
