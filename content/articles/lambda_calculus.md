+++
title = 'Lambda Calculus'
date = 2024-01-14T16:27:01-03:00
+++

Besides [Turing Machines](https://en.wikipedia.org/wiki/Turing_machine), there's an equivalent model of
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

## Practice

Now that we got the basics down, let's create a function that takes an argument and returns that same argument, also known as the identity function:

```
λx.x
```

Applying it to an argument y we get back that same argument:

```
(λx.x)y
(x)[x := y]
y
```

That weird notation in the second line is called *Beta Reduction*, it follows the form (output)[parameter := input]. In the last example the output was x, the parameter was also x, and the input was y.

When applying the reduction we drop the first argument (λx) and we substitute the output (x) with our input (y).

Let's look at some more examples:

```
(λx.(x y))(λz.z)
(x y)[x := λz.z]
((λz.z) y)
(z)[z := y]
y
```

This one was pretty straight-forward:

* first we denote with *Beta Reduction* that x will be substituted with λz.z
* then we apply the substitution to get ((λz.z) y)
* we then substitute z with y and get y as our final answer.

What about this next one:

```
((λx.(x x))(λx.(x x)))
(x x)[x := λx.(x x)]
((λx.(x x))(λx.(x x)))

```

When trying to reduct this expression we end up going around in circles, it fails to reduce using *Beta Reduction*.
