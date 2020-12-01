import Vertex from "./Vertex.js";
import Edge from "./Edge.js";

export default class Graph {
    name;
    vertices;
    edges;
  
    constructor(name) {
      this.name = name;
      this.vertices = []; // array of people
      this.edges = []; // array of relationships
    }
    addVertex(v) {
      if (v instanceof Vertex) {
        this.vertices.push(v);
      }
    }
    addEdge(a, b) {
      if (a instanceof Vertex && b instanceof Vertex && a != b) {
        let foundEdge = this.edges.find((edge) => {
          return (edge.a === a && edge.b === b) || (edge.a === b && edge.b === a);
        });
        if (!foundEdge) {
          let newEdge = new Edge(a, b);
          this.edges.push(newEdge);
        }
      }
    }
  }