
### Posicionamento: Flex Container

![float](https://cdn-images-1.medium.com/max/1600/1*kOZy8fY5XHpHO_WD5VJJSA.jpeg)

#### Propriedades Container

- Display: flex
- Flex-direction
- Flex-wrap
- Justify-content
- Align-items
- Align-content

#### CSS

```css
.exemplo-flex {
  ul {
    width: 300px;
    height: 150px;
    padding: 0;
    display: flex;

    li {
      flex: 1;
      height: 60px;
      display: inline-block;
    }
  }

  &.flex-direction {
    ul {
      height: auto;
      flex-direction: column;

      li {
        flex-basis: 30px;
      }
    }
  }

  &.flex-wrap {
    ul {
      flex-wrap: wrap;

      li {
        flex: unset;
        width: 50px
      }
    }
  }

  &.justify-content {
    ul {
      justify-content: space-between;

      li {
        flex: 0 1 50px;
      }
    }
  }

  &.align-items {
    ul {
      align-items: center;
    } 
  }

  &.align-content {
    ul {
      align-content: center;
      flex-wrap: wrap;
      height: 200px;

      li {
        flex: 0 1 60px;
      }
    } 
  }
```

#### HTML

```html
<div className="exemplo-flex" data-selector-before="flex">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
    <li className="filho" data-selector-after="4" />
    <li className="filho" data-selector-after="5" />
    <li className="filho" data-selector-after="6" />
  </ul>
</div>

<div className="exemplo-flex flex-direction" data-selector-before="flex-direction">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
    <li className="filho" data-selector-after="4" />
    <li className="filho" data-selector-after="5" />
    <li className="filho" data-selector-after="6" />
  </ul>
</div>

<div className="exemplo-flex flex-wrap" data-selector-before="flex-wrap">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
    <li className="filho" data-selector-after="4" />
    <li className="filho" data-selector-after="5" />
    <li className="filho" data-selector-after="6" />
  </ul>
</div>

<div className="exemplo-flex justify-content" data-selector-before="justify-content">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
  </ul>
</div>

<div className="exemplo-flex align-items" data-selector-before="align-items">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
  </ul>
</div>

<div className="exemplo-flex align-content" data-selector-before="align-content">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
    <li className="filho" data-selector-after="4" />
    <li className="filho" data-selector-after="5" />
  </ul>
</div>
```