/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


declare global {
    interface ImportMetaEnv {
        readonly PUBLIC_SERVER_PORT: string;
        // Add other public environment variables here as needed
    }
  
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
  }
  
  export {};
