import "../styles/styles.scss";
import {observer } from 'mobx-react';
import React, { Component } from 'react';
import SampleStore from "../stores/SampleStore";


@observer
class IndexPage extends Component {

  constructor(props) {
    super(props);
    this.store = new SampleStore();
  }

  onclick = () => {
    this.store.toggleDisplay();
  }

  render() {
    return (
      <div>

        <button
          onClick={this.onclick}
          className={"p-2 border border bg-gray-100 bg-teal-100"}>
          Toggle State
        </button>

        {this.store.isVisible &&  (
          <p className={"p-4"}>👋 World!</p>
        )}

      </div>
    )
  }
}

export default IndexPage;