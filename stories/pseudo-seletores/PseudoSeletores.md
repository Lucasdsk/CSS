
### Pseudo Seletores

#### CSS

```css
.exemplo-empty {
  div:empty {
    width: 50px;
    height: 50px;
    border: 1px solid #fb8486;
  }
}

.exemplo-link {
  a:link {
    text-decoration: none;
  }
}

.exemplo-active {
  button:active {
    font-size: 16px;
    font-weight: bold;
    color: #8cc152;
  }
}

.exemplo-hover {
  span:hover {
    font-size: 16px;
    font-weight: bold;
    color: #8cc152;
  }
}

.exemplo-focus {
  input {
    color: #6197c6;
    border: 1px solid #6197c6;

    &:focus {
      outline: none;
      color: #6f9e32;
      border: 1px dashed #ffc107;
    }
  }
}

.exemplo-disabled {
  button:disabled {
    border: 2px dashed #6197c6;
    cursor: not-allowed;
    background-color: #e7f0f7;
  }
}

.exemplo-checked {
  input:checked + label {
    color: #557c23;
  }
}

.exemplo-not {
  div {
    border: 1px solid #8cc152;
    margin-right: 5px;
  }

  div:not(.foo) {
    background-color: #8cc152;
  }
}

.exemplo-nth-child,
.exemplo-nth-child-2 {
  div {
    margin-right: 5px;
    border: 1px solid #8cc152;
    background-color: #8cc152;
  }
}

.exemplo-nth-child {
  margin-bottom: 10px;

  div {
    &:nth-child(2) {
      background-color: #557c23;
    }
  }
}

.exemplo-nth-child-2 {
  div {
    &:nth-child(2n) {
      background-color: #557c23;
    }
  }
}

.exemplo-nth-last-child {
  div {
    margin-right: 5px;
    border: 1px solid #8cc152;
    background-color: #8cc152;

    &:nth-last-child(2) {
      background-color: #557c23;
    }
  }
}

.exemplo-nth-last-of-type {
  .box {
    margin-right: 5px;
    border: 1px solid #8cc152;
    background-color: #8cc152;
  }

  span:nth-last-of-type(2) {
    background-color: #557c23;
  }
}

.exemplo-first-child {
  .box {
    margin-right: 5px;
    border: 1px solid #8cc152;
    background-color: #8cc152;

    &:first-child {
      background-color: #557c23;
    }
  }
}

.exemplo-last-child {
  .box {
    margin-right: 5px;
    border: 1px solid #8cc152;
    background-color: #8cc152;

    &:last-child {
      background-color: #557c23;
    }
  }
}
```

#### HTML

```html
<div className="exemplo-empty" data-selector-before=":empty">
  <div />
</div>

<div className="exemplo-link" data-selector-before=":link">
  <div>
    <a href="#">sou um link</a>
  </div>
</div>

<div className="exemplo-active" data-selector-before=":active">
  <div>
    <button>clica em mim ;)</button>
  </div>
</div>

<div className="exemplo-hover" data-selector-before=":hover">
  <div>
    <span>passa o mouse em mim</span>
  </div>
</div>

<div className="exemplo-focus" data-selector-before=":focus">
  <div>
    <input type="text" placeholder=":focus" />
  </div>
</div>

<div className="exemplo-disabled" data-selector-before=":disabled">
  <div>
    <button disabled>botão desabilido</button>
  </div>
</div>

<div className="exemplo-checked" data-selector-before=":checked">
  <div>
    <input type="checkbox" id="input-check" />
    <label htmlFor="input-check"> opção para checar</label>
  </div>
</div>

<div data-selector-before=":not">
  <div className="exemplo-not">
    <div className="box"/>
    <div className="box foo" />
    <div className="box"/>
  </div>
</div>

<div data-selector-before=":nth-child(n)">
  <div className="exemplo-nth-child">
    <div className="box" data-selector-after="(1)" />
    <div className="box" data-selector-after="(2)" />
    <div className="box" data-selector-after="(3)" />
    <div className="box" data-selector-after="(4)" />
  </div>

  <div className="exemplo-nth-child-2">
    <div className="box" data-selector-after="(1)" />
    <div className="box" data-selector-after="(2)" />
    <div className="box" data-selector-after="(3)" />
    <div className="box" data-selector-after="(4)" />
  </div>
</div>

<div data-selector-before=":nth-last-child(n)">
  <div className="exemplo-nth-last-child">
    <div className="box" data-selector-after="(1)" />
    <div className="box" data-selector-after="(2)" />
    <div className="box" data-selector-after="(3)" />
    <div className="box" data-selector-after="(4)" />
  </div>
</div>

<div data-selector-before=":nth-last-of-type(n)">
  <div className="exemplo-nth-last-of-type">
    <div className="box" data-tag-after="div" />
    <div className="box" data-tag-after="div" />
    <span className="box" data-tag-after="span" />
    <div className="box" data-tag-after="div" />
    <span className="box" data-tag-after="span" />
  </div>
</div>

<div data-selector-before=":first-child">
  <div className="exemplo-first-child">
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
  </div>
</div>

<div data-selector-before=":last-child">
  <div className="exemplo-last-child">
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
    <div className="box" />
  </div>
</div>
```
