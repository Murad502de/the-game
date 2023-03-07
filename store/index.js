import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  maxCount = 41;
  percentage = 0;
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    this.percentage = (this.count / this.maxCount) * 100;
    if (this.maxCount === this.count) {
      this.isLoading = false;
    }
  }
}

export default new Counter();
