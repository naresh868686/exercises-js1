/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors; // finish this statement
if(studentCount>mentorCount){
  moreStudentsThanMentors = true;
}
else {
    moreStudentsThanMentors = false;
}

var roomMaxCapacity = 25;
var enoughSpaceInRoom; // finish this statement
if (roomMaxCapacity === 25){
  enoughSpaceInRoom = true;
}
else{
  enoughSpaceInRoom = false;
}

var personA = "Daniel";
var personB = "Irina";
var sameName; // finish this statement

if (personA === personB){
  sameName = true;
}
else{
  sameName = false;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log("Is there enough space in the room for all students and mentors?",enoughSpaceInRoom);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false */
