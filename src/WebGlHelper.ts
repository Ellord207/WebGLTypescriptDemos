export { WebGlHelper };

class WebGlHelper {
  private _gl: any;
  public get gl() { return this._gl; }

  constructor (canvasId: any) {
    const canvas = document.querySelector(canvasId);
    this._gl = canvas.getContext('webgl');

    if (!this.isWebGlInit()) {
      console.error('Unable to initialize');
      return;
    }
  }

  public isWebGlInit(): boolean {
    return(this.gl);
  }

  public clearCanvas(): void {
    // Set clear color to black, fully opaque
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  //
  // Initialize a shader program, so WebGL knows how to draw our data
  //
  initShaderProgram(vsSource: string, fsSource: string): any {
    const vertexShader = this.loadShader(this.gl.VERTEX_SHADER, vsSource);
    const fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, fsSource);
  
    // Create the shader program
  
    const shaderProgram = this.gl.createProgram();
    this.gl.attachShader(shaderProgram, vertexShader);
    this.gl.attachShader(shaderProgram, fragmentShader);
    this.gl.linkProgram(shaderProgram);
  
    // If creating the shader program failed, alert
  
    if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {
      console.error('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    const programInfo = {
      program: shaderProgram,
    };
  
    return programInfo;
  }

  //
  // creates a shader of the given type, uploads the source and
  // compiles it.
  //
  private loadShader(type: any, source: any) {
    const shader = this.gl.createShader(type);
  
    // Send the source to the shader object
    this.gl.shaderSource(shader, source);
  
    // Compile the shader program
    this.gl.compileShader(shader);
  
    // See if it compiled successfully
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      alert('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));
      this.gl.deleteShader(shader);
      return null;
    }
  
    return shader;
  }

}
  