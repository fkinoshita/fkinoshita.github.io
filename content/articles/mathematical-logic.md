+++
title = "Logic in Math"
tags = ["mathematics", "logic"]
draft = false
markup = "mmark2"
+++

Let's understand the building blocks of what makes mathematics work.
Here's a quick guide to mathematical logic including sentential logic, set theory, and proofs.

If you think something here is wrong or want to chat about this, feel free to contact me on
<a href="https://mastodon.social/@fkinoshita" target="_blank" rel="me">Mastodon</a>,
  <a href="https://matrix.to/#/@fkinoshita:gnome.org" target="_blank">Matrix</a>, or
  send me <a href="https://letterbird.co/kinofhek" target="_blank">email</a>.

## Deductive Reasoning

Deductive reasoning is essential to understand how proofs work.

Here's a few examples of deductive reasoning:
- It will either rain or snow tomorrow.<br>
  It’s too warm for snow.<br>
  Therefore, it will rain.
- Today is either Monday or Thursday.<br>
  Today is not Monday.<br>
  Therefore, today is Thursday.
- If today is raining, then I don't have to go to work tomorrow.<br>
  It's raining.<br>
  Therefore, I don't have to go to work tomorrow.

Here we have two kind of statements, *premises* and *conclusions*, from the premises
we can make conclusions about those statements.

Those statements must be either true or false, and nothing in between. We generally indicate them with the letters *P*, *Q*, *R*, and so on.

## Logical Connectives

We can use words to form more complex statements, here's our first three connective symbols and their meaning:

| Symbols | Meaning |
| --- | --- |
| &and; | and |
| &or; | or |
| &not; | not |

If *P* and *Q* stand for two statements, then we'll write *P*&and;*Q* for "*P* and *Q*," *P*&or;*Q* for "*P* or *Q*," and &not;*P* for "not *P*" or "*P* is false."

**Example**. Let *P* be "Felipe is short" and let *Q* be "Felipe is quiet". *P*&and;*Q* means "Felipe is short and quiet", *P*&and;&not;*Q* means "Felipe is short but not quiet".

## Truth Tables

To better understand how words such as *and*, *or*, and *not* affect the validity of a statement, we can make use of truth tables.

{{< table "truth" >}}

| *P* | *Q* | *P*&and;*Q*
| --- | --- | --- |
|  T  |  T  |  T  |
|  T  |  F  |  F  |
|  F  |  T  |  F  |
|  F  |  F  |  F  |

{{< /table >}}

We summarize all possible combinations in the table above, since we assumed *P* and *Q* can only be either true or false, *P*&and;*Q* is only true when both *P* and *Q* are true, otherwise it's false.

The table for &not;*P* is also quite easy to construct since for &not;*P* to be true, *P* must be false.

{{< table "truth" >}}

| *P* | &not;*P* |
| --- | --- |
|  T  |  F  |
|  F  |  T  |

{{< /table >}}

The same can be done for a table for *P*&or;*Q*:

{{< table "truth" >}}

| *P* | *Q* | *P*&or;*Q*
| --- | --- | --- |
|  T  |  T  |  T  |
|  T  |  F  |  T  |
|  F  |  T  |  T  |
|  F  |  F  |  F  |

{{< /table >}}

It's important to note that in mathematics *or* always refers to inclusive or, meaning that in the truth table above
when *P* and *Q* are both true we also consider this to be true, in the case of a exclusive or that would evaluate to false.

**Example**. Let's make a truth table for the formula &not;(*P*&and;&not;*Q*).

{{< table "truth" >}}

| *P* | *Q* | *P*&and;&not;*Q* | &not;(*P*&and;&not;*Q*)
| --- | --- | --- | --- |
|  T  |  T  |  F  |  T  |
|  T  |  F  |  T  |  F  |
|  F  |  T  |  F  |  T  |
|  F  |  F  |  F  |  T  |

{{< /table >}}

## Universal and Existential Quantifiers

We can use quantifiers to put bounds on what values are to be considered on a
given proposition.

| Symbols | Meaning |
| --- | --- |
| &forall; | For all |
| &exist; | There exists |


Let's take for example the formulas &forall;*xP*(x) and &exist;*xP*(x), they
means "For all values of *x*, *P*(x) is true" and "There exists a value of *x*, such that *P*(x) is true" respectively.

