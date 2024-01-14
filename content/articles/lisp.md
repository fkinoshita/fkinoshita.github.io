+++
title = 'Lisp'
date = 2024-01-14T05:11:03-03:00
+++

The name Lisp comes from **Lis**t **P**rocessing and that's just about what you really need to do some computation, lists!

If you think something here is wrong or if you want to chat about this, feel free to contact me on
<a href="https://mastodon.social/@fkinoshita" target="_blank" rel="me">Mastodon</a>,
<a href="https://matrix.to/#/@fkinoshita:gnome.org" target="_blank">Matrix</a>, or
send me <a href="https://letterbird.co/kinofhek" target="_blank">email</a>.

## Atoms

These are the data types you have available on Lisp.

| Data Types | Explanation |
| ---        | ---         |
| Integer    | The number 5, 0, or -120. |
| Symbol     | a name made out of a string of characters. Example: FOO, BAR, or ONE-TWO. |
| Nil        | Representing "nothing". |
| Pair       | A pair have two elements, they can be integers, symbols, nil or another pair. Example: (X . Y).

From here we can start to mix these up to create more complex structures.

## Pairs

We can denote pairs with what's called *dot-notation*, following the form: (\<left-part\> . \<right-part\>). The \<left-part\> is also known as *car* and the \<right-part\> as *cdr*.

*[Why those weird names?](https://en.wikipedia.org/wiki/CAR_and_CDR)*

To access the *car* or *cdr* of a pair, we can use two built-in functions provided by Lisp. As you might have guessed, these functions are also called *car* and *cdr*.


```
> (CAR (X . Y))
X
> (CDR (A . (B . C)))
(B . C)
```

## Lists

Lists are one of the most useful data types in Lisp. We can represent more complex data structures like
key-value pairs and trees, but most of the time we'll use them a simple linear lists.

As we saw in the previous section, a pair may have another pair as one of its elements, which might
look something like this:

```
(A . (B . C))
((X . Y) . Z)
```

These pairs are looking an awful lot like lists, right?

To cross the gap and make pairs and lists distinct, let's end our chain of pairs with the last pair having its *cdr* be NIL.

```
(A . (B . (C . NIL)))
```

We can now used what's called *list-notation* to remove the extra parenthesis and dots required by *dot-notation*.

```
(A B C)
```
