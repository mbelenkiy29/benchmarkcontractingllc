/// <reference types="vite/client" />

// Allow importing image assets with uppercase extensions (e.g. logo .PNG from @assets).
// vite/client only declares lowercase image module types.
declare module "*.PNG" {
  const src: string;
  export default src;
}

declare module "*.JPG" {
  const src: string;
  export default src;
}

declare module "*.JPEG" {
  const src: string;
  export default src;
}
