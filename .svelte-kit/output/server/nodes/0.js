import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.4k8gM0Kq.js","_app/immutable/chunks/BFiXSvb-.js","_app/immutable/chunks/m0JQ7l-V.js","_app/immutable/chunks/DGGEHYBM.js","_app/immutable/chunks/vXHUU5ct.js","_app/immutable/chunks/mGKLe2DE.js"];
export const stylesheets = ["_app/immutable/assets/0.9zyP4wSk.css"];
export const fonts = [];
