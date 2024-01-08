+++
title = "Logic in Math"
tags = ["mathematics", "logic"]
draft = false
+++

## Abstract
A quick guide to understanding mathematical logic and its purpose on laying the foundations of mathemetics.

## 1 Sentencial Logic

Propositions are statements that must be either true or false. We generally indicate propositions with the letters *P*, *Q*, *R*, and so on.

**Example**. Let *P* be "Felipe is hungry" and let *Q* be "Felipe is lazy".

### 1.1 Connective Symbols

We can use words to form more complex statements, here's our first three connective symbols and their meaning:

| Symbols | Meaning |
| --- | --- |
| &and; | and |
| &or; | or |
| &not; | not |

If *P* and *Q* stand for two statements, then we'll write *P*&and;*Q* for "*P* and *Q*," *P*&or;*Q* for "*P* or *Q*," and &not;*P* for "not *P*" or "*P* is false."

**Example**. Let *P* be "Felipe is short" and let *Q* be "Felipe is quiet". *P*&and;*Q* means "Felipe is short and quiet", *P*&and;&not;*Q* means "Felipe is short but not quiet".

### 1.2 Truth Tables

To better understand how words such as *and*, *or*, and *not* affect the validity of a statement, we can make use of truth tables.

| *P* | *Q* | *P*&and;*Q*
| --- | --- | --- |
|  T  |  T  |  T  |
|  T  |  F  |  F  |
|  F  |  T  |  F  |
|  F  |  F  |  F  |

We summarize all possible combinations in the table above, since we assumed *P* and *Q* can only be either true or false, *P*&and;*Q* is only true when both *P* and *Q* are true, otherwise it's false.

The table for &not;*P* is also quite easy to construct since for &not;*P* to be true, *P* must be false.

| *P* | &not;*P* |
| --- | --- |
|  T  |  F  |
|  F  |  T  |

The same can be done for a table for *P*&or;*Q*:

| *P* | *Q* | *P*&or;*Q*
| --- | --- | --- |
|  T  |  T  |  T  |
|  T  |  F  |  T  |
|  F  |  T  |  T  |
|  F  |  F  |  F  |

It's important to note that in mathematics *or* always refers to inclusive or, meaning that in the truth table above
when *P* and *Q* are both true we also consider this to be true, in the case of a exclusive or that would evaluate to false.

**Example**. Let's make a truth table for the formula &not;(*P*&and;&not;*Q*).

| *P* | *Q* | *P*&and;&not;*Q* | &not;(*P*&and;&not;*Q*)
| --- | --- | --- | --- |
|  T  |  T  |  F  |  T  |
|  T  |  F  |  T  |  F  |
|  F  |  T  |  F  |  T  |
|  F  |  F  |  F  |  T  |

## 2 Universal and Existential Quantifiers

We can use quantifiers to put bounds on what values are to be considered on a 
given proposition.

| Symbols | Meaning |
| --- | --- |
| &forall; | For all |
| &exist; | There exists |


Let's take for example the formulas &forall;*xP*(x) and &exist;*xP*(x), they
means "For all values of *x*, *P*(x) is true" and "There exists a value of *x*, such that *P*(x) is true" respectively.

