function Student(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.courses = [];
  this.courseload = {};
}

function Course(name, dept, credits, days, time) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.time = time;
}


Student.prototype.enroll = function(course) {
  if (this.hasConflict(course)) {
    return "go away";
  }
  this.courses.push(course);
  if (this.courseload[course.dept] > 0) {
    this.courseload[course.dept] += course.credits;
  } else {
    this.courseload[course.dept] = course.credits;
  }
  course.students.push(this);
};

Student.prototype.hasConflict = function(course) {
  let flag = false;
  this.courses.forEach ( (course2) => {
    if (course2.hasConflict(course)) {
      flag = true;
    }
  });
  return flag;
};



Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.hasConflict = function(course) {
  let flag = false;
  if (this.time === course.time ) {
    this.days.forEach ( (day) => {
      if (course.days.indexOf(day) !== -1) {
        flag = true;
      }
    });
  }
  return flag;
};

let IO = new Course('industrial organization', 'economics', 3, ["mon"], 7);
let IL = new Course('underwater basketweaving', 'psychology', 3, ["tues"], 7);

let brady = new Student('Brady', 'Vaughan');

brady.enroll(IO);
console.log(brady.enroll(IL));
