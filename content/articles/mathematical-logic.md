+++
title = "Mathematical Logic"
tags = ["mathematics", "logic"]
draft = false
+++

## **Abstract**

A quick guide to understanding mathematical logic and its purpose on laying the foundations of mathemetics.

{{< section "2" "1. Propositions" >}}

Propositions are statements that must be either true or false. We generally indicate propositions with the letters *P*, *Q*, *R*, and so on.

**Example**. Let *P* be "Felipe is hungry" and let *Q* be "Felipe is lazy".

{{< section "2" "2. Operators" >}}

Operators can act on propositions, allowing us to form more complex statements. Some operators are &not;, &and;, &or;, and &oplus;, being negation, conjunction, disjunction, and exclusive disjunction respectively.

- The Negation operator &not; simply negates whatever value the proposition already has, if *P* is true than *&not;P* becomes false and vice versa.
- The Conjunction operator &and; is only true when both *P* and *Q* are true, otherwise it's always false.
- The Disjunction operator &or; is true when either *P* or *Q* are true, it's only false when both are false.
- The Exclusive Disjunction operator &oplus; is true when either *P* or *Q* are different and false when they're equal.

**Example**. &not;*P* means "Felipe is not hungry" and *P*&and;*Q* means "Felipe is hungry and he's lazy".

{{< section "2" "3. Truth Tables" >}}

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

We can use truth tables to check if a statement is valid, consider the following example:

It will either rain or snow tomorrow.<br>
It’s too warm for snow.<br>
Therefore, it will rain.<br>

This has the logical form of:

{{< logic >}}

P&or;Q
<br>
&not;Q
<br>
<div class="border"></div>
&there4;P

{{< /logic >}}

Let *P* stand for "It will rain tomorrow" and let *Q* stand for "It will snow tomorrow".

|*P*|*Q*|*P&or;Q*|*&not;Q*|*P*|
|---|---|---|---| --- |
| F | F | F | T | F |
| F | T | T | F | F |
| T | F | T | T | T |
| T | T | T | F | T |

From left to right we have, *P* and *Q* (propositions), *P&or;Q* and *&not;Q* (premises), and finally *P* (conclusion).

By looking at the truth table (third line) we can see that when both our premises are true, our conclusion is also true,
so we can conclude that the statement is valid.