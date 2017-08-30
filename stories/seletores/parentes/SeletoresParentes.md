
### Seletores: ~, +, >

#### CSS

```css
.box-container {
	width: 380px;
	margin: 0;
	padding: 10px;
	list-style: none;

	.box {
		width: 85px;
		height: 50px;
		display: inline-block;
	}
}		

.seletor-precedente {
	margin-bottom: 10px;

	.box-container {
		.box-anterior ~ .box {
			background-color: #dcecc9;
		}
	}		
}

.seletor-irmao {
	margin-bottom: 10px;

	.box-container {
		.box + .box-irmao {
			background-color: #e7f0f7;
		}
	}	
}

.seletor-filho {
	ol {
		> li {
			font-weight: bold;
		}			
	}
}
```

#### HTML

```html
<div className="seletor-precedente">
	<div className="box-container pai" data-selector-after=".box-container">
		<div className="box box-anterior filho" data-selector-after=".box-anterior">
			<div>Card 1</div>
		</div>
		<div className="box filho" data-selector-after=".box">
			<div>Card 2</div>
		</div>
		<div className="box filho" data-selector-after=".box">
			<div>Card 3</div>
		</div>
	</div>
</div>

<div className="seletor-irmao">
	<div className="box-container pai" data-selector-after=".box-container">
		<div className="box filho" data-selector-after=".box">
			<div>Card 1</div>
		</div>
		<div className="box box-irmao filho" data-selector-after=".box-irmao">
			<div>Card 2</div>
		</div>
		<div className="box filho" data-selector-after=".box">
			<div>Card 3</div>
		</div>
		<div className="box box-irmao filho" data-selector-after=".box-irmao">
			<div>Card 4</div>
		</div>
	</div>
</div>

<div className="seletor-filho">
	<ol>
		<li>Card 1</li>				
		<ul>
			<li>arroz</li>
			<li>feijão</li>
		</ul>
		<li>Card 3</li>
	</ol>			
</div>
```