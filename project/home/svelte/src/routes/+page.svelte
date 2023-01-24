<script lang="ts">
    import { Instagram, Twitter, Github } from "../lib/components";
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    let visible = false;
    onMount(async () => {
		setTimeout(() => {visible = true;}, 500)
	});
</script>

<svelte:head>
    <title>Homepage | jaobernardi.com</title>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@jaobernard" />
    <meta name="twitter:creator" content="@jaobernard" />
    <meta property="og:url" content="https://jaobernardi.com" />
    <meta property="og:title" content="Home" />
    <meta property="og:description" content="Oi, eu sou o jão :)" />
    <meta property="og:image" content="https://static.jaobernardi.com/img/favicon/fullsize.png" />

</svelte:head>

{#if visible}  
    <div class="display-container" transition:fade>
        <h1>Oi, eu sou o jão :)</h1>
        <pre>(@jaobernardi)</pre>
        <p>Bem-vindo à minha página na <span class="emphasis-box times">internet</span></p>
        <sub>(。・∀・)ノ</sub>
        <div class="flex">
            <Instagram handle="jaobernardi"/>
            <Twitter handle="jaobernard"/>
            <Github handle="jaobernardi"/>
        </div>
    </div>
{/if}