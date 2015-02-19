[![Stories in Ready](https://badge.waffle.io/sujesharukil/punchcardjs.png?label=ready&title=Ready)](https://waffle.io/sujesharukil/punchcardjs)
## Synopsis

PunchcardJS is a JavaScript library that will make it easy to switch between AJAX calls and mock ajax data. It is driven by simple configuration such that, a flip of switch is all that will be required to change between mock data calls and making actual ajax calls without having to modify your caller code.

### This is an early pre-alpha commit. This should not be used in production or for development yet.

## Dependencies
Coming soon

## Code Example

Coming soon.

## Motivation

When working on the front end and co-ordinating with API developers, it often came to a point where I was creating mock data, working with the mock data and finally when the API is ready, switching to actual AJAX calls. It was time consuming to change the data and at any point if you needed to change back to mock data to test your JS code, it meant changing code again, in multiple places where the ajax call was being made and possibly any dependent ajax calls. To top it all, I was also dealing with multiple, chained ajax calls.

This lead to the idea of PunchcardJS. A system where you pre-define the AJAX calls you will make, pre-define mocking (Using a simple function to return mock data or the in-built generators to generate data (1000s of objects, numbers, dates, lorem ipsum .etc.). All calls will return promise, enables code readability, better separation of concerns and most important an easy way to switch between mock and actual server calls without having to change the consumer code.

## Installation

##### NOTE: This library is currently in its early stages of development

## API Reference

Coming soon

## Tests

Coming soon
