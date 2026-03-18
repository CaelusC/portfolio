<script lang="ts">
	import { onMount } from 'svelte';
	import { projects } from '$lib/data';
	import ProjectRow from './ProjectRow.svelte';

	let el: HTMLElement;
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
			{ threshold: 0.1 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});
</script>

<section id="projects" bind:this={el} class:visible>
	<div class="container header-row">
		<div class="label-col">
			<span class="section-num">02</span>
			<span class="section-name">Projects</span>
		</div>

		<h2>My Most Recent Projects</h2>
	</div>

	<div class="list" class:visible>
		{#each projects as project, i}
			<ProjectRow
				title={project.title}
				year={project.year}
				description={project.description}
				tags={project.tags}
				github={project.github}
				gitlab={project.gitlab}
				live={project.live}
				index={i}
			/>
		{/each}
	</div>
</section>

<style>
	section {
		padding-block: clamp(6rem, 12vw, 10rem);
	}

	.header-row {
		display: grid;
		grid-template-columns: 160px 1fr;
		gap: clamp(2rem, 5vw, 5rem);
		align-items: end;
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}

	.label-col {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 0.5rem;
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

	.list {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
	}
	section.visible .list {
		opacity: 1;
		transform: none;
		transition-delay: 0.2s;
	}

	@media (max-width: 640px) {
		.header-row { grid-template-columns: 1fr; }
	}
</style>
