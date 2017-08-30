
### Seletores: .Classes

#### CSS

```css
.elemento-ul {
	padding-left: 0;

	.elemento-li {
		color: #2870b2;
		font-size: 16px;			
	}
}
```

#### HTML

```html
<ul data-selector-before=".elemento-ul" className="elemento-ul pai">
	<li className="elemento-li filho" data-selector-after=".elemento-li">Item 1</li>
	<li className="elemento-li filho" data-selector-after=".elemento-li">Item 2</li>
	<li className="elemento-li filho" data-selector-after=".elemento-li">Item 3</li>
</ul>
```