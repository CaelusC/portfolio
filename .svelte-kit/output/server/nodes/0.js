import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BGIUHens.js","_app/immutable/chunks/ALMxJaKa.js","_app/immutable/chunks/sOxY5rI7.js","_app/immutable/chunks/BOJek5yg.js","_app/immutable/chunks/C8znab3k.js"];
export const stylesheets = ["_app/immutable/assets/0.9zyP4wSk.css"];
export const fonts = [];
