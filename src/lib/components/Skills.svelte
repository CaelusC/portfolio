<script lang="ts">
	import { onMount } from 'svelte';
	import { skills } from '$lib/data';

	let el: HTMLElement;
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
			{ threshold: 0.15 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});

	const categories = Object.entries(skills);
</script>

<section id="skills" bind:this={el} class:visible>
	<div class="container layout">
		<div class="left">
			<div class="label-col">
				<span class="section-num">03</span>
				<span class="section-name">Skills</span>
			</div>
			<h2>What I bring.</h2>
		</div>

		<div class="right">
			{#each categories as [category, items], i}
				<div class="group" style="transition-delay: {i * 80}ms">
					<h3 class="group-title">{category}</h3>
					<ul>
						{#each items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background: var(--green);
		padding-block: clamp(6rem, 12vw, 10rem);
		position: relative;
		overflow: hidden;
	}

	/* background texture */
	section::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image: radial-gradient(circle at 80% 20%, rgba(45, 122, 61, 0.5) 0%, transparent 50%);
		pointer-events: none;
	}

	.layout {
		display: grid;
		grid-template-columns: 1fr 1.6fr;
		gap: clamp(3rem, 8vw, 8rem);
		align-items: start;
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		position: sticky;
		top: 6rem;
	}

	.label-col {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.section-num {
		font-family: var(--serif);
		font-size: 0.75rem;
		font-style: italic;
		color: var(--green-pale);
		opacity: 0.6;
	}
	.section-name {
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--green-pale);
		opacity: 0.5;
	}

	h2 {
		color: var(--green-pale);
		line-height: 1.05;
	}

	.right {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem 4rem;
	}

	/* Entrance */
	.group {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
	}
	section.visible .group { opacity: 1; transform: none; }

	.group-title {
		font-family: var(--sans);
		font-size: 0.7rem;
		font-weight: 500;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--green-pale);
		opacity: 0.55;
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
	}

	li {
		font-size: 0.9rem;
		font-weight: 300;
		color: var(--green-pale);
		padding-bottom: 0.55rem;
		border-bottom: 1px solid rgba(200, 240, 204, 0.1);
		transition: opacity 200ms;
	}
	li:last-child { border-bottom: none; }
	li:hover { opacity: 0.7; }

	@media (max-width: 900px) {
		.layout { grid-template-columns: 1fr; }
		.left { position: static; }
	}
	@media (max-width: 560px) {
		.right { grid-template-columns: 1fr; }
	}
</style>
