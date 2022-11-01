# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Yente van der Aart

#### Je startniveau:
Start niveau rood

#### Je focus:
Mijn focus is het responsive maken van de website.
 
</details>





## Je website

<details sluit>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
<a href="https://www.li.me/">Lime vehicles website</a>

#### Screenshot(s) van de eerste pagina (small screen): 
Homepagina 

<img src="images/FullLimeHomePageMobile.png" width="375px" alt="Lime homepagina"> 

#### Screenshot(s) van de tweede pagina (small screen):
Detailpagina 
<img src="images/FullLimeDetailPageMobile.png" width="375px" alt="Lime blogpagina">
</details>





## Breakdownschets (week 1)

<details sluit>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de homepagina: 
<img src="images/breakdown-schets-homePagina-mobiel.png" width="375px" alt="breakdown van de homepagina">

### detailpagina: 
<img src="images/breakdown-schets-detailPagina-mobiel.png" width="375px" alt="breakdown van de blogpagina">

</details>





## Voortgang 1 (week 2)

<details sluit>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Lastige HTML bij menu toggle button
<img src="images/Schermafbeelding%202022-09-21%20om%2020.43.15.png" width="375px" alt="screenshot van menu toggle">
<img src="images/ScreenMenuToggleHtml.png" width="375px" alt="Html code van menu toggle">

### Agenda voor meeting 22 sept '22
Groep C1

| Emile             | Tijn                         | Tufan        | Robin            | Yente 
| ---               | ---                          | ---          | ---              | ---
| (14min)           | (14 min)                     | (14min)      | (14min)          | (14min)
| Code laten zien   | Breakdown schets controleren.| header       | breakdown        | Code laten zien + controleren
|                   |                              |              | articles         | 
|                   | 2 vragen over web.           |              |                  |

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- punt 1
- punt 2
- nog een punt
- ...

</details>





## Voortgang 2 (week 3) 6-okt

<details sluit>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Dit zijn mijn schetsen die ik van te voren heb gemaakt, waardoor het gemakkelijker was om te beginnen aan het schrijven van mijn css.  
<p>Afbeelding 1: schets van 2e deel van homepagina.</p>
<img src="images/2eDeelHomepage" width="375px" alt="homepagina ccs schets">
<a herf="https://codepen.io/yentevdaart/pen/JjvBwKd">code testen in codepen voor 3e deel van home pagina</a>
<p>Afbeelding 2: schets van 3e deel van homepagina</p>
<img src="images/3eDeelHomepage" width="375px" alt="homepagina ccs schets">
<a herf="https://codepen.io/yentevdaart/pen/ExLzKqG">code testen in codepen voor 4e deel van home pagina</a>
<p>Afbeelding 3: schets van 4e deel van homepagina</p>
<img src="images/4eDeelHomepage" width="375px" alt="homepagina ccs schets">


### Agenda voor meeting
Groep C1

| Emile          | Tijn               | Tufan        | Robin               | Yente 
| ---            | ---                | ---          | ---                 | ---
| dit bespreken  | header sticky      | wann z-index toepassen    | button in nav       |css issiues oplossen
| en dat ook nog | video als achtergrond|              | hamburger/zoekbalk  |
| ...            | ...                | ...          | ...                 |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- z-index aanpassen want er bestaat geen z-indez van -1 
- border geven aan buttons aan hero image, border-style toevoegen. 
- Hero image in je header weergeven i.p.v. in main.
- 1ste section weg halen omdat daar geen h2 in zit. 

</details>





## Toegankelijkheidstest (week 4)

<details sluit>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:
<ol> 
<li>Bij veel zichts beperkingen waren de stukken tekst op de website te klein om te lezen.</li>
<li>Sommigen knoppen waren lastig te onderscheiden met de achtergrond.</li>
<li>De hover kleur is een te kleine verandering, om het verschil duidelijk te zien.</li>
<li>Er is geen darkmode op deze website</li>
</ol>

#### Te kleine tekst
Op te lossen door het vergroten van lettertype.

#### CTA slecht zichtbaar 
<img src="images/CTAhiding.png" alt="call to action verborgen in achtergrond image">

Op te lossen door de call to action button een kleur te geven.


#### Hover kleur te klein verschil 
<img src="images/HoverTinyDiffrence.png" alt="hover kleur is 1 tint donkerder">

Op te lossen door de huidige hover kleur te verplaatsen met een donker grijze hovekleur. 


#### Geen darkmode. 

Op te lossen door een darkmode toggle toe te voegen op de website.

</details>





## Voortgang 3 (week 4)

<details open>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
<p>Delen die goed gingen:</p>
- 6e deel van de pagina had ik geen schets voor nodig. <img src="images/6e deel homepagina.png" width="375px" alt="6e deel van homepagina foto">
- Stijlen van footer in css was ook gemakkelijk. 
<p> Dingen die lastig waren: </p>
- Carousel werkend maken in eigen code was lastig doordat ik sommigen lagen een z-index had gegeven. Er was hierdoor geen overflow waardoor de lijst elementen niet verborgen werden.
- De language button maken en ervoor zorgen dat de overlay niet over de andere content ging bleef staan ookal was hij niet zichtbaar. <a herf="https://codepen.io/yentevdaart/pen/ZEREBvE">Test in Codepen:language button maken</a>
had eerst geprobeert om de opacity 0 te geven wanneer de overlay niet zichtbaar moest zijn. Dit zorgde ervoor dat mijn carousels niet meer werkte. Dit heb ik uiteindelijk kunnen oplossen door display: none te gebruiken wanneer de overlay niet zichtbaar hoefde te zijn. Wanneer de button actief was, de overlay een display:block te geven. <a herf="https://codepen.io/yentevdaart/pen/yLELgxb">Test in Codepen:language button werkend maken met js.</a>
- Dropdown in de footer van de pagina laten werken is nog steeds een lastig puntje. <a herf="https://codepen.io/yentevdaart/pen/wvXvzgJ">Link naar mijn test in Codepen</a>

### Agenda voor meeting
Groep C1

| Emile          | Tijn               | Tufan        | Robin            | Yente 
| ---            | ---                | ---          | ---              | ---
| dit bespreken  | detail pagina breakdown          | en ik dit    | en dan ik dat    | Hoe verander je twee elementen door 1 actie met js.
| en dat ook nog |                    | nog een punt | dit wil ik zeker | Hoe bewerk ik een radio button? want input[type="radio"]:checked + label werkt niet.
| ...            | ...                | ...          | ...              |

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- html smooth scroling 
- id geven aan radio buttons, input checked = automatisch 1 geselecteerd, br weghalen bij labels door display:block;
- footer aanpassen met button voor span
- ...

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

### Screenshot(s)

hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1: Coyier, C. (2022, 30 september). A Complete Guide to Flexbox. CSS-Tricks. Geraadpleegd op 4 oktober 2022, van https://css-tricks.com/snippets/css/a-guide-to-flexbox/
2. bron 2: Walobwa, I. (2022, 21 januari). Create a responsive mobile menu with CSS. LogRocket Blog. Geraadpleegd op 4 oktober 2022, van https://blog.logrocket.com/create-responsive-mobile-menu-with-css-no-javascript/
3. bron 3:Coyier, C. (2022b, oktober 11). A Complete Guide to Flexbox. CSS-Tricks. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
4. bron 4:

</details>