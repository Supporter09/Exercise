import Boy from "../../../Session 3/hw/modules/Boy.js";
import Person from "./Person.js"
import Relationship from "./Relationship.js";
export default class Group {
    name;
    people;
    relationships;
    constructor(name) {
        this.name = name;
        this.people = [];
        this.relationships = [];
    }

    addPerson(person) {
        if (person instanceof Person) {
            this.people.push(person);
        }
    }

    addRelationShip (p1,p2) {
        if (p1 instanceof Person && p2 instanceof Person) {
            let foundRelationShip = this.relationships.find((relationships)=>{
                return (relationships.a == p1 && relationships.b == p2)|| (relationships.b == p1 && relationships.a ==p2) ;
            })

            if (foundRelationShip == null) {
                this.relationships.push(new Relationship(p1,p2))
            }
        }
    }

    findFriends(person) {
        if (person instanceof Person) {
            let friends = [];

            for(let relationship of this.relationships){
                if (relationship.a == person) {
                    friends.push(relationship.b);
                }else if(relationship.b == person) {
                    friends.push(relationship.a);

                }
            }
            return friends;
        }
        return [];
    }

    findBoyFriends(person) {
        let personFriends = this.findFriends(person);
        return personFriends.filter((person)=>{
            return friend instanceof Boy;
        })

    }

}

// Kiểu primitive : So sánh giá trị
// Kiểu reference: So sánh địa chỉ của ô nhớ