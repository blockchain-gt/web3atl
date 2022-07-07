<script lang="ts">
	import Nav from '$components/layout/Nav.svelte'
	import Footer from '$components/layout/Footer.svelte'

	import '$styles/global.scss'

	// Fontsource (self-hosted) fonts
	import '@fontsource/open-sans/latin-400.css'
</script>

<!-- Google Fonts -->
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter&family=Mukta&display=swap"
		rel="stylesheet" />
</svelte:head>

<Nav />
<main>
	<slot />
</main>
<Footer />
