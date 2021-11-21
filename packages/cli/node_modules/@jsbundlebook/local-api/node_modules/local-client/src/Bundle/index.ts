import * as esbuild from "esbuild-wasm"
import { unpkgPathPlugin } from "./Unpkg-path-plugin"
import { fetchPlugin } from './fetch-plugin';

let services :esbuild.Service

const bundle = async (rawcode:string) => {
  if(!services){
   services= await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });
  }
  
   try{
    const result = await services.build({
      entryPoints:['index.js'],
      bundle:true,
      write:false,
      plugins:[unpkgPathPlugin(),fetchPlugin(rawcode)],
      define : {
        "process.env.NODE_ENV" :  '"production"',
        global:"window"
      },
      jsxFactory: '_React.createElement',
      jsxFragment: '_React.Fragment',
    }) 
    return {
      code: result.outputFiles[0].text,
      err: '',
    };
   } catch (err :any){
     return {
      err: err .message,
      code: '',
     }

   }
  }
  
 
 export default bundle;  
  

