
### Posicionamento: Float

[Fonte: css-tricks.com](https://css-tricks.com/almanac/properties/f/float/)

#### Left e Right

![float](https://cdn.css-tricks.com/wp-content/csstricks-uploads/web-text-wrap.png)

#### Usando o Clear

![float](https://css-tricks.com/wp-content/csstricks-uploads/unclearedfooter.png)

```css
#footer {
  clear: both;
}
```

![float](https://css-tricks.com/wp-content/csstricks-uploads/clearedfooter.png)

------

#### Todos os elementos dentro de um container estão flutuando o elemento pai não consegue obter uma altura

![float](https://css-tricks.com/wp-content/csstricks-uploads/collapse.png)

#### Técnicas utilizadas para resolver este problema:

##### <div /> vazia ou <br />

```html
<div style="clear: both;" />

<br style="clear: both;" />
```

##### Aplicar overflow hidden ou auto no elemento pai

```css
.containerQueTemOsFilhosComFloat {
  overflow: auto;
  overflow: hidden;
}
```

##### Usar o hack .clearfix

```css
.clearfix:after {
  content: "";
  visibility: hidden;
  display: block;
  height: 0;
  clear: both;
}
```
