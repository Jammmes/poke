import { observable, action } from 'mobx';
import { RootStore } from './rootStore';

export class PaginationStore {
  @observable public page: number = 0;
  @observable public size: number = 10;

  constructor(public root: RootStore) { }

  @action public setPage(newPage: number) {
    this.page = newPage;
  }

  @action public setSize(newSize: number) {
    this.size = newSize;
  }
}
