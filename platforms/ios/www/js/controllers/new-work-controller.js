'use strict';

angular.module('activ8')

.controller('NewWorkCtrl', function(Auth, $firebase, $location){

  var ref = new Firebase("https://activ8.firebaseio.com/workouts/" + Auth.getUser().uid),
  self = this,
  movements = {
    "PullUps": {
      name: "Pull Ups",
      type: 1
    },
    "PushUps": {
      name: "Push Ups",
      type: 1
    },
    "HandstandPushUps": {
      name: "Handstand Push Ups",
      type: 1
    },
    "SitUps": {
      name: "Sit Ups",
      type: 1
    },
    "GHDSitUps": {
      name: "GHD Sit Ups",
      type: 1
    },
    "PowerClean": {
      name: "Power Clean",
      type: 2
    },
    "SquatClean": {
      name: "Squat Clean",
      type: 2
    },
    "HangPowerClean": {
      name: "Hang Power Clean",
      type: 2
    },
    "HangSquatClean": {
      name: "Hang Squat Clean",
      type: 2
    },
    "PowerSnatch": {
      name: "Power Snatch",
      type: 2
    },
    "SquatSnatch": {
      name: "Squat Snatch",
      type: 2
    },
    "HangPowerSnatch": {
      name: "Hang Power Snatch",
      type: 2
    },
    "HangSquatSnatch": {
      name: "Hang Squat Snatch",
      type: 2
    },
    "Clean&Jerk": {
      name: "Clean & Jerk",
      type: 2
    },
    "PushJerk": {
      name: "Push Jerk",
      type: 2
    },
    "Jerk": {
      name: "Jerk",
      type: 2
    },
    "SplitJerk": {
      name: "Split Jerk",
      type: 2
    },
    "Squat": {
      name: "Squat",
      type: 2
    },
    "OverheadSquat": {
      name: "Overhead Squat",
      type: 2
    },
    "FrontSquat": {
      name: "Front Squat",
      type: 2
    },
    "Deadlift": {
      name: "Deadlift",
      type: 2
    },
    "SumoDeadlift": {
      name: "Sumo Deadlift",
      type: 2
    },
    "MuscleUps": {
      name: "Muscle Ups",
      type: 1
    },
    "BarMuscleUps": {
      name: "Bar Muscle Ups",
      type: 1
    },
    "RingRows": {
      name: "Ring Rows",
      type: 1
    },
    "Pistol Squats": {
      name: "Pistol Squats",
      type: 1
    },
    "KettlebellSwingsAmerican": {
      name: "Kettlebell Swings American",
      type: 1
    },
    "KettlebellSwingsRussian": {
      name: "Kettlebell Swings Russian",
      type: 1
    },
    "TireFlips": {
      name: "Tire Flips",
      type: 1
    },
    "BearCrawls": {
      name: "Bear Crawls",
      type: 1
    },
    "Thrusters": {
      name: "Thrusters",
      type: 1
    },
    "Clusters": {
      name: "Clusters",
      type: 1
    },
    "StrictPress": {
      name: "Strict Press",
      type: 1
    },
    "PushPress": {
      name: "Push Press",
      type: 1
    },
    "BenchPress": {
      name: "Bench Press",
      type: 1
    },
    "RopeClimbs": {
      name: "Rope Climbs",
      type: 1
    },
    "WallBalls": {
      name: "Wall Balls",
      type: 1
    },
  };

  //Posting Workouts to the Workout Array
  this.workout = [ ];

  this.addMove = function(){
    this.workout.push({
      name: "",
      reps: "",
      rds: "",
      weight: "",
      moveNumber: this.workout.length + 1
    });
  };
  console.log(this.workout)
  //Delete Movement from a workout
  this.delete = function(move) {
    var index = this.workout.indexOf(move)
    this.workout.splice(index, 1);
      console.log("Work!")
  }

  // Utilize the Date for titles?
  this.date = Date.now();
  var sync = $firebase(ref)

  this.newWorkout = sync.$asArray();

  this.addWork = function(movements){
    this.newWorkout.$add({
      date: Date.now(),
      movements: movements
    });
    this.workout = [ ];
    console.log(this.workout)
    $location.path('/history')

  }

  this.disable = function(){
      if(this.workout.length == 0){
          return true;
      }
//    if($('form').hasClass('ng-pristine')){
//      return true;
//    }
    else {
      return false;
    }
  }

  this.moveList = {};
  this.moveList.movements = movements;


  this.namedWorkout = [];

  this.addNamed = function(){
    this.namedWorkout.push({
      name: "",
      reps: "",
      rds: "",
      weight: "",
    });
  };

  var named = [
    {
      namedWork: "Angie",
      finalScore: "0:00",
      movements: {
        "Pullups": {
        name: "Pull Ups",
        reps: "100",
        rds: "1",
        weight: "Body Weight"
        },
        "PushUps": {
        name:"Push Ups",
        reps: "100",
        rds: "1",
        weight: "Body Weight"
        },
        "SitUps": {
        name:"Sit Ups",
        reps: "100",
        rds: "1",
        weight: "Body Weight"
        },
        "AirSquats": {
        name:"Air Squats",
        reps: "100",
        rds: "1",
        weight: "Body Weight"
        }
      },
    },
    {
      namedWork: "Barbara",
      finalScore: "0:00",
      movements: {
      "PullUps": {
      name: "Pull Ups",
      reps: "20",
      rds: "5",
      weight: "Body Weight"
      },
      "PushUps": {
      name:"Push Ups",
      reps: "30",
      rds: "5",
      weight: "Body Weight",
      },
      "SitUps": {
      name:"Sit Ups",
      reps: "40",
      rds: "5",
      weight: "Body Weight"
      },
      "AirSquats": {
      name:"Air Squats",
      reps: "50",
      rds: "5",
      weight: "Body Weight"
      },
     }
    },
    {
      namedWork: "Chelsea",
      finalScore: "0",
      movements: {
        "PullUps": {
          name: "Pull Ups",
          reps: "5",
          rds: "30",
          weight: "Body Weight"
        },
        "PushUps": {
          name:"Push Ups",
          reps: "10",
          rds: "30",
          weight: "Body Weight",
        },
        "AirSquats": {
          name:"Air Squats",
          reps: "15",
          rds: "30",
          weight: "Body Weight"
        },
      }
    },
    {
      namedWork: "Cindy",
      finalScore: "0",
      movements: {
        "PullUps": {
          name: "Pull Ups",
          reps: "5",
          rds: "1",
          weight: "Body Weight"
        },
        "PushUps": {
          name:"Push Ups",
          reps: "10",
          rds: "1",
          weight: "Body Weight",
        },
        "AirSquats": {
          name:"Air Squats",
          reps: "15",
          rds: "1",
          weight: "Body Weight"
        },
      }
    },
    {
      namedWork: "Diane",
      finalScore: "0:00",
      movements: {
        "Deadlift": {
            name: "Deadlift",
            reps: "21-15-9",
            rds: "3",
            weight: "225"
          },
        "HandstandPushUps": {
            name: "Handstand Push Ups",
            reps: "21-15-9",
            rds: "3",
            weight: "Body Weight"
          },
        }
     },
     {
      namedWork: "Elizabeth",
      finalScore: "0:00",
      movements: {
          "Clean": {
            name: "Clean",
            reps: "21-15-9",
            rds: "3",
            weight: "135"
          },
          "RingDips": {
            name: "Ring Dips",
            reps: "21-15-9",
            rds: "3",
            weight: "Body Weight"
          }
        }
      },
      {
        namedWork: "Fran",
        finalScore: "0:00",
        movements: {
          "Thrusters": {
            name: "Thrusters",
            reps: "21-15-9",
            rds: "3",
            weight: "95"
          },
          "PullUps": {
            name: "Pull Ups",
            reps: "21-15-9",
            rds: "3",
            weight: "Body Weight"
          }
        },
      }
  ];
  this.namedList = {};
  this.namedList.named = named;
  // //Working on displaying the right properties of each movement
  // this.repsRounds = function(){
  //   if($('.naming1').val() === ""){
  //     return false;
  //   }
  //   else if($('.naming1').val()){
  //     return true;
  //   }
  // }
  //Checking the Movement Value to display proper inputs
  // this.weighted = function(){
  // if($(".naming1").val().indexOf("Clean") > -1){
  //   return true;
  // }
  // else if($(".naming1").val().indexOf("Snatch") > -1){
  //   return true;
  // }
  // else if($(".naming1").val().indexOf("Jerk") > -1){
  //   return true;
  // }
  // else if($(".naming1").val().indexOf("Press") > -1){
  //   return true;
  // }
  // else if($(".naming1").val().indexOf("Kettle") > -1){
  //   return true;
  // }
  // else if($(".naming1").val().indexOf("Dumbbell") > -1){
  //   return true;
  // }
  // else {
  //   return false;
  // }
  // }

   // if($(".naming1").val().indexOf("Clean") > -1){
     // return true;
   // }
    // else if($(".naming1").val().indexOf("Snatch") > -1){
    //   return true;
    // }
    // else if($(".naming1").val().indexOf("Jerk") > -1){
    //   return true;
    // }
    // else if($(".naming1").val().indexOf("Press") > -1){
    //   return true;
    // }
    // else if($(".naming1").val().indexOf("Kettle") > -1){
    //   return true;
    // }
    // else if($(".naming1").val().indexOf("Dumbbell") > -1){
    //   return true;
    // }
    //else {
    //  return false;
    //}
  //}

});//End Controller
