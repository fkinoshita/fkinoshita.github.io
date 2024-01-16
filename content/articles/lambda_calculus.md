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

## Substitution

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

That weird notation in the second line is called *Beta Reduction*, it's just a fancy one of saying substitution. We denote it with the form (output)[parameter := input], meaning to substitute the parameter with the input on the output. 

* First we denote with *Beta Reduction* that (x) will be substituted with (y)
* We then drop the first argument (λx)
* Apply the substitution to get (y) and that's our final answer.

Let's look at some more examples:

```
(λx.(x y))(λz.z)
(x y)[x := λz.z]
((λz.z) y)
(z)[z := y]
y
```

This one was also pretty straight-forward:

* First we denote with *Beta Reduction* that (x) will be substituted with (λz.z)
* We then apply the substitution to get ((λz.z) y)
* Denote again that (z) will be substituted with (y)
* We apply the substitution to get just (y), our final answer.

What about this next one:

```
((λx.(x x))(λx.(x x)))
(x x)[x := λx.(x x)]
((λx.(x x))(λx.(x x)))

```

When trying to reduce this expression we end up going around in circles, it fails to reduce using *Beta Reduction*.

## Conversion

When applying two lambda expression that contain the same variable name, something like this:

```
(λx.xx)(λx.x)
```

This can be quite confusion because we're substituting x with another x and this can get quite messy on bigger expression, luckily we can use what's called *Alpha Conversion*, you just change one of them to use a new variable name. 

```
(λx.xx)(λx.x)
(λx.xx)(λy.y)

(λx.x)x
(λx.x)x'

```

Some people prefer to use new letters and some people prefer to append a `'` to the end, you can use whichever method you prefer.

## Building Upon Lambdas

Now that we're a bit more familiar with lambda expressions and how they work we can start to built more complex objects on top of our simple constructs.

It would be pretty useful if we could have simple logic in our little lambda language, producing true or false values.

Since we don't have anything besides lambda expressions we can make everything up on our own!

Let's define the value of TRUE to be the following expression:

```
TRUE := (λx.λy.x)
```

It is a function that takes two arguments and just returns the first one, and since FALSE is the
opposite of TRUE, let's define it as such:

```
FALSE := (λx.λy.y)
```

When testing TRUE or FALSE we can see that they're working exactly as expected:

```
(λx.λy.x)(a)(b)
(λy.x)(b)[x := a]
(λy.a)(b)
(a)[y := b]
(a)

(λx.λy.y)(a)(b)
(λy.y)(b)[x := a]
(λy.y)(b)
(y)[y := b]
(b)

```

