<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data';

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
</script>

<section id="about" bind:this={el} class:visible>
	<div class="green-panel" aria-hidden="true"></div>

	<div class="container layout">
		<div class="label-col">
			<span class="section-num">01</span>
			<span class="section-name">About</span>
		</div>

		<div class="content-col">
			<h2>Things<br />to know</h2>

			<div class="body-text">
				<p>
					I am an ICT student at {meta.school}, where i learn how to develop 
					functional applications. From websites and webapps to embeded programs 
					and protocol based communication.
				</p>
				<p>
					Outside of coursework, I co-develop a game in Godot, a passion project 
					through which I'm learning C++, large data management, and long term project planning.
					I also run a servers with custom modpacks and configuration, which 
					has been a surprisingly good teacher of networking, server administration, and debugging
					under pressure.
				</p>
			</div>

			<div class="meta-row">
				<div class="meta-item">
					<span class="meta-label">Location</span>
					<span class="meta-value">{meta.location}</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Available</span>
					<span class="meta-value">{meta.available}</span>
				</div>
				<div class="meta-item">
					<span class="meta-label">Focus</span>
					<span class="meta-value">Full-Stack, Backend, Devops</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		padding-block: clamp(6rem, 12vw, 10rem);
		overflow: hidden;
	}

	/* Green panel bleeds in from the left */
	.green-panel {
		position: absolute;
		top: 0; bottom: 0; left: 0;
		width: 28%;
		background: var(--green);
		opacity: 0.18;
		pointer-events: none;
	}

	.layout {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}

	/* Entrance */
	.label-col, .content-col {
		opacity: 0;
		transform: translateY(20px);
		transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
	}
	section.visible .label-col   { opacity: 1; transform: none; transition-delay: 0.05s; }
	section.visible .content-col { opacity: 1; transform: none; transition-delay: 0.18s; }

	.label-col {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-top: 0.6rem;
		position: sticky;
		top: 6rem;
	}

	.section-num {
		font-family: var(--serif);
		font-size: 0.75rem;
		color: var(--green-text);
		font-style: italic;
	}
	.section-name {
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--white-faint);
	}

	.content-col {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.body-text {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		max-width: 54ch;
	}

	.body-text p {
		font-size: 0.95rem;
		line-height: 1.85;
		max-width: none;
	}

	.meta-row {
		display: flex;
		gap: 3rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border);
		flex-wrap: wrap;
	}

	.meta-item {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.meta-label {
		font-size: 0.68rem;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--white-faint);
	}
	.meta-value {
		font-size: 0.875rem;
		font-weight: 300;
		color: var(--white);
	}

	@media (max-width: 640px) {
		.layout { grid-template-columns: 1fr; }
		.label-col { flex-direction: row; position: static; }
		.green-panel { width: 100%; height: 30%; top: 0; bottom: auto; opacity: 0.1; }
	}
</style>
