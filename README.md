Webpack + Angular
----------



Angular kom-igång-projekt med webpack 
----------


Utvecklings miljö
-------------

klona projektet från github och kör npm install

> **Note:**

> - Installera webpack globalt med npm install -g webpack .

Kör npm install

Starta applikationen med

> npm start


Test av applikation
-------------
Applikation testas med karma, karma-chai, karma-webpack.
för köra tester kör 

   

>   npm test

Produktions miljö
-----------------
I produktion skapas en dist map med miniferad **bundle.js** fil och **bundle.js.map**.
**bundel.js** är en bunt av vendors och egna filer. **bundle.js.map** är för kunna debuga applikation i produktions läge. 

>  npm build


