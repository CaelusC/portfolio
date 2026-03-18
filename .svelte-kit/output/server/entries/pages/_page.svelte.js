import { a as attr_class, e as escape_html, c as attr, b as ensure_array_like, a4 as attr_style, s as stringify, a5 as head } from "../../chunks/index.js";
import { m as meta, p as projects, s as skills } from "../../chunks/index2.js";
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section${attr_class("hero svelte-1q37ri0", void 0, { "visible": visible })}><div class="bg-block svelte-1q37ri0" aria-hidden="true"></div> <div class="orb orb-1 svelte-1q37ri0" aria-hidden="true"></div> <div class="orb orb-2 svelte-1q37ri0" aria-hidden="true"></div> <div class="container hero-inner svelte-1q37ri0"><div class="hero-text svelte-1q37ri0"><p class="availability svelte-1q37ri0">${escape_html(meta.available)} — Open to Internships</p> <h1 class="svelte-1q37ri0">${escape_html(meta.name)}</h1> <div class="rule svelte-1q37ri0"></div> <p class="role svelte-1q37ri0">${escape_html(meta.role)}<span class="sep svelte-1q37ri0">—</span>${escape_html(meta.location)}</p></div> <p class="tagline svelte-1q37ri0">${escape_html(meta.tagline)}</p></div> <div class="scroll-indicator svelte-1q37ri0" aria-hidden="true"><div class="scroll-track svelte-1q37ri0"><div class="scroll-thumb svelte-1q37ri0"></div></div></div></section>`);
  });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="about"${attr_class("svelte-7hpc9t", void 0, { "visible": visible })}><div class="green-panel svelte-7hpc9t" aria-hidden="true"></div> <div class="container layout svelte-7hpc9t"><div class="label-col svelte-7hpc9t"><span class="section-num svelte-7hpc9t">01</span> <span class="section-name svelte-7hpc9t">About</span></div> <div class="content-col svelte-7hpc9t"><h2>Things<br/>to know</h2> <div class="body-text svelte-7hpc9t"><p class="svelte-7hpc9t">I am an ICT student at ${escape_html(meta.school)}, where i learn how to develop 
					functional applications. From websites and webapps to embeded programs 
					and protocol based communication.</p> <p class="svelte-7hpc9t">Outside of coursework, I co-develop a game in Godot, a passion project 
					through which I'm learning C++, large data management, and long term project planning.
					I also run a servers with custom modpacks and configuration, which 
					has been a surprisingly good teacher of networking, server administration, and debugging
					under pressure.</p></div> <div class="meta-row svelte-7hpc9t"><div class="meta-item svelte-7hpc9t"><span class="meta-label svelte-7hpc9t">Location</span> <span class="meta-value svelte-7hpc9t">${escape_html(meta.location)}</span></div> <div class="meta-item svelte-7hpc9t"><span class="meta-label svelte-7hpc9t">Available</span> <span class="meta-value svelte-7hpc9t">${escape_html(meta.available)}</span></div> <div class="meta-item svelte-7hpc9t"><span class="meta-label svelte-7hpc9t">Focus</span> <span class="meta-value svelte-7hpc9t">Full-Stack, Backend, Devops</span></div></div></div></div></section>`);
  });
}
function ProjectRow($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, year, description, tags, github, gitlab, live, index } = $$props;
    let open = false;
    $$renderer2.push(`<article${attr_class("row svelte-1ftngtl", void 0, { "open": open })}><button class="row-header svelte-1ftngtl"${attr("aria-expanded", open)}><span class="row-index svelte-1ftngtl">0${escape_html(index + 1)}</span> <span class="row-title svelte-1ftngtl">${escape_html(title)}</span> <span class="row-year svelte-1ftngtl">${escape_html(year)}</span> <span class="row-tags svelte-1ftngtl"><!--[-->`);
    const each_array = ensure_array_like(tags.slice(0, 3));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="tag svelte-1ftngtl">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></span> <span class="row-toggle svelte-1ftngtl" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" stroke-width="1.2" class="v-line svelte-1ftngtl"></line><line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" stroke-width="1.2"></line></svg></span></button> <div class="row-body svelte-1ftngtl"><div class="row-body-inner svelte-1ftngtl"><p class="row-desc svelte-1ftngtl">${escape_html(description)}</p> <div class="row-links svelte-1ftngtl">`);
    if (github) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", github)} target="_blank" rel="noopener" class="link svelte-1ftngtl">GitHub</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (gitlab) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", gitlab)} target="_blank" rel="noopener" class="link svelte-1ftngtl">GitLab</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (live) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", live)} target="_blank" rel="noopener" class="link svelte-1ftngtl">Live site</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <ul class="all-tags svelte-1ftngtl"><!--[-->`);
    const each_array_1 = ensure_array_like(tags);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let tag = each_array_1[$$index_1];
      $$renderer2.push(`<li class="svelte-1ftngtl">${escape_html(tag)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div></article>`);
  });
}
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="projects"${attr_class("svelte-1tes396", void 0, { "visible": visible })}><div class="container header-row svelte-1tes396"><div class="label-col svelte-1tes396"><span class="section-num svelte-1tes396">02</span> <span class="section-name svelte-1tes396">Projects</span></div> <h2>My Most Recent Projects</h2></div> <div${attr_class("list svelte-1tes396", void 0, { "visible": visible })}><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let project = each_array[i];
      ProjectRow($$renderer2, {
        title: project.title,
        year: project.year,
        description: project.description,
        tags: project.tags,
        github: project.github,
        gitlab: project.gitlab,
        live: project.live,
        index: i
      });
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function Skills($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    const categories = Object.entries(skills);
    $$renderer2.push(`<section id="skills"${attr_class("svelte-1f1pl16", void 0, { "visible": visible })}><div class="container layout svelte-1f1pl16"><div class="left svelte-1f1pl16"><div class="label-col svelte-1f1pl16"><span class="section-num svelte-1f1pl16">03</span> <span class="section-name svelte-1f1pl16">Skills</span></div> <h2 class="svelte-1f1pl16">What I bring.</h2></div> <div class="right svelte-1f1pl16"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let [category, items] = each_array[i];
      $$renderer2.push(`<div class="group svelte-1f1pl16"${attr_style(`transition-delay: ${stringify(i * 80)}ms`)}><h3 class="group-title svelte-1f1pl16">${escape_html(category)}</h3> <ul class="svelte-1f1pl16"><!--[-->`);
      const each_array_1 = ensure_array_like(items);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let item = each_array_1[$$index];
        $$renderer2.push(`<li class="svelte-1f1pl16">${escape_html(item)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    let name = "";
    let email = "";
    let message = "";
    let status = "idle";
    $$renderer2.push(`<section id="contact"${attr_class("svelte-wt4tt0", void 0, { "visible": visible })}><div class="container layout svelte-wt4tt0"><div class="left svelte-wt4tt0"><div class="label-col svelte-wt4tt0"><span class="section-num svelte-wt4tt0">04</span> <span class="section-name svelte-wt4tt0">Contact</span></div> <h2 class="svelte-wt4tt0">Get<br/><em class="svelte-wt4tt0">in touch</em></h2> <p class="svelte-wt4tt0">I'm open to Internships Starting ${escape_html(meta.available)}.
				Reach out about a role, a project, I am always open to build something new.</p> <div class="direct-links svelte-wt4tt0"><a${attr("href", `mailto:${stringify(meta.email)}`)} class="direct-link svelte-wt4tt0">${escape_html(meta.email)}</a> <a${attr("href", meta.linkedin)} target="_blank" rel="noopener" class="direct-link svelte-wt4tt0">LinkedIn</a></div></div> <div class="right svelte-wt4tt0">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<form class="svelte-wt4tt0"><div class="field svelte-wt4tt0"><label for="cf-name" class="svelte-wt4tt0">Name</label> <input id="cf-name" type="text"${attr("value", name)} placeholder="Your Name" required="" class="svelte-wt4tt0"/></div> <div class="field svelte-wt4tt0"><label for="cf-email" class="svelte-wt4tt0">Email</label> <input id="cf-email" type="email"${attr("value", email)} placeholder="youremail@gmail.com" required="" class="svelte-wt4tt0"/></div> <div class="field svelte-wt4tt0"><label for="cf-message" class="svelte-wt4tt0">Message</label> <textarea id="cf-message" placeholder="What would you like to say?" rows="5" required="" class="svelte-wt4tt0">`);
      const $$body = escape_html(message);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div> <button type="submit"${attr("disabled", status === "sending", true)} class="svelte-wt4tt0">${escape_html("Send message")}</button></form>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="container footer svelte-wt4tt0"><span>${escape_html(meta.name)} — ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}</span></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(meta.name)} — ${escape_html(meta.role)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", meta.tagline)}/>`);
    });
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    About($$renderer2);
    $$renderer2.push(`<!----> `);
    Projects($$renderer2);
    $$renderer2.push(`<!----> `);
    Skills($$renderer2);
    $$renderer2.push(`<!----> `);
    Contact($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
