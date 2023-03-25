---
title: Post One
date: '2021-12-14'
---

Building a CRUD Application with Django
Create a simple CRUD application using the Django web framework. This is just extra text to make this sentence go into two paragraphs instead of one. Have a good day!

One of the delights of working with Ruby and jQuery is the ability to chain methods, enabling you to conveniently invoke multiple methods on the same target. In jQuery, for example, most methods return a jQuery object, so you can build a chain of methods where every new method operates on the previous target. This enables you to update some styles, run an animation, and update an attribute, all without querying for that element over and over again:

    $(".menu")
    .css("color", "#fff")
    .data("mode", "light")
    .fadeIn();

Short and sweet. If you’ve updated the styles of an object with vanilla JavaScript, you might’ve been annoyed about the fact that you can’t chain style changes, and so you have to do something like this:

    let menu = document.querySelector(".menu");
    menu.style.color = "#fff";
    menu.style.backgroundColor = "#000";
    menu.style.opacity = "1";

There are a few different ways of making this more convenient, but the other day I started thinking about if it would be possible to use a Proxy object (at the time of writing, global support is at 92.76%) to enable chaining of style changes. Turns out, it’s relatively easy. We’ll walk through how to create a light-weight Proxy handler that will enable us to shorten the code above to this:

    style(".menu")
    .color("#fff")
    .backgroundColor("#000")
    .opacity("1");

We’ll use roughly the same strategy as jQuery does: we’ll fetch the style object of an element and wrap it with a Proxy in order to intercept (trap) all get calls to that style object, take the accessed property and update its value if a value is passed, and then return the Proxy handler wrapping the style object again, enabling us to build an infinite chain of commands.

Since we’ll repurpose the get method to also act as a setter, we’ll retain the get functionality by returning the value of a property if you don’t pass any arguments to the function (i.e. you’ll get a value through style(".menu").color() rather than style(".menu").color). Here’s the gist of the technique:

Let’s break it down, and quickly walk through how a Proxy works.

It’s a trap!
The first aspects to understand about using a Proxy are handlers and traps. We can create a handler to trap a series of operations, e.g. get(), set(), and apply(). In essence, we’ll get a chance to intercept those operations on the object we’re wrapping and do with them whatever we want—we can return different values depending on some logic, or simply forward the operation to the original target.

As a simple example, we can always return the same value regardless of what property you try to access, even if no property has been set on the original object:

Always return a function
This enables us to completely change how an object works. To enable chaining for the style object, we’ll expand get to also work as set. We’ll still only trap get, but rather than returning the value of a property when it’s accessed we’ll return a function that returns the value of the property only if the function is invoked without any arguments. If an argument is passed, we’ll use it to update that property’s value.

Let’s start by just getting the basics into place. Let’s create a new handler called getProxy, and create a get trap, where we always return a function. Thus if we just log a property, we’ll get a function. But if we invoke that function, we’ll see what it returns (in this case “test”):

Use the function to get and set values
Inside our new function, we can check if an argument is being passed to it when it’s invoked. If something is passed, we can use that argument to update the property. If no arguments are passed we can simply return the value of that property, basically maintaining the original get functionality while expanding it with a set option.

Let’s create a new Proxy, this time called styleProxy. We’ll check if something is being passed to it, and get and set accordingly. Our proxy handler is also being passed an object (the object we’re wrapping and intercepting) and a property argument (the property we’re operating on), and we can use these two to operate on the original target.

This enables our handler’s get method to act both as a setter and getter:

    style(".menu").color("#fff"); // Gets a function which updates color to "#fff"
    style(".menu").color();       // No arguments passed, just returns "#fff"

Note that since we’re not creating a trap for the set operation, we can still set a property’s value by assigning a value to it directly:

    // Works like expected
    style(".menu").color = "#fff";

Return the style object wrapped in a proxy
Now that we’re in control of what’s being returned after we update a property, we can simply return the original style object wrapped in our Proxy handler if an argument is passed, completing our chaining method:

When we use method chaining, then, this is what’s happening behind the scenes:

    style(".menu")              // Returns the style object in a Proxy
    .color("#fff")            // Updates color and returns a Proxy
    .backgroundColor("#000")  // Updates bgColor and returns a Proxy
    .opacity("1");            // ... and so on so forth

Here’s the solution in full:

I can’t confidently say that I recommend this approach—and I won’t be using it on this site anytime soon due to the just-too-low browser support, but I find it fascinating how bendable JavaScript is, and how with the Proxy API we can go even further.

Django
Python
Web development
Published in: css / javascript / tutorial 19/09/2019
