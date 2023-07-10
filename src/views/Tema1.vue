<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Termodinámica

    .row.mb-5(data-aos="fade-down-left")
      .col-12.col-md-9.col-lg-10
        p En la mayoría de las actividades que se realizan en la vida diaria se encuentra presente la termodinámica, por ejemplo, el cuerpo necesita un suministro constante de energía para mantenerse vivo. Esta energía se obtiene de las calorías que se consumen en los alimentos y a partir de la transformación de energía en las células se emite calor corporal del ambiente. 
        p Entre los científicos más destacados en esta rama de la física se encuentran: Sadi Carnot, William Rankine, Rudolph Clausius, Lord Kelvin (antes William Thomson), James Prescott Joule. 
      .col-12.col-md-3.col-lg-2 
        figure
          img(src='@/assets/curso/temas/tema1/tema1-01.svg', alt='')





      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
