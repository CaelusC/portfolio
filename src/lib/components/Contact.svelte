<script lang="ts">
	import { onMount } from 'svelte';
	import { meta } from '$lib/data';

	let el: HTMLElement;
	let visible = $state(false);
	let name    = $state('');
	let email   = $state('');
	let message = $state('');
	let status  = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => { if (entry.isIntersecting) { visible = true; observer.disconnect(); } },
			{ threshold: 0.1 }
		);
		observer.observe(el);
		return () => observer.disconnect();
	});

	async function submit() {
		if (!name || !email || !message) return;
		status = 'sending';

		try {
      		const res = await fetch('https://formspree.io/f/mqeywewa', {
        		method: 'POST',
        		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        		body: JSON.stringify({ name, email, message }),
      		});

      	if (res.ok) {
        	status = 'sent';
        	name = ''; email = ''; message = '';
      	} else {
        	status = 'error';
      	}
    	} catch {
      		status = 'error';
    	}	
	}
</script>

<section id="contact" bind:this={el} class:visible>
	<div class="container layout">
		<div class="left">
			<div class="label-col">
				<span class="section-num">04</span>
				<span class="section-name">Contact</span>
			</div>

			<h2>Get<br/><em>in touch</em></h2>

			<p>
				I'm open to Internships Starting {meta.available}.
				Reach out about a role, a project, I am always open to build something new.
			</p>

			<div class="direct-links">
				<a href="mailto:{meta.email}" class="direct-link">{meta.email}</a>
				<a href={meta.linkedin} target="_blank" rel="noopener" class="direct-link">LinkedIn</a>
			</div>
		</div>

		<div class="right">
			{#if status === 'sent'}
				<div class="sent-state">
					<span class="sent-mark">✓</span>
					<p>Sent. I'll get back to you as soon as possible!</p>
				</div>
			{:else}
				<form onsubmit={(e) => { e.preventDefault(); submit(); }}>
					<div class="field">
						<label for="cf-name">Name</label>
						<input id="cf-name" type="text" bind:value={name} placeholder="Your Name" required />
					</div>
					<div class="field">
						<label for="cf-email">Email</label>
						<input id="cf-email" type="email" bind:value={email} placeholder="youremail@gmail.com" required />
					</div>
					<div class="field">
						<label for="cf-message">Message</label>
						<textarea id="cf-message" bind:value={message} placeholder="What would you like to say?" rows="5" required></textarea>
					</div>
					<button type="submit" disabled={status === 'sending'}>
						{status === 'sending' ? 'Sending...' : 'Send message'}
					</button>
				</form>
			{/if}
		</div>
	</div>

	<div class="container footer">
		<span>{meta.name} — {new Date().getFullYear()}</span>
	</div>
</section>

<style>
	section {
		padding-block: clamp(6rem, 12vw, 10rem);
		border-top: 1px solid var(--border);
	}

	.layout {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(3rem, 8vw, 8rem);
		align-items: start;
		margin-bottom: clamp(4rem, 8vw, 7rem);
	}

	.left {
		display: flex;
		flex-direction: column;
		gap: 2rem;
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
		color: var(--green-text);
	}
	.section-name {
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--white-faint);
	}

	.left p {
		font-size: 0.95rem;
		line-height: 1.8;
		max-width: none;
	}

	.direct-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.direct-link {
		font-size: 0.85rem;
		font-weight: 300;
		color: var(--white-dim);
		transition: color 200ms;
		width: fit-content;
	}
	.direct-link:hover { color: var(--green-text); }

	/* Entrance */
	.left, .right {
		opacity: 0;
		transform: translateY(16px);
		transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
	}
	section.visible .left  { opacity: 1; transform: none; transition-delay: 0.05s; }
	section.visible .right { opacity: 1; transform: none; transition-delay: 0.2s; }

	/* Form */
	h2 em {
		font-style: italic;
		color: var(--green-text);
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	label {
		font-size: 0.7rem;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--white-faint);
	}

	input, textarea {
		background: var(--black-1);
		border: 1px solid var(--border);
		border-radius: 2px;
		color: var(--white);
		font-family: var(--sans);
		font-size: 0.9rem;
		font-weight: 300;
		padding: 0.75rem 1rem;
		width: 100%;
		resize: vertical;
		outline: none;
		transition: border-color 200ms;
	}
	input::placeholder, textarea::placeholder { color: var(--white-faint); }
	input:focus, textarea:focus { border-color: var(--border-hi); }

	button {
		font-family: var(--sans);
		font-size: 0.85rem;
		font-weight: 400;
		letter-spacing: 0.04em;
		background: var(--green-hi);
		color: var(--green-pale);
		border: none;
		border-radius: 2px;
		padding: 0.85rem 2rem;
		cursor: pointer;
		align-self: flex-start;
		transition: background 200ms, color 200ms;
	}
	button:hover:not(:disabled) {
		background: var(--green-text);
		color: var(--black);
	}
	button:disabled { opacity: 0.5; cursor: not-allowed; }

	/* Sent */
	.sent-state {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 2rem;
		border: 1px solid var(--border-hi);
		border-radius: 2px;
	}
	.sent-mark {
		color: var(--green-text);
		font-size: 1.2rem;
		line-height: 1;
	}
	.sent-state p {
		font-size: 0.9rem;
		max-width: none;
	}

	/* Footer */
	.footer {
		display: flex;
		justify-content: space-between;
		padding-top: 2rem;
		border-top: 1px solid var(--border);
		font-size: 0.75rem;
		font-weight: 300;
		color: var(--white-faint);
		letter-spacing: 0.04em;
	}

	@media (max-width: 768px) {
		.layout { grid-template-columns: 1fr; }
	}
</style>
