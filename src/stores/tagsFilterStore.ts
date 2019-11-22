import { observable, action } from 'mobx';
import { RootStore } from './rootStore';

export class TagsFilterStore {
  @observable public filter: string[] = [];

  constructor(public root: RootStore) { }

  @action public addTagToFilter(tag: string) {
    this.filter.push(tag);
  }

  @action public removeTagFromFilter(tag: string) {
    this.filter = this.filter.filter(item => item !== tag);
  }
}
