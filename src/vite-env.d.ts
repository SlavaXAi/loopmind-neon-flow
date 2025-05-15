
/// <reference types="vite/client" />

declare module 'gsap' {
  export * from 'gsap/all';
  export { default } from 'gsap/all';
}

declare module 'gsap/ScrollTrigger' {
  export * from 'gsap/ScrollTrigger';
  export { ScrollTrigger as default } from 'gsap/ScrollTrigger';
}

