<h1 align="center">
  <img
    lt="orthodox"
    width="404"
    height="472"
    src="https://cdn.rawgit.com/studio-b12/orthodox/4238d1f/logo.svg"
    id="/"
  />
</h1>

**Styles as a JS object**  
**– a strong, universal specification**




&nbsp;

##                                                                 <a id="/tldr" >TL;DR                                                                      </a>

There’s this popular and powerful concept of describing styles as an object in JS:

```js
{
  height: '30px',
  width: '20px',
}
```

…which later gets compiled into a string of styles:

```
height: 30px;
width: 20px;
```

[A lot of tools](#/tools) do this – but they handle some edge cases differently. This spec defines a common ground compatible with all of these tools.

Write orthodox styles – they’ll work in *[React](https://facebook.github.io/react/)*, [*elm*](http://elm-lang.org/) and [everywhere](#/tools)!




&nbsp;

##                                                               <a id="/format" >The format                                                                 </a>

It just boils down to three simple rules:

1. One object maps to one string of style properties separated by semicolons.

  ```js
  const myOrthodoxStyle = {width: '30px'};

  // In React + JSX:
  ReactDOMServer.renderToString(<div style={myOrthodoxStyle}></div>);
  //» '<div style="width:30px;"></div>'

  // In Restyle:
  restyle({'.my-class': myOrthodoxStyle});
  //» '.my-class{width:30px;}'
  ```

2. Whenever you write a property with a dash in its name, just type the dash.

  ```js
  // Bad:
  {
    minHeight: '20px',
    WebkitUserSelect: 'none',
  };

  // Good:
  {
    'min-height': '20px',
    '-webkit-user-select': 'none',
  };
  ```

3. Always use a string with units for a property’s value.

  ```js
  // Bad:
  {
    'font-size': 20,
    'padding-top': 20 * 2,
  };

  // Good:
  {
    'font-size': '20px',
    'padding-top': `${20 * 2}px`
  };
  ```




&nbsp;

##                                                                 <a id="/spec" >The spec                                                                   </a>

A data-based spec suite is coming over the next weeks. Expect something along the lines of [the *mustache* spec](https://github.com/mustache/spec/tree/83b0721610a4e11832e83df19c73ace3289972b9/specs) or [the *parametric.svg* spec](https://github.com/parametric-svg/-/tree/fcd1d5298f58bc5c634ec062d74e4f155c14701d/packages/parametric-svg-spec/specs)




&nbsp;

##                                                                <a id="/tools" >Compatible tools                                                           </a>

We made the spec for interoperability between existing tools like:

* [*React*](https://facebook.github.io/react/)
* [*elm*](http://elm-lang.org/)
* [*Cycle.js*](http://cycle.js.org/)
* [*virtual-dom*](https://github.com/Matt-Esch/virtual-dom)
* [*Free style*](https://github.com/blakeembrey/free-style)
* [*hyperscript*](https://github.com/dominictarr/hyperscript)
* [*Mithril*](http://mithril.js.org/)
* [*Restyle*](https://github.com/WebReflection/restyle)
* [*superviews.js*](https://github.com/davidjamesstone/superviews.js)

Expect a test suite for these tools to come along with [the spec](#/spec).




&nbsp;

##                                                              <a id="/license" >License                                                                    </a>

[MIT](./License.md) © [Studio B12 GmbH](http://github.com/studio-b12)
