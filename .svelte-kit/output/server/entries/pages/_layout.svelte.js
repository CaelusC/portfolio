import "clsx";
import { a as attr_class, e as escape_html, b as ensure_array_like, c as attr, s as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import { m as meta } from "../../chunks/index2.js";
function Nav($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let scrolled = false;
    const links = [
      { href: "#about", label: "About" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#contact", label: "Contact" }
    ];
    $$renderer2.push(`<nav${attr_class("svelte-1h32yp1", void 0, { "scrolled": scrolled })}><div class="container nav-inner svelte-1h32yp1"><a href="/" class="wordmark svelte-1h32yp1">${escape_html(meta.name)}</a> <ul class="svelte-1h32yp1"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { href, label } = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", href)} class="svelte-1h32yp1">${escape_html(label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <a${attr("href", `${stringify(base)}/resume.pdf`)} class="resume svelte-1h32yp1" target="_blank" rel="noopener">Resume</a></div></nav>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Nav($$renderer);
  $$renderer.push(`<!----> <main>`);
  children($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _layout as default
};
