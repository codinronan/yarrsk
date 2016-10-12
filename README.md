# yarrsk
Yet Another React Redux Starter Kit

# Why, God, Why?
Why do we need Yet Another React Redux Starter Kit? Because, the more the merrier!

No, more seriously: because there is actually a wide variety of combinations of React with other technologies, and a wide variety of reasons and use cases for that variety. This is a common combination I use in my professional work, 
and I keep having to rebuild it by hand every time I start a new project. I finally decided to cut out the wasted time.

# Opinionated
Yes, this boilerplate is OPINIONATED. You heard me. I like using [redux-saga](https://github.com/yelouafi/redux-saga) with React & Redux. If you don't know about [Event Sourcing, go read about it now and think about how it solves alot of architectural problems that I have seen even senior developers solve over and over again in suboptimal ways](http://blog.jonathanoliver.com/cqrs-sagas-with-event-sourcing-part-i-of-ii/). We tried redux-thunk, and it is a fair piece of software. But once our application reached a certain scale, the thunks got out of hand and we needed something more modular, more detached, with the execution of the side effects closer to their domains (but not all in the same file - they got very, very long).

Obviously there are 10,000 ways to skin a cat and it is up to each development team to decide what works for them. In my experience this has worked very very well, and given the obvious overlap with state maintenance in a browser vs. state maintenance in a set of connected web services (think Apache Kafka), the connection here is obvious. The pattern works.

Sagas are built in Javascript via an ES6 feature called [Generators](http://gajus.com/blog/2/the-definitive-guide-to-the-javascript-generators). I've used them extensively in other languages, C# and Java most notably, and was ecstatic when the ES6 spec was finalized to include them. Even more ecstatic when Babel completed their support for them :D

# Stack
- React (obviously)
- Redux (obviously)
- react-router
- react-router-redux
- redux-saga
- babel
- eslint
- karma + mocha + chai

# File structure
Believe it or not, this is a religious subject in the React community. A set of "standard" practices has emerged around File Type First (FTF) organization, which are reflected in this project. However, there are a variety of alternatives, including Domain First (package things roughly how your site navigation is structured) and Resolution Order (package closely related components together in nearby folders). As I said, this is just one way to do it. It works for us even in a very large (50 page) project.

# Installing
``` bash
> git clone git@github.com:ronanwize/yarrsk.git
> cd yarrsk
> npm install
> npm start && open http://localhost:3000
```

If you'd like a treat, try [yarn](https://github.com/yarnpkg/yarn) instead of npm. You'll be amazed.

For testing: 
``` bash
> npm test
```

# TODO: 
Add istanbul for code coverage. Have to extract our scripts for running this into a simpler form for this project.

# License
MIT if you insist, but really this is available anywhere.
