import "./styles.css";
import React from "react";
import Cytoscape from "cytoscape";
import dagre from "cytoscape-dagre";
import CytoscapeComponent from "react-cytoscapejs";

Cytoscape.use(dagre);
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    elements: [
      { data: { id: 1, label: "node1" } },
      { data: { id: 2, label: "node2" } },
      { data: { source: 1, target: 2 } },
      { data: { id: 3, label: "node3" } },
      { data: { source: 2, target: 3 } },
      { data: { id: 3, label: "node3" } },
      { data: { id: 4, label: "node4", parent: 1 } }
    ],
    options: {
      name: "dagre"
    }
  };
  render() {
    return (
      <div>
        <CytoscapeComponent
          elements={this.state.elements}
          style={{ width: "800px", height: "800px" }}
          cy={(cy) => {
            this.cy = cy;
          }}
          layout={this.state.options}
        />
      </div>
    );
  }
}
