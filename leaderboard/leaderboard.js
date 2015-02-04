PlayersList = new Mongo.Collection('players');

console.log("Running on both");

if (Meteor.isClient) {
  Template.leaderboard.helpers({
    'player': function() {
      return PlayersList.find();
    },
    'playerCount': function() {
      return PlayersList.find().count();
    }
  });
}

if (Meteor.isServer) {
  console.log("Just on the server");
}