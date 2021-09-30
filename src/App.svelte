<script>
	import Folder from './Folder.svelte';
	let title = "World";

	let subs = 0;
	const addSub = () => subs++;

	let root = [
		{
			type: 'folder',
			name: 'Important work stuff',
			files: [
				{ type: 'file', name: 'quarterly-results.xlsx' }
			]
		},
		{
			type: 'folder',
			name: 'Animal GIFs',
			files: [
				{
					type: 'folder',
					name: 'Dogs',
					files: [
						{ type: 'file', name: 'treadmill.gif' },
						{ type: 'file', name: 'rope-jumping.gif' }
					]
				},
				{
					type: 'folder',
					name: 'Goats',
					files: [
						{ type: 'file', name: 'parkour.gif' },
						{ type: 'file', name: 'rampage.gif' }
					]
				},
				{ type: 'file', name: 'cat-roomba.gif' },
				{ type: 'file', name: 'duck-shuffle.gif' },
				{ type: 'file', name: 'monkey-on-a-pig.gif' }
			]
		},
		{ type: 'file', name: 'TODO.md' }
	];
</script>

<main>
	<div class="container">
		<h1>Hello {title}!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		<h2>Feeds ({subs})</h2><div class="button" on:click={addSub}>Subscription+</div>
		<div class="left">
			<Folder name="Tech" files={root} expanded/>
			<Folder name="Science" files={root} expanded/>
			<Folder name="News" files={root} expanded/>
		</div>
	</div>

</main>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container {
		padding: 8px;
	}

	.left {


	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> 