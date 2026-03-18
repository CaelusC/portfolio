<script lang="ts">
	interface Props {
		title: string;
		year: string;
		description: string;
		tags: string[];
		github?: string;
		gitlab?: string;
		live?: string;
		index: number;
	}

	let { title, year, description, tags, github, gitlab, live, index }: Props = $props();

	let open = $state(false);
</script>

<article class="row" class:open>
	<button
		class="row-header"
		onclick={() => { open = !open; }}
		aria-expanded={open}
	>
		<span class="row-index">0{index + 1}</span>
		<span class="row-title">{title}</span>
		<span class="row-year">{year}</span>
		<span class="row-tags">
			{#each tags.slice(0, 3) as tag}
				<span class="tag">{tag}</span>
			{/each}
		</span>
		<span class="row-toggle" aria-hidden="true">
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
				<line x1="7" y1="2" x2="7" y2="12" stroke="currentColor" stroke-width="1.2" class="v-line"/>
				<line x1="2" y1="7" x2="12" y2="7" stroke="currentColor" stroke-width="1.2"/>
			</svg>
		</span>
	</button>

	<div class="row-body">
		<div class="row-body-inner">
			<p class="row-desc">{description}</p>
			<div class="row-links">
				{#if github}
					<a href={github} target="_blank" rel="noopener" class="link">
						GitHub
					</a>
				{/if}
				{#if gitlab}
					<a href={gitlab} target="_blank" rel="noopener" class="link">
						GitLab
					</a>
				{/if}
				{#if live}
					<a href={live} target="_blank" rel="noopener" class="link">
						Live site
					</a>
				{/if}
			</div>
			<ul class="all-tags">
				{#each tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</div>
	</div>
</article>

<style>
	.row {
		border-top: 1px solid var(--border);
		transition: background 200ms var(--ease);
	}
	.row:last-child { border-bottom: 1px solid var(--border); }
	.row:hover, .row.open { background: rgba(26, 61, 34, 0.2); }

	.row-header {
		width: 100%;
		display: grid;
		grid-template-columns: 3rem 1fr 4rem 1fr 2rem;
		align-items: center;
		gap: 1.5rem;
		padding: 1.6rem 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		color: inherit;
		transition: color 200ms;
	}

	.row-index {
		font-family: var(--serif);
		font-size: 0.75rem;
		font-style: italic;
		color: var(--white-faint);
	}

	.row-title {
		font-family: var(--serif);
		font-size: clamp(1rem, 1.8vw, 1.3rem);
		font-weight: 400;
		color: var(--white);
		letter-spacing: -0.01em;
		transition: color 200ms;
	}
	.row:hover .row-title { color: var(--green-pale); }

	.row-year {
		font-size: 0.75rem;
		font-weight: 300;
		color: var(--white-faint);
		letter-spacing: 0.04em;
	}

	.row-tags {
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		color: var(--white-dim);
		padding: 0.2em 0.6em;
		border: 1px solid var(--border);
		border-radius: 2px;
		transition: border-color 200ms, color 200ms;
	}
	.row:hover .tag {
		border-color: var(--border-hi);
		color: var(--white);
	}

	.row-toggle {
		color: var(--white-faint);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: color 200ms, transform 200ms var(--ease);
	}
	.row:hover .row-toggle { color: var(--green-text); }

	.v-line {
		transition: transform 300ms var(--ease), opacity 300ms;
		transform-origin: center;
	}
	.row.open .v-line {
		transform: scaleY(0);
		opacity: 0;
	}

	/* Expand body */
	.row-body {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 350ms var(--ease);
	}
	.row.open .row-body { grid-template-rows: 1fr; }

	.row-body-inner {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		padding: 0 1.5rem;
	}
	.row.open .row-body-inner { padding-bottom: 1.75rem; }

	.row-desc {
		font-size: 0.9rem;
		line-height: 1.8;
		max-width: 60ch;
		color: var(--white-dim);
	}

	.row-links {
		display: flex;
		gap: 1.5rem;
	}

	.link {
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		color: var(--green-text);
		transition: color 200ms;
	}
	.link:hover { color: var(--green-pale); }

	.all-tags {
		list-style: none;
		display: flex;
		gap: 0.4rem;
		flex-wrap: wrap;
	}
	.all-tags li {
		font-size: 0.7rem;
		color: var(--white-faint);
		padding: 0.2em 0.6em;
		border: 1px solid var(--border);
		border-radius: 2px;
	}

	@media (max-width: 768px) {
		.row-header {
			grid-template-columns: 2.5rem 1fr 2rem;
			gap: 1rem;
		}
		.row-year, .row-tags { display: none; }
	}
</style>
