import { observable, action } from 'mobx';

export class TagsFilterStore {
  @observable public filter: string[] = [];

  @action public addTagToFilter(tag: string) {
    this.filter.push(tag);
  }

  @action public removeTagFromFilter(tag: string) {
    return this.filter.filter(item => item === tag);
  }
}
