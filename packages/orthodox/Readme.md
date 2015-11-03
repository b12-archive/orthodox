<h1 align="center">
  <img
    lt="orthodox"
    width="404"
    height="472"
    src="https://cdn.rawgit.com/studio-b12/orthodox/4238d1f/logo.svg"
    id="/"
  />
</h1>

**A minimal implementation of the [git.io/orthodox][] spec**

[git.io/orthodox]:  http://git.io/orthodox




&nbsp;

##                                                                <a id="/usage" >Usage                                                                      </a>

```js
const orthodox = require('orthodox');

orthodox({
  height: '30px',
  width: '20px',
  '-webkit-user-select': 'none',
});
```

➔

```css
height:30px;width:20px;-webkit-user-select:none
```



&nbsp;

##                                                                  <a id="/why" >Why?                                                                       </a>

TL;DR: Interoperability between libraries.

More info in [the main readme](https://github.com/studio-b12/orthodox) and [the spec](https://github.com/studio-b12/orthodox/tree/master/packages/orthodox-spec/spec.json).




&nbsp;

##                                                              <a id="/license" >License                                                                    </a>

[MIT](./License.md) © [Tomek Wiszniewski](https://github.com/tomekwi)
