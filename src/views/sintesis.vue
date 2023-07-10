<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La generación de la energía, es un proceso que requiere de varios y variados actores para la puesta en marcha, principalmente porque aquellos recursos que no son renovables se están acabando, y su huella ha dejado afectación en el planeta. El Climate Clock (Reloj Climático) es un instrumento hecho en colaboración entre artistas, científicos y activistas para concientizar sobre el tiempo que le queda al planeta tierra de vida, se actualiza todos los años, para reflejar la última tendencia mundial de emisiones de dióxido de carbono y la tasa del calentamiento climático. A 22 de marzo de 2021, el reloj muestra que el umbral de 1,5 °C se traspasará el día 11 de noviembre de 2032, y que el calentamiento global actual es de 1,16 °C.
    p Estamos a tiempo de concientizarnos del uso racional de la energía, y los diferentes proyectos que se han formulado para este propósito.
    p.mb-5 En el siguiente mapa, podrá conocer la ruta conceptual que se ha presentado en este componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
