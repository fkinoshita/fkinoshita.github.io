+++
title = 'Lambda Calculus'
date = 2024-01-14T16:27:01-03:00
draft = true
+++

Besides [Turing Machines](https://en.wikipedia.org/wiki/Turing_machine) there's an equivalent model of
computation called the Lambda Calculus (sometimes written as λ-calculus).

If you think something here is wrong or if you want to chat about this, feel free to contact me on
<a href="https://mastodon.social/@fkinoshita" target="_blank" rel="me">Mastodon</a>,
<a href="https://matrix.to/#/@fkinoshita:gnome.org" target="_blank">Matrix</a>, or
send me <a href="https://letterbird.co/kinofhek" target="_blank">email</a>.

## Definition

The λ-calculus is recursively defined as:

* An \<expression\> being either a \<name\>, a \<function\>, or an \<application\>.
* A function being λ\<name\>.\<expression\>
* An application being \<expression\>\<expression\>.

A name is a character or string representing a parameter. For example the letters: a, b, c, and so on.

Now that we got the basics down let's create a function that takes an argument and returns that same argument, also known as the identity function:

```
λx.x
```

Applying it to an argument y we get back that same argument:

```
(λx.x)y => [y/x]x => y
```

What we just did there is called lambda substitution, replacing the *free* variable x with the argument y. Note that
the variable right next to the λ is a bound variable, we're replacing the other x in the function body.