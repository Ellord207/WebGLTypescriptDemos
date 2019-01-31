import { WebGlHelper } from './WebGlHelper';
import { demo2 } from './demos/demo2'
import { demo3 } from './demos/demo3';

module Startup {
  let webGl: WebGlHelper;
  export function main(): number {
    console.log('Init Startup');
    if (WebGlHelper === undefined) {
      console.error('WebGlHelper is undefined.');
    }

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
    const fnDemo2: () => void = demo2.demo2(webGl);
    const fnDemo3: () => void = demo3.demo3(webGl);

    initButton('#clear_button', function() {
      if (webGl !== undefined) {
        webGl.clearCanvas();
      }
    });
    initButton('#demo2_button', function() {
      if (webGl !== undefined) {
        fnDemo2();
      }
    });
    initButton('#demo3_button', function() {
      if (webGl !== undefined) {
        fnDemo3();
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
