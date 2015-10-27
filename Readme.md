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
height:30px;width:20px;
```

[A lot of tools](#/tools) do this – but they handle some edge cases differently. This spec defines a common ground compatible with all of these tools.

Write orthodox styles – they’ll work in *[React][]*, *[Cycle.js][]* and everywhere!
