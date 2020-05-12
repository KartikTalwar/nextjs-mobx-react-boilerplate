import { action, observable, computed } from "mobx";


class SampleStore {

  @observable display = true;  

  @action toggleDisplay = () =>  {
    this.display = !this.display;
  }

  @computed get isVisible() {
    return this.display;
  }

}

export default SampleStore;