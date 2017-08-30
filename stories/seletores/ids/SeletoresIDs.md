
### Seletores: #IDs

#### CSS

```css
#elemento-ul {
	padding-left: 0;

	#elemento-li-1,
	#elemento-li-2,
	#elemento-li-3 {
		color: #2870b2;
		font-size: 16px;
	}
}
```

#### HTML

```html
<ul id="elemento-ul" className="pai" data-selector-before="#elemento-ul">
	<li id="elemento-li-1" className="filho" data-selector-after="#elemento-li-1">Item 1</li>
	<li id="elemento-li-2" className="filho" data-selector-after="#elemento-li-2">Item 2</li>
	<li id="elemento-li-3" className="filho" data-selector-after="#elemento-li-3">Item 3</li>
</ul>
```