<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Energía no renovable

    p.mb-5(data-aos="fade-right") Cuando se habla de fuentes de energía no renovables se refiere a los recursos energéticos que se encuentran en la naturaleza de manera limitada y no se pueden renovar, es decir, que en algún momento dejarán de estar disponibles para su extracción y uso. Los principales energéticos no renovables son:

</template>

<script>
export default {
  name: 'Tema2',
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
