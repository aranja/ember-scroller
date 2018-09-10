ember-scroller
==============================================================================

Animate scroll to an element using rAF.

Installation
------------------------------------------------------------------------------

```
ember install ember-scroller
```


Usage
------------------------------------------------------------------------------

Use the `scroller` service to scroll to an element.

```js
  scroller: service(),

  actions: {
    scroll() {
      const element = document.getElementById('scroll-to');
      get(this, 'scroller').scrollTo(element);
    }
  }
```

Add elements as offsets (such as a fixed header) and they are taken into account even if they change height on different viewports.

```js
    const headerElem = document.getElementById('header');
    scroller.addOffset(headerElem);
```


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/aranja/ember-scroller.git`
* `cd ember-scroller`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
