<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data';

	let visible = $state(false);
	onMount(() => { requestAnimationFrame(() => { visible = true; }); });
</script>

<section class="hero" class:visible>
	<!-- large green background shape -->
	<div class="bg-block" aria-hidden="true"></div>

	<!-- floating orbs -->
	<div class="orb orb-1" aria-hidden="true"></div>
	<div class="orb orb-2" aria-hidden="true"></div>

	<div class="container hero-inner">
		<div class="hero-text">
			<p class="availability">{meta.available} — Open to Internships</p>
			<h1>{meta.name}</h1>
			<div class="rule"></div>
			<p class="role">{meta.role}<span class="sep"> — </span>{meta.location}</p>
		</div>

		<p class="tagline">{meta.tagline}</p>
	</div>

	<div class="scroll-indicator" aria-hidden="true">
		<div class="scroll-track"><div class="scroll-thumb"></div></div>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		align-items: flex-end;
		padding-bottom: clamp(4rem, 8vw, 7rem);
		position: relative;
		overflow: hidden;
	}

	/* The big green block — anchors the bottom-right */
	.bg-block {
		position: absolute;
		bottom: -20%;
		right: -5%;
		width: clamp(300px, 45vw, 650px);
		aspect-ratio: 1;
		background: var(--green);
		border-radius: 50%;
		opacity: 0.55;
		filter: blur(80px);
		pointer-events: none;
	}

	.orb {
		position: absolute;
		border-radius: 50%;
		pointer-events: none;
		filter: blur(60px);
	}
	.orb-1 {
		width: 200px; height: 200px;
		top: 15%; left: 60%;
		background: var(--green-mid);
		opacity: 0.25;
		animation: drift 12s ease-in-out infinite alternate;
	}
	.orb-2 {
		width: 140px; height: 140px;
		top: 55%; left: 20%;
		background: var(--green-hi);
		opacity: 0.15;
		animation: drift 18s ease-in-out infinite alternate-reverse;
	}
	@keyframes drift {
		from { transform: translate(0, 0); }
		to   { transform: translate(30px, -20px); }
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		gap: clamp(2rem, 4vw, 3.5rem);
		padding-top: 8rem;
	}

	/* Entrance animation */
	.hero-text, .tagline, .scroll-indicator {
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.8s var(--ease), transform 0.8s var(--ease);
	}
	.hero.visible .hero-text     { opacity: 1; transform: none; transition-delay: 0.1s; }
	.hero.visible .tagline       { opacity: 1; transform: none; transition-delay: 0.25s; }
	.hero.visible .scroll-indicator { opacity: 1; transform: none; transition-delay: 0.5s; }

	.availability {
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--green-text);
		margin-bottom: 1.5rem;
		max-width: none;
	}

	h1 {
		margin-bottom: 1.5rem;
		max-width: 14ch;
	}

	.rule {
		width: 48px;
		height: 1px;
		background: var(--border-hi);
		margin-bottom: 1.2rem;
	}

	.role {
		font-size: 0.875rem;
		font-weight: 300;
		letter-spacing: 0.04em;
		color: var(--white-dim);
		max-width: none;
		line-height: 1.4;
	}
	.sep { color: var(--white-faint); }

	.tagline {
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		font-weight: 300;
		color: var(--white-dim);
		max-width: 42ch;
		line-height: 1.7;
	}

	/* Scroll indicator */
	.scroll-indicator {
		position: absolute;
		bottom: 2.5rem;
		right: clamp(1.5rem, 6vw, 5rem);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;
	}
	.scroll-track {
		width: 1px;
		height: 48px;
		background: var(--border);
		position: relative;
		overflow: hidden;
	}
	.scroll-thumb {
		position: absolute;
		top: -100%;
		left: 0;
		width: 100%;
		height: 50%;
		background: var(--green-text);
		animation: scrollDown 2s ease-in-out infinite;
	}
	@keyframes scrollDown {
		0%   { top: -50%; }
		100% { top: 100%; }
	}

	@media (max-width: 768px) {
		.tagline { padding-left: 0; }
	}
</style>
