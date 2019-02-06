import { WebGlHelper } from "../WebGlHelper";

export interface IDemo {
  demo(webGl: WebGlHelper): () => void;
}