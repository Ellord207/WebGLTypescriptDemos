/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Nathan.Elrod.BENTLEY\\\\Documents\\\\NodeJS\\\\WebGL\\\\node_modules\\\\gl-matrix\\\\esm\\\\index.js'\");\n\n//# sourceURL=webpack:///./node_modules/gl-matrix/esm/index.js?");

/***/ }),

/***/ "./src/WebGlHelper.ts":
/*!****************************!*\
  !*** ./src/WebGlHelper.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar WebGlHelper = /** @class */ (function () {\r\n    function WebGlHelper(canvasId) {\r\n        var canvas = document.querySelector(canvasId);\r\n        this._gl = canvas.getContext('webgl');\r\n        if (!this.isWebGlInit()) {\r\n            console.error('Unable to initialize');\r\n            return;\r\n        }\r\n    }\r\n    Object.defineProperty(WebGlHelper.prototype, \"gl\", {\r\n        get: function () { return this._gl; },\r\n        enumerable: true,\r\n        configurable: true\r\n    });\r\n    WebGlHelper.prototype.isWebGlInit = function () {\r\n        return (this.gl);\r\n    };\r\n    WebGlHelper.prototype.clearCanvas = function () {\r\n        // Set clear color to black, fully opaque\r\n        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);\r\n        // Clear the color buffer with specified clear color\r\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT);\r\n    };\r\n    //\r\n    // Initialize a shader program, so WebGL knows how to draw our data\r\n    //\r\n    WebGlHelper.prototype.initShaderProgram = function (vsSource, fsSource) {\r\n        var vertexShader = this.loadShader(this.gl.VERTEX_SHADER, vsSource);\r\n        var fragmentShader = this.loadShader(this.gl.FRAGMENT_SHADER, fsSource);\r\n        // Create the shader program\r\n        var shaderProgram = this.gl.createProgram();\r\n        this.gl.attachShader(shaderProgram, vertexShader);\r\n        this.gl.attachShader(shaderProgram, fragmentShader);\r\n        this.gl.linkProgram(shaderProgram);\r\n        // If creating the shader program failed, alert\r\n        if (!this.gl.getProgramParameter(shaderProgram, this.gl.LINK_STATUS)) {\r\n            console.error('Unable to initialize the shader program: ' + this.gl.getProgramInfoLog(shaderProgram));\r\n            return null;\r\n        }\r\n        var programInfo = {\r\n            program: shaderProgram,\r\n        };\r\n        return programInfo;\r\n    };\r\n    //\r\n    // creates a shader of the given type, uploads the source and\r\n    // compiles it.\r\n    //\r\n    WebGlHelper.prototype.loadShader = function (type, source) {\r\n        var shader = this.gl.createShader(type);\r\n        // Send the source to the shader object\r\n        this.gl.shaderSource(shader, source);\r\n        // Compile the shader program\r\n        this.gl.compileShader(shader);\r\n        // See if it compiled successfully\r\n        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {\r\n            alert('An error occurred compiling the shaders: ' + this.gl.getShaderInfoLog(shader));\r\n            this.gl.deleteShader(shader);\r\n            return null;\r\n        }\r\n        return shader;\r\n    };\r\n    return WebGlHelper;\r\n}());\r\nexports.WebGlHelper = WebGlHelper;\r\n\n\n//# sourceURL=webpack:///./src/WebGlHelper.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar WebGlHelper_1 = __webpack_require__(/*! ./WebGlHelper */ \"./src/WebGlHelper.ts\");\r\nvar demo2_1 = __webpack_require__(/*! ./demos/demo2 */ \"./src/demos/demo2.ts\");\r\nvar demo3_1 = __webpack_require__(/*! ./demos/demo3 */ \"./src/demos/demo3.ts\");\r\nvar Startup;\r\n(function (Startup) {\r\n    var webGl;\r\n    function main() {\r\n        console.log('Init Startup');\r\n        if (WebGlHelper_1.WebGlHelper === undefined) {\r\n            console.error('WebGlHelper is undefined.');\r\n        }\r\n        window.onload = bootstrap;\r\n        return 0;\r\n    }\r\n    Startup.main = main;\r\n    function bootstrap(e) {\r\n        initWebGl();\r\n        initButtons();\r\n    }\r\n    function logCordOnClick(arg) {\r\n        console.log(\"Clicked button (\" + arg.pageX + \", \" + arg.pageY + \")\");\r\n    }\r\n    function initButton(id, fn) {\r\n        var button = document.querySelector(id);\r\n        if (button) {\r\n            button.onclick = fn;\r\n        }\r\n    }\r\n    function initButtons() {\r\n        var fnDemo2 = demo2_1.demo2.demo2(webGl);\r\n        var fnDemo3 = demo3_1.demo3.demo3(webGl);\r\n        initButton('#clear_button', function () {\r\n            if (webGl !== undefined) {\r\n                webGl.clearCanvas();\r\n            }\r\n        });\r\n        initButton('#demo2_button', function () {\r\n            if (webGl !== undefined) {\r\n                fnDemo2();\r\n            }\r\n        });\r\n        initButton('#demo3_button', function () {\r\n            if (webGl !== undefined) {\r\n                fnDemo3();\r\n            }\r\n        });\r\n    }\r\n    function initWebGl() {\r\n        console.log('init WebGL');\r\n        var WebGl = new WebGlHelper_1.WebGlHelper('#glcanvas');\r\n        WebGl.clearCanvas();\r\n        webGl = WebGl;\r\n    }\r\n})(Startup || (Startup = {}));\r\nStartup.main();\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/demos/demo2.ts":
/*!****************************!*\
  !*** ./src/demos/demo2.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar gl_matrix_1 = __webpack_require__(/*! gl-matrix */ \"./node_modules/gl-matrix/esm/index.js\");\r\nvar demo2;\r\n(function (demo2_1) {\r\n    //\r\n    // Demo from \r\n    // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context\r\n    // \r\n    var vsSource = \"\\n    attribute vec4 aVertexPosition;\\n\\n    uniform mat4 uModelViewMatrix;\\n    uniform mat4 uProjectionMatrix;\\n\\n    void main(void) {\\n      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\\n    }\\n  \";\r\n    var fsSource = \"\\n    void main() {\\n      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\\n    }\\n  \";\r\n    function demo2(webGl) {\r\n        var gl = webGl.gl;\r\n        var shaderProgramInfo = webGl.initShaderProgram(vsSource, fsSource);\r\n        var shaderProgram = shaderProgramInfo['program'];\r\n        shaderProgramInfo['attribLocations'] = {\r\n            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),\r\n        };\r\n        shaderProgramInfo['uniformLocations'] = {\r\n            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),\r\n            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),\r\n        };\r\n        var buffer = initBuffers(gl);\r\n        return function () {\r\n            drawScene(gl, shaderProgramInfo, buffer);\r\n        };\r\n    }\r\n    demo2_1.demo2 = demo2;\r\n    function initBuffers(gl) {\r\n        // Create a buffer for the square's positions.\r\n        var positionBuffer = gl.createBuffer();\r\n        // Select the positionBuffer as the one to apply buffer\r\n        // operations to from here out.\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\r\n        // Now create an array of positions for the square.\r\n        var positions = [\r\n            -1.0, 1.0,\r\n            1.0, 1.0,\r\n            -1.0, -1.0,\r\n            1.0, -1.0,\r\n        ];\r\n        // Now pass the list of positions into WebGL to build the\r\n        // shape. We do this by creating a Float32Array from the\r\n        // JavaScript array, then use it to fill the current buffer.\r\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);\r\n        return {\r\n            position: positionBuffer,\r\n        };\r\n    }\r\n    function drawScene(gl, programInfo, buffers) {\r\n        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque\r\n        gl.clearDepth(1.0); // Clear everything\r\n        gl.enable(gl.DEPTH_TEST); // Enable depth testing\r\n        gl.depthFunc(gl.LEQUAL); // Near things obscure far things\r\n        // Clear the canvas before we start drawing on it.\r\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\r\n        // Create a perspective matrix, a special matrix that is\r\n        // used to simulate the distortion of perspective in a camera.\r\n        // Our field of view is 45 degrees, with a width/height\r\n        // ratio that matches the display size of the canvas\r\n        // and we only want to see objects between 0.1 units\r\n        // and 100 units away from the camera.\r\n        var fieldOfView = 45 * Math.PI / 180; // in radians\r\n        var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;\r\n        var zNear = 0.1;\r\n        var zFar = 100.0;\r\n        var projectionMatrix = gl_matrix_1.mat4.create();\r\n        // note: glmatrix.js always has the first argument\r\n        // as the destination to receive the result.\r\n        gl_matrix_1.mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);\r\n        // Set the drawing position to the \"identity\" point, which is\r\n        // the center of the scene.\r\n        var modelViewMatrix = gl_matrix_1.mat4.create();\r\n        // Now move the drawing position a bit to where we want to\r\n        // start drawing the square.\r\n        gl_matrix_1.mat4.translate(modelViewMatrix, // destination matrix\r\n        modelViewMatrix, // matrix to translate\r\n        [-0.0, 0.0, -6.0]); // amount to translate\r\n        // Tell WebGL how to pull out the positions from the position\r\n        // buffer into the vertexPosition attribute.\r\n        {\r\n            var numComponents = 2; // pull out 2 values per iteration\r\n            var type = gl.FLOAT; // the data in the buffer is 32bit floats\r\n            var normalize = false; // don't normalize\r\n            var stride = 0; // how many bytes to get from one set of values to the next\r\n            // 0 = use type and numComponents above\r\n            var offset = 0; // how many bytes inside the buffer to start from\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);\r\n            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);\r\n            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);\r\n        }\r\n        // Tell WebGL to use our program when drawing\r\n        gl.useProgram(programInfo.program);\r\n        // Set the shader uniforms\r\n        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);\r\n        gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);\r\n        {\r\n            var offset = 0;\r\n            var vertexCount = 4;\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);\r\n        }\r\n    }\r\n})(demo2 = exports.demo2 || (exports.demo2 = {}));\r\n\n\n//# sourceURL=webpack:///./src/demos/demo2.ts?");

/***/ }),

/***/ "./src/demos/demo3.ts":
/*!****************************!*\
  !*** ./src/demos/demo3.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar gl_matrix_1 = __webpack_require__(/*! gl-matrix */ \"./node_modules/gl-matrix/esm/index.js\");\r\nvar demo3;\r\n(function (demo3_1) {\r\n    var vsSource = \"\\n    attribute vec4 aVertexPosition;\\n    attribute vec4 aVertexColor;\\n\\n    uniform mat4 uModelViewMatrix;\\n    uniform mat4 uProjectionMatrix;\\n\\n    varying lowp vec4 vColor;\\n\\n    void main(void) {\\n      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\\n      vColor = aVertexColor;\\n    }\\n  \";\r\n    var fsSource = \"\\n    varying lowp vec4 vColor;\\n\\n    void main(void) {\\n      gl_FragColor = vColor;\\n    }\\n  \";\r\n    function demo3(webGl) {\r\n        var gl = webGl.gl;\r\n        var shaderProgramInfo = webGl.initShaderProgram(vsSource, fsSource);\r\n        var shaderProgram = shaderProgramInfo['program'];\r\n        shaderProgramInfo['attribLocations'] = {\r\n            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),\r\n            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),\r\n        };\r\n        shaderProgramInfo['uniformLocations'] = {\r\n            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),\r\n            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),\r\n        };\r\n        var buffer = initBuffers(gl);\r\n        return function () {\r\n            drawScene(gl, shaderProgramInfo, buffer);\r\n        };\r\n    }\r\n    demo3_1.demo3 = demo3;\r\n    function initBuffers(gl) {\r\n        // Create a buffer for the square's positions.\r\n        var positionBuffer = gl.createBuffer();\r\n        // Select the positionBuffer as the one to apply buffer\r\n        // operations to from here out.\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\r\n        // Now create an array of positions for the square.\r\n        var positions = [\r\n            -1.0, 1.0,\r\n            1.0, 1.0,\r\n            -1.0, -1.0,\r\n            1.0, -1.0,\r\n        ];\r\n        // Now pass the list of positions into WebGL to build the\r\n        // shape. We do this by creating a Float32Array from the\r\n        // JavaScript array, then use it to fill the current buffer.\r\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);\r\n        var colors = [\r\n            1.0, 1.0, 1.0, 1.0,\r\n            1.0, 0.0, 0.0, 1.0,\r\n            0.0, 1.0, 0.0, 1.0,\r\n            0.0, 0.0, 1.0, 1.0,\r\n        ];\r\n        var colorBuffer = gl.createBuffer();\r\n        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);\r\n        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);\r\n        return {\r\n            position: positionBuffer,\r\n            color: colorBuffer,\r\n        };\r\n    }\r\n    function drawScene(gl, programInfo, buffers) {\r\n        gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque\r\n        gl.clearDepth(1.0); // Clear everything\r\n        gl.enable(gl.DEPTH_TEST); // Enable depth testing\r\n        gl.depthFunc(gl.LEQUAL); // Near things obscure far things\r\n        // Clear the canvas before we start drawing on it.\r\n        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);\r\n        // Create a perspective matrix, a special matrix that is\r\n        // used to simulate the distortion of perspective in a camera.\r\n        // Our field of view is 45 degrees, with a width/height\r\n        // ratio that matches the display size of the canvas\r\n        // and we only want to see objects between 0.1 units\r\n        // and 100 units away from the camera.\r\n        var fieldOfView = 45 * Math.PI / 180; // in radians\r\n        var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;\r\n        var zNear = 0.1;\r\n        var zFar = 100.0;\r\n        var projectionMatrix = gl_matrix_1.mat4.create();\r\n        // note: glmatrix.js always has the first argument\r\n        // as the destination to receive the result.\r\n        gl_matrix_1.mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);\r\n        // Set the drawing position to the \"identity\" point, which is\r\n        // the center of the scene.\r\n        var modelViewMatrix = gl_matrix_1.mat4.create();\r\n        // Now move the drawing position a bit to where we want to\r\n        // start drawing the square.\r\n        gl_matrix_1.mat4.translate(modelViewMatrix, // destination matrix\r\n        modelViewMatrix, // matrix to translate\r\n        [-0.0, 0.0, -6.0]); // amount to translate\r\n        // Tell WebGL how to pull out the positions from the position\r\n        // buffer into the vertexPosition attribute.\r\n        {\r\n            var numComponents = 2; // pull out 2 values per iteration\r\n            var type = gl.FLOAT; // the data in the buffer is 32bit floats\r\n            var normalize = false; // don't normalize\r\n            var stride = 0; // how many bytes to get from one set of values to the next\r\n            // 0 = use type and numComponents above\r\n            var offset = 0; // how many bytes inside the buffer to start from\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);\r\n            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);\r\n            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);\r\n        }\r\n        // Tell WebGL how to pull out the colors from the color buffer\r\n        // into the vertexColor attribute.\r\n        {\r\n            var numComponents = 4;\r\n            var type = gl.FLOAT;\r\n            var normalize = false;\r\n            var stride = 0;\r\n            var offset = 0;\r\n            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);\r\n            gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, numComponents, type, normalize, stride, offset);\r\n            gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);\r\n        }\r\n        // Tell WebGL to use our program when drawing\r\n        gl.useProgram(programInfo.program);\r\n        // Set the shader uniforms\r\n        gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);\r\n        gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);\r\n        {\r\n            var offset = 0;\r\n            var vertexCount = 4;\r\n            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);\r\n        }\r\n    }\r\n})(demo3 = exports.demo3 || (exports.demo3 = {}));\r\n\n\n//# sourceURL=webpack:///./src/demos/demo3.ts?");

/***/ })

/******/ });