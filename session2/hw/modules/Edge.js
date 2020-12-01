import Vertex from "./Vertex.js";

export default class Edge {
  constructor(a, b) {
    if (a instanceof Vertex && b instanceof Vertex) {
      this.a = a;
      this.b = b;
    }
  }
}
