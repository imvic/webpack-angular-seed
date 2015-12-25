Webpack + Angular
----------



Angular  kom igång projekt med webpack 
----------


Utvecklings miljö
-------------

cheka ut projekt från github och kör npm install

> **Note:**

> - Installera webpack global med npm install -g webpack .

Starta applikation med

> npm start


Testting av applikation
-------------
Applikation testas med karma, karma-chai, karma-webpack.
för köra tester kör 

   

>   npm test

Produktions miljö
-----------------
I produktion skapas en dist map med miniferad **bundle.js** fil och **bundle.js.map**.
**bundel.js** är en bunt av vendors och egna filer. **bundle.js.map** är för kunna debuga applikation i produktions läge. 

>  npm build


