<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.cajon.tarjeta--azul.p-4(data-aos="fade-down-left")
      .col-12.col-md-9
        p Apreciado aprendiz bienvenido a esta experiencia de aprendizaje en donde se presentará una serie de conceptos fundamentales del sector energético. A lo largo de este documento comenzará a familiarizarse con las principales fuentes de generación de energía, cómo se clasifican, según su procedencia y disponibilidad, y cuáles son sus impactos ambientales. Además, aprenderá las generalidades de la cadena de producción de electricidad y la importancia del mercado eléctrico en Colombia. En el siguiente vídeo podrá consultar los principales temas desarrollados en este componente:
      .col-12.col-md-3.col-lg-2
        figure
          img(src='@/assets/curso/intro.svg', alt='')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
