import { WebGlHelper } from "../WebGlHelper";
import { mat4 } from "gl-matrix";
import { IDemo } from "./demo.interface";


export class demo4 implements IDemo {
  public demo(webGl: WebGlHelper): () => void {

    const switchColor = () => {
      const gl = webGl.gl;
      // Get a random color value using a helper function.
      var color = demo4.getRandomColor();
      // Set the clear color to the random color.
      gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color. This is
      // the function call that actually does the drawing.
      gl.clear(gl.COLOR_BUFFER_BIT);
    };

    return switchColor;
  }
  // Random color helper function.
  private static getRandomColor() {
    return [Math.random(), Math.random(), Math.random()];
  }
}