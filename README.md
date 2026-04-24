# Angular Webbapplikation

## Beskrivning

Detta projekt är en webbapplikation byggd med Angular. Syftet med projektet är att skapa en dynamisk och responsiv webbplats med hjälp av Angulars komponentbaserade struktur, routing och databindning.

Webbplatsen innehåller flera undersidor och funktioner, inklusive en sida för konvertering av enheter. Projektet använder Angular CLI, komponenter, routing samt finns publicerad som en färdig webbapplikation.

## Funktioner

### Startsida
En enkel startsida med text och bild som introducerar webbplatsen.

### Navigationsmeny
En meny som gör det möjligt att navigera mellan olika undersidor med hjälp av Angulars router.

### Konvertering av värden
En sida där användaren kan:
- Konvertera meter till feet
- Konvertera feet till meter
- Konvertera celsius till fahrenheit
- Konvertera fahrenheit till celsius

Detta är implementerat med hjälp av Angulars databindning.

### About-sida
En sida som beskriver hur projektet har genomförts och vad som har lärts under arbetets gång.

### Återanvändbar komponent
En separat komponent används för navigationsmenyn och återanvänds i applikationen.

### Responsiv design
Webbplatsen är anpassad för både dator och mobil genom användning av CSS och media queries.

## Tekniker

- **Angular**
- **TypeScript**
- **HTML** 
- **CSS**
- **Angular Router**
- **FormsModule**

### Komponentstruktur
Projektet är uppdelat i flera komponenter:
- Home
- Convert
- About
- Header

Detta gör koden mer strukturerad och lättare att underhålla.

## Publicering

Webbplatsen är publicerad via Netlify.

För att Angulars routing ska fungera korrekt vid uppdatering av sidan (refresh) har en `_redirects`-fil lagts till. Denna ser till att alla anrop skickas till `index.html`, vilket gör att Angular kan hantera navigeringen korrekt.

## Demowebbplats:
https://remarkable-tiramisu-7c9aed.netlify.app/
