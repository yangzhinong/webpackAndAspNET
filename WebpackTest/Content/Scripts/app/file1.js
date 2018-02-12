const $= require('jquery');
import { SayHello } from './file3'

require("./css/main.scss");


setTimeout(() => {
    SayHello();
}, 200);
$(document).ready(function () {
    var txt = `
       <div>
         Hello Babel
      </div>
`;
    
    console.log('Hello from Jquery');

   // $('body').html(txt);
});

