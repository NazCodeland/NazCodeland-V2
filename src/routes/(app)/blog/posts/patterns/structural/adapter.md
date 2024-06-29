---
title: Adapter Design Pattern
created: June 25th, 2024
updated:
description:
  In OOP, the Adapter Design Pattern acts as a wrapper over an exsiting class's
  interface by providing a new interface that has a 1:1 schema to the classes
  funcitonality that it wraps. This is usually done when the original interface
  is not compatible with external code that wants to interact with the class.
  Essentially, the adapter design pattern provides a compatible interface
  between otherwise incompatible interfaces.
tags: ['javascript', 'python']
categories: ['design patterns']
---

<script lang="ts">
    import Link from '$lib/elements/Link.svelte';
</script>

## Explanation

In OOP, the Adapter Design Pattern provides a new interface for an existing class’s interface while maintaining the old class’s functionality (properties and methods) through the new interface. This preservation of the old class’s functionality prevents existing code from becoming incompatible with the new interface. This is the value it offers: the ability to provide compatibility between otherwise incompatible interfaces, which allows a codebase to undergo changes incrementally due to various reasons, such as refactoring or the introduction of new features, without causing existing code to break or require a larger refactoring.

<br/>

<Link href="https://en.wikipedia.org/wiki/Adapter_pattern" linkText="Wikipedia article" block={true} /> says:

<!-- [Wikipedia article ](https://en.wikipedia.org/wiki/Adapter_pattern) says: -->

> "In software engineering, the adapter pattern is a software design pattern (also
> known as wrapper, an alternative naming shared with the decorator pattern) that
> allows the interface of an existing class to be used as another interface. It is
> often used to make existing classes work with others without modifying their
> source code."

<br/>

## Analogy

If we look at human language as an interface through which we can communiate
with others, then a translator can be thought of as an adapter that provides
an interface through which different individuals (classes) with incompatible
interfaces (languages) can communicate with each other. What's important here
is that the individuals do not need to learn a new language (modify their
source code) to be able to communicate with each other.

  <br/>

## Code Example

```js
class Person {
	constructor(name, characteristics) {
		this.name = name;
		this.nativeLanguage = characteristics.nativeLanguage;
	}
	speak(message) {
		console.log(`${this.name}: ${message}`);
		return {
			name: this.name,
			nativeLanguage: this.nativeLanguage,
			message: message
		};
	}
	hear(message) {
		if (this.nativeLanguage === message.nativeLanguage) {
			console.log(
				`${this.name}: Hello ${message.name}, nice to meet you, I am ${this.name}.`
			);
		} else {
			console.warn(`${this.name}: No hablo inglés.`);
		}
	}
}

class Translator extends Person {
	constructor(name, characteristics) {
		super(name, characteristics);
		this.translatableLanguages = characteristics.translatableLanguages;
	}

	translate(messageObj) {
		if (
			this.nativeLanguage === messageObj.message.nativeLanguage ||
			this.translatableLanguages.includes(messageObj.message.nativeLanguage)
		) {
			if (messageObj.to.nativeLanguage === 'Spanish') {
				return `
				${this.name}(Translator): ${messageObj.to.name} says: Hola ${messageObj.message.name}, mucho gusto, soy ${messageObj.to.name}.
				Which means, Hello ${messageObj.message.name}, nice to meet you, I am ${messageObj.to.name}.
          `;
			} else if (messageObj.to.nativeLanguage === 'French') {
				return `${this.name}: Bonjour ${messageObj.name}, enchanté de te rencontrer, je suis ${this.name}.`;
			}
		} else {
			console.log('Unable to translate this language');
		}
	}
}

let Bob = new Person('Bob', { nativeLanguage: 'English' });
let Alice = new Person('Alice', { nativeLanguage: 'English' });
let Messi = new Person('Messi', { nativeLanguage: 'Spanish' });

let BobsMessage = Bob.speak(`Hello, my name is Bob.`);
Alice.hear(BobsMessage);
Messi.hear(BobsMessage);

let Belen = new Translator('Belen', {
	nativeLanguage: 'Spanish',
	translatableLanguages: ['French', 'English']
});

let translatedMessage = Belen.translate({ message: BobsMessage, to: Messi });
console.log(translatedMessage);
```

```python
print("Hello World!")
```

```css
.container {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f0f0f0;
}
```

```html
<div class="container">
	<h1>Hello, World!</h1>
</div>
```

<style>
  a {
    position: relative;
    z-index: 10;
    display: inline-block;
    outline: 0;
    transition-delay: 0s;
}

a::before {
    position: absolute;
    bottom: 0;
    height: 0.1em;
    width: 100%;
    /* background-color: var(--primaryColor); */
    background-color: theme('colors.primaryColor');
    transition: height 0.2s;
    content: '';
}

a:hover {
    color: var(--canvas);
}

a:hover::before {
    z-index: -10;
    height: 100%;
    background-color: theme('colors.primaryColor');
}

a:focus-visible {
    color: var(--markText);
}

a:focus-visible::before {
    z-index: -10;
    height: 100%;
    background-color: theme('colors.primaryColor');
}



</style>
