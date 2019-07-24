'use strict';

var __chunk_1 = require('./chunk-2928b3f8.js');

/* src/components/ResearchInput.svelte generated by Svelte v3.6.7 */

const css = {
	code: "div.svelte-yo52x0{width:100%;height:100%}img.svelte-yo52x0{width:100%}h2.svelte-yo52x0{text-align:center}",
	map: "{\"version\":3,\"file\":\"ResearchInput.svelte\",\"sources\":[\"ResearchInput.svelte\"],\"sourcesContent\":[\"<script>\\n    let m = {\\n        x: 0,\\n        y: 0\\n    };\\n\\n    function handleMousemove(event) {\\n        m.x = event.clientX;\\n        m.y = event.clientY;\\n    }\\n\\n    let src = 'homepage.png'\\n</script>\\n\\n<style>\\n    div {\\n        width: 100%;\\n        height: 100%;\\n    }\\n    \\n    img {\\n        width: 100%;\\n    }\\n    \\n    h2 {\\n        text-align: center;\\n    }\\n</style>\\n\\n<div on:mousemove={handleMousemove}>\\n    <h2>Move mouse around page</h2>\\n    <img {src} alt=\\\"Mesosphere homepage\\\"> The mouse position is {m.x} x {m.y}\\n</div>\"],\"names\":[],\"mappings\":\"AAeI,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AAChB,CAAC,AAED,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACA,UAAU,CAAE,MAAM,AACtB,CAAC\"}"
};

let src = 'homepage.png';

const ResearchInput = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let m = {
        x: 0,
        y: 0
    };

	$$result.css.add(css);

	return `<div class="svelte-yo52x0">
	    <h2 class="svelte-yo52x0">Move mouse around page</h2>
	    <img${(v => v == null ? "" : ` src="${__chunk_1.escape(src)}"`)(src)} alt="Mesosphere homepage" class="svelte-yo52x0"> The mouse position is ${__chunk_1.escape(m.x)} x ${__chunk_1.escape(m.y)}
	</div>`;
});

/* src/components/ResearchOutput.svelte generated by Svelte v3.6.7 */

const css$1 = {
	code: "div.svelte-yo52x0{width:100%;height:100%}img.svelte-yo52x0{width:100%}h2.svelte-yo52x0{text-align:center}",
	map: "{\"version\":3,\"file\":\"ResearchOutput.svelte\",\"sources\":[\"ResearchOutput.svelte\"],\"sourcesContent\":[\"<script>\\n    let src = 'homepage.png'\\n</script>\\n\\n<style>\\n    div {\\n        width: 100%;\\n        height: 100%;\\n    }\\n    \\n    img {\\n        width: 100%;\\n    }\\n    \\n    h2 {\\n        text-align: center;\\n    }\\n</style>\\n\\n<div>\\n    <h2>Observe user's cursor in real-time</h2>\\n    <img {src} alt=\\\"Mesosphere homepage\\\">\\n</div>\"],\"names\":[],\"mappings\":\"AAKI,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AAChB,CAAC,AAED,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACA,UAAU,CAAE,MAAM,AACtB,CAAC\"}"
};

let src$1 = 'homepage.png';

const ResearchOutput = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);

	return `<div class="svelte-yo52x0">
	    <h2 class="svelte-yo52x0">Observe user's cursor in real-time</h2>
	    <img${(v => v == null ? "" : ` src="${__chunk_1.escape(src$1)}"`)(src$1)} alt="Mesosphere homepage" class="svelte-yo52x0">
	</div>`;
});

/* src/routes/user-research.svelte generated by Svelte v3.6.7 */

const css$2 = {
	code: ".header.svelte-sdis7g{grid-column:1 / -1}h1.svelte-sdis7g{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0;text-align:center;color:rgba(51, 0, 114, 1)\n    }#architecture__collapse__button.svelte-sdis7g{z-index:1;font-size:150%;border:1px solid rgba(83, 86, 90, 1);cursor:pointer;color:rgba(255, 255, 255, 1);border-radius:1rem;margin-right:auto;margin-bottom:auto;position:absolute;top:0;left:-1.5em}#research_input.svelte-sdis7g{grid-column:1}#research_output.svelte-sdis7g{grid-column:2}button.svelte-sdis7g,button.svelte-sdis7g:link,button.svelte-sdis7g:visited{text-transform:uppercase;text-decoration:none;border-radius:3rem;-webkit-transition:all 0.2s;transition:all 0.2s;position:relative;font-size:150%;cursor:pointer;margin-right:auto;margin-bottom:auto;background-color:rgba(51, 0, 114, 1)}button.svelte-sdis7g:hover,button.svelte-sdis7g:link:hover,button.svelte-sdis7g:visited:hover{-webkit-transform:translateY(-3px);transform:translateY(-3px);-webkit-box-shadow:0 1rem 2rem rgba(0, 0, 0, 0.2);box-shadow:0 1rem 2rem rgba(0, 0, 0, 0.2)\n    }button.svelte-sdis7g:hover::after,button.svelte-sdis7g:link:hover::after,button.svelte-sdis7g:visited:hover::after{-webkit-transform:scaleX(1.4) scaleY(1.6);transform:scaleX(1.4) scaleY(1.6);opacity:0\n    }button.svelte-sdis7g:active,button.svelte-sdis7g:focus,button.svelte-sdis7g:link:active,button.svelte-sdis7g:link:focus,button.svelte-sdis7g:visited:active,button.svelte-sdis7g:visited:focus{outline:none;-webkit-transform:translateY(-1px);transform:translateY(-1px);-webkit-box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2);box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2)\n    }button.svelte-sdis7g::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;-webkit-transition:all 0.4s;transition:all 0.4s\n    }#architecture__diagram.svelte-sdis7g{grid-column:1 / -1;grid-row:2;z-index:2}#architecture__diagram.svelte-sdis7g img.svelte-sdis7g{width:100%;box-shadow:2px 2px 8px rgba(0, 0, 0, 0.1)}",
	map: "{\"version\":3,\"file\":\"user-research.svelte\",\"sources\":[\"user-research.svelte\"],\"sourcesContent\":[\"<script>\\n    import {\\n        fade,\\n        fly,\\n        slide\\n    } from 'svelte/transition';\\n\\n    import ResearchInput from '../components/ResearchInput.svelte';\\n    import ResearchOutput from '../components/ResearchOutput.svelte';\\n    let src = '2019_07_19-arch-diagram.svg'\\n    let arch_collapsed = false\\n\\n    function handle_collapse_click(e) {\\n        arch_collapsed = !arch_collapsed\\n    }\\n</script>\\n\\n<style>\\n    .header {\\n        grid-column: 1 / -1;\\n    }\\n    \\n    h1 {\\n        font-size: 2.8em;\\n        text-transform: uppercase;\\n        font-weight: 700;\\n        margin: 0 0 0.5em 0;\\n        text-align: center;\\n        color: rgba(51, 0, 114, 1)\\n    }\\n    \\n    #architecture__collapse__button {\\n        z-index: 1;\\n        /* width: 2.5em; */\\n        /* height: 1em; */\\n        /* margin: 0;\\n        padding: 0; */\\n        font-size: 150%;\\n        border: 1px solid rgba(83, 86, 90, 1);\\n        cursor: pointer;\\n        /* margin: auto; */\\n        color: rgba(255, 255, 255, 1);\\n        border-radius: 1rem;\\n        margin-right: auto;\\n        margin-bottom: auto;\\n        position: absolute;\\n        top: 0;\\n        left: -1.5em;\\n    }\\n    \\n    #research_input {\\n        grid-column: 1;\\n    }\\n    \\n    #research_output {\\n        grid-column: 2;\\n    }\\n    \\n    button,\\n    button:link,\\n    button:visited {\\n        text-transform: uppercase;\\n        text-decoration: none;\\n        /* padding: 1.5rem 1.5rem; */\\n        /* display: inline-block; */\\n        border-radius: 3rem;\\n        -webkit-transition: all 0.2s;\\n        transition: all 0.2s;\\n        position: relative;\\n        font-size: 150%;\\n        /* border: 1px solid rgba(51, 0, 114, 1); */\\n        cursor: pointer;\\n        margin-right: auto;\\n        margin-bottom: auto;\\n        /* color: rgba(51, 0, 114, 1); */\\n        background-color: rgba(51, 0, 114, 1);\\n    }\\n    \\n    button:hover,\\n    button:link:hover,\\n    button:visited:hover {\\n        -webkit-transform: translateY(-3px);\\n        transform: translateY(-3px);\\n        -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2)\\n    }\\n    \\n    button:hover::after,\\n    button:link:hover::after,\\n    button:visited:hover::after {\\n        -webkit-transform: scaleX(1.4) scaleY(1.6);\\n        transform: scaleX(1.4) scaleY(1.6);\\n        opacity: 0\\n    }\\n    \\n    button:active,\\n    button:focus,\\n    button:link:active,\\n    button:link:focus,\\n    button:visited:active,\\n    button:visited:focus {\\n        outline: none;\\n        -webkit-transform: translateY(-1px);\\n        transform: translateY(-1px);\\n        -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);\\n        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2)\\n    }\\n    \\n    button::after {\\n        content: \\\"\\\";\\n        display: inline-block;\\n        height: 100%;\\n        width: 100%;\\n        border-radius: 10rem;\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        z-index: -1;\\n        -webkit-transition: all 0.4s;\\n        transition: all 0.4s\\n    }\\n    \\n    #architecture__diagram {\\n        grid-column: 1 / -1;\\n        grid-row: 2;\\n        z-index: 2;\\n        /* height: 90vh; */\\n    }\\n    \\n    #architecture__diagram img {\\n        width: 100%;\\n        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);\\n    }\\n    \\n    #architecture__diagram button {\\n        width: 1em;\\n    }\\n</style>\\n\\n<div class=\\\"header\\\">\\n    <h1>Factory Status</h1>\\n</div>\\n<span style=\\\"position: relative; grid-row: 2; grid-column: 1 /2;\\\">\\n<button id=\\\"architecture__collapse__button\\\" on:click={handle_collapse_click} in:fade=\\\"{{duration: 200}}\\\" out:fade=\\\"{{duration: 0}}\\\">\\n            {arch_collapsed ? \\\"+\\\" : \\\"-\\\"}\\n</button>\\n</span> {#if !arch_collapsed}\\n\\n<div id=\\\"architecture__diagram\\\" in:fade=\\\"{{duration: 200}}\\\" out:fade=\\\"{{duration: 0}}\\\">\\n    <img {src} alt=\\\"architecture diagram\\\">\\n</div>\\n{:else}\\n<div id=\\\"research_input\\\" in:fade=\\\"{{duration: 200}}\\\" out:fade=\\\"{{duration: 0}}\\\">\\n    <ResearchInput />\\n</div>\\n<div id=\\\"research_output\\\" in:fade=\\\"{{duration: 200}}\\\" out:fade=\\\"{{duration: 0}}\\\">\\n    <ResearchOutput />\\n</div>\\n<!-- <div id=\\\"actor_status\\\" in:fade=\\\"{{duration: 200}}\\\" out:fade=\\\"{{duration: 0}}\\\">\\n    <ActorStatus />\\n</div> -->\\n{/if}\"],\"names\":[],\"mappings\":\"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\"}"
};

let src$2 = '2019_07_19-arch-diagram.svg';

const User_research = __chunk_1.create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	
    let arch_collapsed = false;

	$$result.css.add(css$2);

	return `<div class="header svelte-sdis7g">
	    <h1 class="svelte-sdis7g">Factory Status</h1>
	</div>
	<span style="position: relative; grid-row: 2; grid-column: 1 /2;">
	<button id="architecture__collapse__button" class="svelte-sdis7g">
	            ${__chunk_1.escape(arch_collapsed ? "+" : "-")}
	</button>
	</span> ${ !arch_collapsed ? `<div id="architecture__diagram" class="svelte-sdis7g">
	    <img${(v => v == null ? "" : ` src="${__chunk_1.escape(src$2)}"`)(src$2)} alt="architecture diagram" class="svelte-sdis7g">
	</div>` : `<div id="research_input" class="svelte-sdis7g">
	    ${__chunk_1.validate_component(ResearchInput, 'ResearchInput').$$render($$result, {}, {}, {})}
	</div>
	<div id="research_output" class="svelte-sdis7g">
	    ${__chunk_1.validate_component(ResearchOutput, 'ResearchOutput').$$render($$result, {}, {}, {})}
	</div>
	` }`;
});

exports.default = User_research;
