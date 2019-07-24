import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, d as claim_text, c as claim_element, b as children, f as detach, g as attr, h as add_location, D as listen, j as insert, k as append, n as noop } from './chunk.1f1ec905.js';
import { g as goto } from './chunk.de9a645c.js';
import './chunk.1a249daf.js';

/* src/routes/index.svelte generated by Svelte v3.6.7 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div0, h1, t1, t2, h2, t3, t4, div1, button, t5, dispose;

	return {
		c: function create() {
			t0 = space();
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Konvoy + Kudo Studio");
			t2 = space();
			h2 = element("h2");
			t3 = text("Applied examples of stateful data services on Konvoy");
			t4 = space();
			div1 = element("div");
			button = element("button");
			t5 = text("Get Started");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			div0 = claim_element(nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h1 = claim_element(div0_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Konvoy + Kudo Studio");
			h1_nodes.forEach(detach);
			t2 = claim_text(div0_nodes, "\n    ");

			h2 = claim_element(div0_nodes, "H2", { class: true }, false);
			var h2_nodes = children(h2);

			t3 = claim_text(h2_nodes, "Applied examples of stateful data services on Konvoy");
			h2_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t4 = claim_text(nodes, "\n\n");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			button = claim_element(div1_nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			t5 = claim_text(button_nodes, "Get Started");
			button_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			document.title = "Dashboard";
			attr(h1, "class", "svelte-1ydhu8i");
			add_location(h1, file, 109, 4, 2495);
			attr(h2, "class", "svelte-1ydhu8i");
			add_location(h2, file, 112, 4, 2543);
			attr(div0, "class", "header svelte-1ydhu8i");
			add_location(div0, file, 108, 0, 2470);
			attr(button, "class", "cta__button svelte-1ydhu8i");
			add_location(button, file, 118, 4, 2649);
			attr(div1, "class", "cta svelte-1ydhu8i");
			add_location(div1, file, 117, 0, 2627);
			dispose = listen(button, "click", handle_get_started_click);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, div0, anchor);
			append(div0, h1);
			append(h1, t1);
			append(div0, t2);
			append(div0, h2);
			append(h2, t3);
			insert(target, t4, anchor);
			insert(target, div1, anchor);
			append(div1, button);
			append(button, t5);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(div0);
				detach(t4);
				detach(div1);
			}

			dispose();
		}
	};
}

function handle_get_started_click(e) {
    goto(`iot`);
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
