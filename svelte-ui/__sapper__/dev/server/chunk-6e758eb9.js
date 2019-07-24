'use strict';

var __chunk_1 = require('./chunk-2928b3f8.js');
var __chunk_2 = require('./chunk-7e455c06.js');

const CONTEXT_KEY = {};

const preload = () => ({});

/* src/components/Nav.svelte generated by Svelte v3.6.7 */

const css = {
	code: "nav.svelte-1hcg7m5{border-bottom:1px solid rgba(255, 62, 0, 0.1);font-weight:300;padding:0 1em;color:rgba(83, 86, 90, 1)}ul.svelte-1hcg7m5{margin:0;padding:0}ul.svelte-1hcg7m5::after{content:'';display:block;clear:both}li.svelte-1hcg7m5{display:block;float:left}.selected.svelte-1hcg7m5{position:relative;display:inline-block}.selected.svelte-1hcg7m5::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgba(150, 120, 211, 1);display:block;bottom:-1px}a.svelte-1hcg7m5{text-decoration:none;padding:1em 0.5em;display:block}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n    export let segment;\\n</script>\\n\\n<style>\\n    nav {\\n        border-bottom: 1px solid rgba(255, 62, 0, 0.1);\\n        font-weight: 300;\\n        padding: 0 1em;\\n        color: rgba(83, 86, 90, 1);\\n    }\\n    \\n    ul {\\n        margin: 0;\\n        padding: 0;\\n    }\\n    /* clearfix */\\n    \\n    ul::after {\\n        content: '';\\n        display: block;\\n        clear: both;\\n    }\\n    \\n    li {\\n        display: block;\\n        float: left;\\n    }\\n    \\n    .selected {\\n        position: relative;\\n        display: inline-block;\\n    }\\n    \\n    .selected::after {\\n        position: absolute;\\n        content: '';\\n        width: calc(100% - 1em);\\n        height: 2px;\\n        background-color: rgba(150, 120, 211, 1);\\n        display: block;\\n        bottom: -1px;\\n    }\\n    \\n    a {\\n        text-decoration: none;\\n        padding: 1em 0.5em;\\n        display: block;\\n    }\\n</style>\\n\\n<nav>\\n    <ul>\\n        <li><a class='{segment === undefined ? \\\"selected\\\" : \\\"\\\"}' href='.'>home</a></li>\\n        <li><a class='{segment === \\\"about\\\" ? \\\"selected\\\" : \\\"\\\"}' href='about'>about</a></li>\\n        <li><a class='{segment === \\\"iot\\\" ? \\\"selected\\\" : \\\"\\\"}' href='iot'>manufacturing & IoT</a></li>\\n        <li><a class='{segment === \\\"user-research\\\" ? \\\"selected\\\" : \\\"\\\"}' href='user-research'>user research</a></li>\\n    </ul>\\n</nav>\"],\"names\":[],\"mappings\":\"AAKI,GAAG,eAAC,CAAC,AACD,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC9C,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,AAC9B,CAAC,AAED,EAAE,eAAC,CAAC,AACA,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACd,CAAC,AAGD,iBAAE,OAAO,AAAC,CAAC,AACP,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACA,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACf,CAAC,AAED,SAAS,eAAC,CAAC,AACP,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACzB,CAAC,AAED,wBAAS,OAAO,AAAC,CAAC,AACd,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC,CACxC,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AAChB,CAAC,AAED,CAAC,eAAC,CAAC,AACC,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AAClB,CAAC\"}"
};

const Nav = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css);

	return `<nav class="svelte-1hcg7m5">
	    <ul class="svelte-1hcg7m5">
	        <li class="svelte-1hcg7m5"><a class="${__chunk_1.escape(segment === undefined ? "selected" : "")} svelte-1hcg7m5" href=".">home</a></li>
	        <li class="svelte-1hcg7m5"><a class="${__chunk_1.escape(segment === "about" ? "selected" : "")} svelte-1hcg7m5" href="about">about</a></li>
	        <li class="svelte-1hcg7m5"><a class="${__chunk_1.escape(segment === "iot" ? "selected" : "")} svelte-1hcg7m5" href="iot">manufacturing &amp; IoT</a></li>
	        <li class="svelte-1hcg7m5"><a class="${__chunk_1.escape(segment === "user-research" ? "selected" : "")} svelte-1hcg7m5" href="user-research">user research</a></li>
	    </ul>
	</nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.6.7 */

const css$1 = {
	code: "main.svelte-cd8z05{position:relative;max-width:56em;background-color:white;color:rgba(83, 86, 90, 1);padding:2em;margin:0 auto;box-sizing:border-box;display:grid;grid-template-columns:1fr 1fr;grid-gap:1em}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<style>\\n    main {\\n        position: relative;\\n        max-width: 56em;\\n        background-color: white;\\n        color: rgba(83, 86, 90, 1);\\n        padding: 2em;\\n        margin: 0 auto;\\n        box-sizing: border-box;\\n        display: grid;\\n        grid-template-columns: 1fr 1fr;\\n        /* grid-template-rows: repeat(4, min-content); */\\n        grid-gap: 1em;\\n    }\\n    \\n    button,\\n    button:link,\\n    button:visited {\\n        text-transform: uppercase;\\n        text-decoration: none;\\n        padding: 1.5rem 1.5rem;\\n        /* display: inline-block; */\\n        border-radius: 3rem;\\n        -webkit-transition: all 0.2s;\\n        transition: all 0.2s;\\n        position: relative;\\n        font-size: 150%;\\n        border: 1px solid rgba(51, 0, 114, 1);\\n        cursor: pointer;\\n        margin: auto;\\n        color: rgba(51, 0, 114, 1);\\n    }\\n    \\n    button:hover,\\n    button:link:hover,\\n    button:visited:hover {\\n        -webkit-transform: translateY(-3px);\\n        transform: translateY(-3px);\\n        -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2)\\n    }\\n    \\n    button:hover::after,\\n    button:link:hover::after,\\n    button:visited:hover::after {\\n        -webkit-transform: scaleX(1.4) scaleY(1.6);\\n        transform: scaleX(1.4) scaleY(1.6);\\n        opacity: 0\\n    }\\n    \\n    button:active,\\n    button:focus,\\n    button:link:active,\\n    button:link:focus,\\n    button:visited:active,\\n    button:visited:focus {\\n        outline: none;\\n        -webkit-transform: translateY(-1px);\\n        transform: translateY(-1px);\\n        -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2)\\n    }\\n    \\n    button::after {\\n        content: \\\"\\\";\\n        display: inline-block;\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 10rem;\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        z-index: -1;\\n        -webkit-transition: all 0.4s;\\n        transition: all 0.4s\\n    }\\n</style>\\n\\n\\n<script>\\n    import Nav from '../components/Nav.svelte';\\n    export let segment;\\n</script>\\n\\n\\n<Nav {segment} />\\n\\n\\n\\n\\n<main>\\n    <slot></slot>\\n</main>\"],\"names\":[],\"mappings\":\"AACI,IAAI,cAAC,CAAC,AACF,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,CAAC,CAC1B,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,CACtB,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAE9B,QAAQ,CAAE,GAAG,AACjB,CAAC\"}"
};

const Layout = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;

	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);

	$$result.css.add(css$1);

	return `${__chunk_1.validate_component(Nav, 'Nav').$$render($$result, { segment: segment }, {}, {})}




	<main class="svelte-cd8z05">
	    ${$$slots.default ? $$slots.default() : ``}
	</main>`;
});

/* src/routes/_error.svelte generated by Svelte v3.6.7 */

const css$2 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status, error } = $$props;

	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);

	$$result.css.add(css$2);

	return `${($$result.head += `<title>${__chunk_1.escape(status)}</title>`, "")}

	<h1 class="svelte-8od9u6">${__chunk_1.escape(status)}</h1>

	<p class="svelte-8od9u6">${__chunk_1.escape(error.message)}</p>

	${  error.stack ? `<pre>${__chunk_1.escape(error.stack)}</pre>` : `` }`;
});

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.6.7 */

const App = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	

	let { stores, error, status, segments, level0, level1 = null } = $$props;

	__chunk_1.setContext(CONTEXT_KEY, stores);

	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


	${__chunk_1.validate_component(Layout, 'Layout').$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `
		${ error ? `${__chunk_1.validate_component(Error$1, 'Error').$$render($$result, { error: error, status: status }, {}, {})}` : `${__chunk_1.validate_component(((level1.component) || __chunk_1.missing_component), 'svelte:component').$$render($$result, Object.assign(level1.props), {}, {})}` }
	`
	})}`;
});

// This file is generated by Sapper — do not edit it!

const ignore = [/^\/stores\/?$/];

const components = [
	{
		js: () => Promise.resolve().then(function () { return index; }),
		css: "__SAPPER_CSS_PLACEHOLDER:index.svelte__"
	},
	{
		js: () => new Promise(function (resolve) { resolve(require('./user-research-af8a4641.js')); }),
		css: "__SAPPER_CSS_PLACEHOLDER:user-research.svelte__"
	},
	{
		js: () => new Promise(function (resolve) { resolve(require('./about-32271060.js')); }),
		css: "__SAPPER_CSS_PLACEHOLDER:about.svelte__"
	},
	{
		js: () => new Promise(function (resolve) { resolve(require('./iot-6641635e.js')); }),
		css: "__SAPPER_CSS_PLACEHOLDER:iot.svelte__"
	}
];

const routes = [
	{
		// index.svelte
		pattern: /^\/$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// user-research.svelte
		pattern: /^\/user-research\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// iot.svelte
		pattern: /^\/iot\/?$/,
		parts: [
			{ i: 3 }
		]
	}
];

if (typeof window !== 'undefined') {
	new Promise(function (resolve) { resolve(require('./sapper-dev-client-39a0eff9.js')); }).then(client => {
		client.connect(10000);
	});
}

function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];
let current_query = '{}';

const stores = {
	page: __chunk_2.writable({}),
	preloading: __chunk_2.writable(null),
	session: __chunk_2.writable(initial_data && initial_data.session)
};

let $session;
let session_dirty;

stores.session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;

let target;

let uid = 1;

let cid;

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function extract_query(search) {
	const query = Object.create(null);
	if (search.length > 0) {
		search.slice(1).split('&').forEach(searchParam => {
			let [, key, value = ''] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam.replace(/\+/g, ' ')));
			if (typeof query[key] === 'string') query[key] = [query[key]];
			if (typeof query[key] === 'object') (query[key] ).push(value);
			else query[key] = value;
		});
	}
	return query;
}

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	let path = url.pathname.slice(initial_data.baseUrl.length);

	if (path === '') {
		path = '/';
	}

	// avoid accidental clashes between server routes and page routes
	if (ignore.some(pattern => pattern.test(path))) return;

	for (let i = 0; i < routes.length; i += 1) {
		const route = routes[i];

		const match = route.pattern.exec(path);

		if (match) {
			const query = extract_query(url.search);
			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.stores = {
			page: { subscribe: stores.page.subscribe },
			preloading: { subscribe: stores.preloading.subscribe },
			session: stores.session
		};
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new App({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	current_query = JSON.stringify(page.query);
	ready = true;
	session_dirty = false;
}

function part_changed(i, segment, match, stringified_query) {
	// TODO only check query string changes for preload functions
	// that do in fact depend on it (using static analysis or
	// runtime instrumentation)
	if (stringified_query !== current_query) return true;

	const previous = current_branch[i];

	if (!previous) return false;
	if (segment !== previous.segment) return true;
	if (previous.match) {
		if (JSON.stringify(previous.match.slice(1, i + 2)) !== JSON.stringify(match.slice(1, i + 2))) {
			return true;
		}
	}
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		const stringified_query = JSON.stringify(page.query);
		const match = route.pattern.exec(page.path);

		let segment_dirty = false;

		branch = await Promise.all(route.parts.map(async (part, i) => {
			const segment = segments[i];

			if (part_changed(i, segment, match, stringified_query)) segment_dirty = true;

			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return { segment };

			const j = l++;

			if (!session_dirty && !segment_dirty && current_branch[i] && current_branch[i].part === part.i) {
				return current_branch[i];
			}

			segment_dirty = false;

			const { default: component, preload } = await load_component(components[part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment, match, part: part.i });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

/* src/routes/index.svelte generated by Svelte v3.6.7 */

const css$3 = {
	code: ".header.svelte-1ydhu8i{grid-column:1 / -1;height:40vh;margin-top:5em}.header.svelte-1ydhu8i h1.svelte-1ydhu8i{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0;text-align:center;color:rgba(51, 0, 114, 1)\n    }.header.svelte-1ydhu8i h2.svelte-1ydhu8i{font-size:1.4em;font-weight:300;margin:0 0 0.5em 0;text-align:center}.cta.svelte-1ydhu8i{display:flex;grid-column:1 / -1;grid-row:2}button.svelte-1ydhu8i,button.svelte-1ydhu8i:link,button.svelte-1ydhu8i:visited{text-transform:uppercase;text-decoration:none;padding:1.5rem 1.5rem;border-radius:3rem;-webkit-transition:all 0.2s;transition:all 0.2s;position:relative;font-size:150%;border:1px solid rgba(51, 0, 114, 1);cursor:pointer;margin:auto;color:rgba(51, 0, 114, 1)}button.svelte-1ydhu8i:hover,button.svelte-1ydhu8i:link:hover,button.svelte-1ydhu8i:visited:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 1rem 2rem rgba(0, 0, 0, 0.2);box-shadow:0 1rem 2rem rgba(0, 0, 0, 0.2)\n    }button.svelte-1ydhu8i:hover::after,button.svelte-1ydhu8i:link:hover::after,button.svelte-1ydhu8i:visited:hover::after{-webkit-transform:scaleX(1.4) scaleY(1.6);transform:scaleX(1.4) scaleY(1.6);opacity:0\n    }button.svelte-1ydhu8i:active,button.svelte-1ydhu8i:focus,button.svelte-1ydhu8i:link:active,button.svelte-1ydhu8i:link:focus,button.svelte-1ydhu8i:visited:active,button.svelte-1ydhu8i:visited:focus{outline:none;-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2);box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2);-webkit-transform:rotateX(90deg);transform:rotateX(90deg)}button.svelte-1ydhu8i::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all 0.4s;transition:all 0.4s\n    }",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<style>\\n    .header {\\n        grid-column: 1 / -1;\\n        height: 40vh;\\n        margin-top: 5em;\\n    }\\n    \\n    .header h1 {\\n        font-size: 2.8em;\\n        text-transform: uppercase;\\n        font-weight: 700;\\n        margin: 0 0 0.5em 0;\\n        text-align: center;\\n        color: rgba(51, 0, 114, 1)\\n    }\\n    \\n    .header h2 {\\n        font-size: 1.4em;\\n        font-weight: 300;\\n        margin: 0 0 0.5em 0;\\n        text-align: center;\\n    }\\n    \\n    .cta {\\n        display: flex;\\n        grid-column: 1 / -1;\\n        grid-row: 2;\\n    }\\n    \\n    button,\\n    button:link,\\n    button:visited {\\n        text-transform: uppercase;\\n        text-decoration: none;\\n        padding: 1.5rem 1.5rem;\\n        /* display: inline-block; */\\n        border-radius: 3rem;\\n        -webkit-transition: all 0.2s;\\n        transition: all 0.2s;\\n        position: relative;\\n        font-size: 150%;\\n        border: 1px solid rgba(51, 0, 114, 1);\\n        cursor: pointer;\\n        margin: auto;\\n        color: rgba(51, 0, 114, 1);\\n    }\\n    \\n    button:hover,\\n    button:link:hover,\\n    button:visited:hover {\\n        -webkit-transform: translateY(-3px);\\n        transform: translateY(-3px);\\n        -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2)\\n    }\\n    \\n    button:hover::after,\\n    button:link:hover::after,\\n    button:visited:hover::after {\\n        -webkit-transform: scaleX(1.4) scaleY(1.6);\\n        transform: scaleX(1.4) scaleY(1.6);\\n        opacity: 0\\n    }\\n    \\n    button:active,\\n    button:focus,\\n    button:link:active,\\n    button:link:focus,\\n    button:visited:active,\\n    button:visited:focus {\\n        outline: none;\\n        -webkit-transform: translateY(-1px);\\n        transform: translateY(-1px);\\n        -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\\n        -webkit-transform: rotateX(90deg);\\n        transform: rotateX(90deg);\\n    }\\n    \\n    button::after {\\n        content: \\\"\\\";\\n        display: inline-block;\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 10rem;\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        z-index: -1;\\n        -webkit-transition: all 0.4s;\\n        transition: all 0.4s\\n    }\\n</style>\\n\\n<script>\\n    import {\\n        goto\\n    } from '@sapper/app';\\n\\n    function handle_get_started_click(e) {\\n        goto(`iot`)\\n    }\\n</script>\\n\\n<svelte:head>\\n    <title>Dashboard</title>\\n</svelte:head>\\n\\n<div class=\\\"header\\\">\\n    <h1>\\n        Konvoy + Kudo Studio\\n    </h1>\\n    <h2>\\n        Applied examples of stateful data services on Konvoy\\n    </h2>\\n</div>\\n\\n<div class=\\\"cta\\\">\\n    <button class=\\\"cta__button\\\" on:click={handle_get_started_click}>\\n\\t\\t\\tGet Started\\n\\t</button>\\n</div>\\n\\n\\n<!-- <div class=\\\"text\\\">\\n\\t<h3>Much benefits!</h3>\\n\\t<p>\\n\\t\\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\\n\\t\\taliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n\\t\\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n\\t\\tsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n\\t</p>\\n</div>\\n\\n<div class=\\\"text\\\">\\n\\t<h3>Such features!</h3>\\n\\t<p>\\n\\t\\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\\n\\t\\taliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\n\\t\\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\\n\\t\\tsint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\n\\t</p>\\n</div> -->\"],\"names\":[],\"mappings\":\"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\"}"
};

const Index = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `<title>Dashboard</title>`, "")}

	<div class="header svelte-1ydhu8i">
	    <h1 class="svelte-1ydhu8i">
	        Konvoy + Kudo Studio
	    </h1>
	    <h2 class="svelte-1ydhu8i">
	        Applied examples of stateful data services on Konvoy
	    </h2>
	</div>

	<div class="cta svelte-1ydhu8i">
	    <button class="cta__button svelte-1ydhu8i">
				Get Started
		</button>
	</div>


	`;
});

var index = /*#__PURE__*/Object.freeze({
    'default': Index
});

exports.App = App;
exports.component_0 = Index;
exports.error = Error$1;
exports.root = Layout;
