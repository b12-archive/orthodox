<h1><img
  alt="orthodox"
  width="420"
  height="112"
  src="https://cdn.rawgit.com/studio-b12/orthodox/4d7afcc/logo.png"
  id="/"
/></h1>

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

Write orthodox styles – they’ll work in *[React][]*, *[Cycle.js][]* and everywhere!




&nbsp;

##                                                               <a id="/format" >The format                                                                 </a>

It just boils down to three simple rules:

1. One object maps to one string of style properties separated by semicolons.

  ```js
  // In React + JSX:
  ReactDOMServer.renderToString(<div style={{width: '30px'}}></div>);
  //» '<div style="width:30px;"></div>'

  // In Restyle:
  restyle({'.my-class': {width: '30px'}});
  //» '.my-class{width:30px;}'
  ```

2. (Coming soon)

3. (Coming soon)
