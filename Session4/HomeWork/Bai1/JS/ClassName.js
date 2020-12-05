import Information from "./Information.js";

export default class ClassName extends Information{
    teacher;
    studentList;
    constructor(code, name, teacher){
        super(code, name);
        this.teacher = teacher;
        this.studentList = [];
    }
}