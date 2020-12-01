import Person from "./modules/Person.js";
import Girl from "./modules/Girl.js";
import Boy from "./modules/Boy.js";
import Vertex from "./modules/Vertex.js"; 
import Edge from "./modules/Edge.js"; 
import Graph from "./modules/Graph.js"; 

// 1. Find all friends:
const findFriend = (person) => {
  const friends = [];
  for (let i = 0; i < myGraph.edges.length; i++) {
    if (person.name === myGraph.edges[i].a.data.name) {
      friends.push(myGraph.edges[i].b.data);
    } else if (person.name === myGraph.edges[i].b.data.name) {
      friends.push(myGraph.edges[i].a.data);
    }
  }
  // myGraph.forEach(element => {
  //   if (person.name === element.a.data.name) {
  //     friends.push(element.b.data);
  //   }else if (person.name === element.b.data.name) {
  //     friends.push(element.a.data)
  //   }
  // });

  return friends;
};

// 2. Find all male friends:
const findMaleFriend = (person) => {
  const friends = findFriend(person);
  const maleFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i] instanceof Boy) {
      maleFriends.push(friends[i]);
    }
  }

  // friends.forEach(element => {
  //   if (element instanceof Boy) {
  //     maleFriends.push(element)
  //   }
  // })

  return maleFriends;
};

// 3. Find all female friends:
const findFemaleFriend = (person) => {
  const friends = findFriend(person);
  const femaleFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i] instanceof Girl) {
      femaleFriends.push(friends[i]);
    }
  }
  // friends.forEach(element => {
  //   if (element instanceof Girl) {
  //     maleFriends.push(element)
  //   }
  // })

  return femaleFriends;
};

// 4. Find all female friends with beauty > 5:
const findPrettyFemaleFriend = (person) => {
  const aboveFive = [];
  const femaleFriends = findFemaleFriend(person);
  for (let i = 0; i < femaleFriends.length; i++) {
    if (femaleFriends[i].beauty > 5) {
      aboveFive.push(femaleFriends[i]);
    }
  }
  // femaleFriends.forEach(element => {
  //   if (element.beauty > 5) {
  //     femaleAboveFive.push(element)
  //   }
  // })
  return aboveFive;
};

// Test:
const boy1 = new Boy("John", 20, 6),
  boy2 = new Boy("Mike", 25, 7),
  boy3 = new Boy("Will", 21, 8),
  girl1 = new Girl("Sue", 19, 5),
  girl2 = new Girl("Ana", 22, 8),
  girl3 = new Girl("Mary", 24, 9),
  boy4 = new Boy("Chad", 23, 9);

const myGraph = new Graph("Friend Group"),
  B1 = new Vertex(boy1),
  B2 = new Vertex(boy2),
  B3 = new Vertex(boy3),
  G1 = new Vertex(girl1),
  G2 = new Vertex(girl2),
  G3 = new Vertex(girl3),
  B4 = new Vertex(boy4);

myGraph.addVertex(B1);
myGraph.addVertex(B2);
myGraph.addVertex(B3);
myGraph.addVertex(G1);
myGraph.addVertex(G2);
myGraph.addVertex(G3);
myGraph.addVertex(B4);

myGraph.addEdge(B1, B3);
myGraph.addEdge(B1, B3);
myGraph.addEdge(B1, G2);
myGraph.addEdge(B2, B3);
myGraph.addEdge(B2, G1);
myGraph.addEdge(B2, G2);
myGraph.addEdge(G1, G2);
myGraph.addEdge(B3, G3);
myGraph.addEdge(B1, G2);
myGraph.addEdge(B3, G1);
myGraph.addEdge(G1, G3);
myGraph.addEdge(G2, G3);
myGraph.addEdge(B4, G1);
myGraph.addEdge(B4, G2);
myGraph.addEdge(B4, G3);
