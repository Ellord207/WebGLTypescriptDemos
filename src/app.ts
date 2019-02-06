import { WebGlHelper } from './WebGlHelper';
import { IDemo } from './demos/demo.interface';
// import * as cors from 'cors';
import { Express } from 'express';
// import cors = require('cors');
import  * as cors  from 'cors';
import { demo2 } from './demos/demo2'
import { demo3 } from './demos/demo3';
import { demo4 } from './demos/demo4';
import { demo5 } from './demos/demo5';
import { demo6 } from './demos/demo6';

module Startup {
  let webGl: WebGlHelper;
  export function main(): number {
    console.log('Init Startup');
    if (WebGlHelper === undefined) {
      console.error('WebGlHelper is undefined.');
    }

    // var app = Express();
   
    // app.get('/products/:id', cors(), function (req, res, next) {
    //   res.json({msg: 'This is CORS-enabled for a Single Route'});
    // });
    // app.use(function(req, res, next) {
    //   res.header("Access-Control-Allow-Origin", "*");
    //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //   next();
    // });

    window.onload = bootstrap;

    return 0;
  }

  function bootstrap(e: Event): void {
    initWebGl();
    initButtons();
  }

  function logCordOnClick(arg: MouseEvent): void {
    console.log(`Clicked button (${arg.pageX}, ${arg.pageY})`);
  }

  function initButton(id: string, fn: () => void): void {
    let button: any = document.querySelector(id);
    if (button) {
      button.onclick = fn;
    }
  }

  function initButtons(): void {
    const demos: (() => void)[] = [];
    demos.push(new demo2().demo(webGl));
    demos.push(new demo3().demo(webGl));
    demos.push(new demo4().demo(webGl));
    demos.push(new demo5().demo(webGl));
    demos.push(new demo6().demo(webGl));

    initButton('#Demo', function() {
      if (webGl !== undefined) {
        // const fn = demos.pop();
        // if(fn) fn();
        demos[3]();
      }
    });
  }

  function initWebGl(): void {
    console.log('init WebGL');
    const WebGl = new WebGlHelper('#glcanvas');
    WebGl.clearCanvas();
    webGl = WebGl;
  }
}
Startup.main();
