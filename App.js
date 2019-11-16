
class Human {
  name;
  job;
  skills;

  constructor() {
    this.name ='';
    this.job = '';
    this.skills=[];
  }

  getJob(skill) {
    this.job=skill;
console.log("His job is " + skill );
  }

  leaveJob() {
    this.job="unemployed";
    console.log("He is " + this.job);
  }

  learnNewSkill(skill) {
this.skills.push(skill)
console.log(this.skills);

  }

  forgetSkill(skill) {
    this.skills=this.skills.filter( element => element !=skill)
    
   // this.skills.splice(this.skills.indexOf(this.skills),1);
//this.skills.pop();
console.log(this.skills);
  }

}


class Student extends Human{

constructor(){
  super();
};
 

}

const me = new Student();

me.getJob("Web developer");

me.learnNewSkill("React");

me.forgetSkill("React");

me.leaveJob();

