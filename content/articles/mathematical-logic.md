+++
title = "Mathematical Logic"
tags = ["mathematics", "logic"]
lastmod = "2023-12-18"
draft = false
+++

## **Abstract**

A quick guide to understanding mathematical logic and its purpose on laying the foundations of mathemetics.

<h2 class="centered">1. Propositions</h2>

Propositions are statements must be either true or false. We generally indicate propositions with the letters *P*, *Q*, *R*, and so on.

#### Example

Let *P* be "Felipe is hungry" and let *Q* be "Felipe is lazy", either statements can only be true or false, not anything in between.

### Operators

Operators can act on propositions, allowing us to form more complex statements. Some operators are &not;, &and;, &or;, and &oplus;, being negation, conjunction, disjunction, and exclusive disjunction respectively.

#### Example

&not;*P* means "Felipe is not hungry" and *P*&and;*Q* means "Felipe is hungry and he's lazy".

### Truth Tables

Truth tables allow us to see all possible proposition combinations, the amount of lines is always equal to 2<sup>*n*</sup>, where *n* is all propositions used.

|*P*|*&not;P*|
|---|---|
| F | T |
| T | F |

|*P*|*Q*|*P&and;Q*|
|---|---|---|
| F | F | F |
| F | T | F |
| T | F | F |
| T | T | T |

|*P*|*Q*|*P&or;Q*|
|---|---|---|
| F | F | F |
| F | T | T |
| T | F | T |
| T | T | T |

|*P*|*Q*|*P&oplus;Q*|
|---|---|---|
| F | F | F |
| F | T | T |
| T | F | T |
| T | T | F |
