# meteor-check-constructor-issue
Repo demonstrating issue with meteor Check when used in conjunction with Meteor.call and constructors.

To see the issue, note that in main.js::Template.hello.onCreated, we create an object, example, that is an instance of the Example class.
When we log that object immediately after creating it, we see that it is an instance of the Example class.
However, when we log that object again after using Meteor.call, we see that example is now an instance of the Object class.

This issue becomes particularly noticable when using Meteor.check(), which can match against constructors.
If Meteor.call loses information about the argument's type, then Meteor.check()'s constructor-based matching fails.

I've checked the documentation at https://docs.meteor.com/api/methods.html#Meteor-call, and I haven't see anything to indicate that
Meteor.call is supposed to lose this information, so I am filing this as a bug.
If this is already documented, is intentional, and I just failed to read that, apologies!

There is also a small thread on StackOverflow about this issue, but no solutions offered: http://stackoverflow.com/questions/36530084/meteor-check-object-is-instance-of-class

