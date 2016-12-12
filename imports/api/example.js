import { Meteor } from 'meteor/meteor';
import { Match, check } from 'meteor/check';

export function Example(someField) {
    this.someField = someField;
}

Meteor.methods({
    'Demo.checkFailure'(example) {
        console.log(example); // note that example now has the default object constructor.
        check(example, Example);
    }
})