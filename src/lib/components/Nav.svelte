<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data';

	let scrolled = $state(false);

	const links = [
		{ href: '#about',    label: 'About'    },
		{ href: '#projects', label: 'Projects' },
		{ href: '#skills',   label: 'Skills'   },
		{ href: '#contact',  label: 'Contact'  },
	];

	onMount(() => {
		const onScroll = () => { scrolled = window.scrollY > 60; };
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav class:scrolled>
	<div class="container nav-inner">
		<a href="/" class="wordmark">{meta.name}</a>

		<ul>
			{#each links as { href, label }}
				<li><a {href}>{label}</a></li>
			{/each}
		</ul>

		<a href="/resume.pdf" class="resume" target="_blank" rel="noopener">
			Resume
		</a>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		inset: 0 0 auto;
		z-index: 100;
		padding-block: 1.4rem;
		transition: background 300ms var(--ease), border-color 300ms var(--ease);
		border-bottom: 1px solid transparent;
	}

	nav.scrolled {
		background: rgba(8, 9, 10, 0.8);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-color: var(--border);
	}

	.nav-inner {
		display: flex;
		align-items: center;
		gap: 3rem;
	}

	.wordmark {
		font-family: var(--serif);
		font-size: 1rem;
		font-weight: 400;
		color: var(--white);
		letter-spacing: -0.01em;
		white-space: nowrap;
		transition: color 200ms;
	}
	.wordmark:hover { color: var(--green-text); }

	ul {
		display: flex;
		list-style: none;
		gap: 0.25rem;
		margin-inline: auto;
	}

	ul a {
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--white-dim);
		padding: 0.3rem 0.7rem;
		border-radius: 2px;
		transition: color 200ms;
	}
	ul a:hover { color: var(--white); }

	.resume {
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		color: var(--green-text);
		transition: color 200ms;
		white-space: nowrap;
	}
	.resume:hover { color: var(--green-pale); }

	@media (max-width: 600px) {
		ul { display: none; }
	}
</style>
