import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Example } from '../imports/api/example.js'


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  var example = new Example(5);
  console.log(example); // note that example currently has the Example constructor
  Meteor.call('Demo.checkFailure', example);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
