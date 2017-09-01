
### Posicionamento: Flex Items

#### Propriedades Item

- Order
- Flex-grow
- Flex-shrink
- Flex-basis
- Flex
- Align-self

#### CSS

```css

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

&.flex-order {
  ul {
    li {
      &:nth-child(2) {
        order: 1;
      }
    }
  }
}

&.flex-align-self {
  ul {
    li {
      width: 50px;
      &:nth-child(2) {
        align-self: flex-end;
      }
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

<div className="exemplo-flex flex-order" data-selector-before="flex-order">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
    <li className="filho" data-selector-after="4" />
    <li className="filho" data-selector-after="5" />
    <li className="filho" data-selector-after="6" />
  </ul>
</div>

<div className="exemplo-flex flex-align-self" data-selector-before="align-self">
  <ul className="pai">
    <li className="filho" data-selector-after="1" />
    <li className="filho" data-selector-after="2" />
    <li className="filho" data-selector-after="3" />
  </ul>
</div>
```