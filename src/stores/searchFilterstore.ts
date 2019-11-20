import { observable, computed, autorun, action } from 'mobx';

export class SearchFilterStore {
  @observable public filter:string = 'abv';

  constructor() {
    // autorun(() => console.log(this.getSearchFilter()));
  }

  @action public clearSearchFilter() {
    this.filter = '';
  }

  @action public changeSearchFilter(filter:string) {
    this.filter = filter;
  }

  public getSearchFilter() {
    return this.filter;
  }

  // @computed public getSearchFilter() {
  //   return this.filter;
  // }
}

// export const observableSearchFilterStore = new ObservableSearchFilterStore();
