* 4/24/2024 This is a quick way to demonstrate reading the headers and a jwt from the header using node.js, ideally behind PingAccess
* Installation Instructions: See enclosed
* GIT: https://github.com/malewars/pingaccess-demo-headersjwt

*** Short directions ***

* This is a quick node.js to demonstrate consuming HTTP Headers and a JWT

* Short Steps Below:
* 1) Stand up Ubuntu
* 2) Install node.js - CMD: sudo apt install nodejs; sudo apt install npm
* 3) Install npm http headers - CMD: npm install http-headers --save
* 4) install PM2 (optional) - CMD: npm install pm2 -g
* 5) create the node project folder and the server js - the demonstration application/js is in the Git 
* 6) Execute the node.js to test - one of these:
* node DemoPingAccess.js
* pm2 start DemoPingAccess.js

* 7) Use curl to pass a JWT and Header to Test it
curl -H "User-Agent: MyCustomUserAgent" -H "myjwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" http://192.168.65.4:3000/Myapp

* Response:
* My Headers Received :{"host":"192.168.65.4:3000","accept":"*/*","user-agent":"MyCustomUserAgent","myjwt":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}My JWT Received :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c{"sub":"1234567890","name":"John Doe","iat":1516239022}%

* 8) Create a PingAccess Site to point to the new node.js server
* 9) Create an application in PingAccess using an existin WebSession from your OIDC Provider
* 10) Create a PingAccess Identity Mapping to pass the WebSession data to the application and assign it to the Application
* 11) Execute a test request to PingAccess, the OIDC Provider (like PingFederate) will challenge and on success send the token to PingAccess, then the Identity Mappings will be fullfilled and appear in the application page.


* Node Examples: https://github.com/nodejs/examples
