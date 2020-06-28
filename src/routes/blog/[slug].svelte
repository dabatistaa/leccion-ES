<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div>
    <h3>{post.slug}</h3> <!--Leccion Numero -->
    <p><em>{post.fecha}</em></p> <!--Leccion Fecha-->
    <h2>{post.title}</h2> <!--Leccion Titulo-->
    <h4>{post.subtitulo}</h4> <!--Leccion Subtitulo-->
	  {#each post.introduccion as nota}
		    <p>{nota}</p>
	  {/each}
</div>

<div class="Pregunta"> <!--Empieza Pregunta -->
    
    {#each post.preguntas as pregunta}
    {#if pregunta.subtitulo != null}
	    <h3>{pregunta.subtitulo}</h3>
    {/if}
    <h4>{pregunta.pregunta}</h4> <!--Pregunta --> 

    {#each pregunta.textos as texto}
		    <p>{texto.cita}</p>
		    <p>{texto.contenido}</p>
	  {/each}

    <h3><strong>Nota:</strong></h3>
    {#each pregunta.notas as nota}
		    <p>{nota}</p>
	  {/each}

    {/each}
   <!-- Fin Pregunta -->
</div>