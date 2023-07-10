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

    .row.mb-5.align-self-stretch.justify-content-center(data-aos="fade-down-right") 
      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-02.png', alt='')
          .text-small.text-center #[strong Sadi Carnot]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-03.png', alt='')
          .text-small.text-center #[strong William Rankine]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-04.png', alt='')
          .text-small.text-center #[strong Rudolph Clausius]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-05.png', alt='')
          .text-small.text-center #[strong Lord Kelvin]
          .text-small.text-center (antes William Thomson)
          
      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema1/tema1-06.png', alt='')
          .text-small.text-center #[strong James Prescott Joule]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-07.png')})`}"
      )
      .bloque-texto-g__texto.p-4 
        p.mb-0 Es importante recordar que la termodinámica, por tratarse de una ciencia que estudia fenómenos a nivel macroscópico, se basa en experimentos y los resultados que obtiene son independientes de la estructura atómica y molecular de la materia. 
        br
        br
        | Esto significa que explica el comportamiento de las propiedades de un sistema de manera global, como un conjunto de moléculas y no como moléculas individuales. Este enfoque se enmarca en lo que se conoce como termodinámica clásica.

    p.mb-5(data-aos="fade-right") Se invita a revisar más información sobre la termodinámica a continuación:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row(titulo="Uso")
        .col-md-7.mb-4.mb-md-0
          p En el hogar, aparatos como el refrigerador, la plancha, el aire acondicionado, la olla a presión, entre otros, han sido diseñados teniendo en cuenta los principios termodinámicos.  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-08.png', alt='')
      .row(titulo="Aplicación")
        .col-md-7.mb-4.mb-md-0
          p En aplicaciones de mayor escala la termodinámica desempeña un papel importante en el análisis del comportamiento de motores, plantas de generación de energía eléctrica, sistemas de refrigeración, así como en procesos industriales y diseños arquitectónicos.  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-09.png', alt='')
      .row(titulo="Definición")
        .col-md-7.mb-4.mb-md-0
          p Se define como la ciencia que estudia la energía y sus transformaciones a nivel macroscópico. 
          p La palabra termodinámica está compuesta por los términos “termo”, proveniente del griego therme que significa calor y dinámica, del griego dynamis que significa fuerza o potencia. Es decir, escribe los primeros esfuerzos por convertir calor en potencia.  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
      .row(titulo="Alcance")
        .col-md-7.mb-4.mb-md-0
          p En la actualidad se considera como un área con un mayor alcance, que estudia la transferencia de calor (entre un sistema y el medio en el que se encuentra), la conversión de la energía y su aprovechamiento para realizar un trabajo (Çengel & Boles, 2015).  
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')
      .row(titulo="Origen")
        .col-md-7.mb-4.mb-md-0
          p Se origina a mediados del Siglo XVIII, durante la Revolución Industrial, surge de la necesidad de comprender la transformación del calor en movimiento en las máquinas de vapor o máquinas térmicas construidas para mejorar su rendimiento. 
          p Se fundamenta en cuatro premisas, que se conocen como Principios o Leyes de la termodinámica, que definen el desarrollo de las transformaciones de energía. 
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')

    p.mb-5(data-aos="fade-right") Como se indicó, las cuatro leyes que gobiernan estos fenómenos son:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.py-4
            figure.py-4
              img(src="@/assets/curso/temas/tema1/tema1-13.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Ley o Principio Cero
            p.mb-0 Se trata de la temperatura y su comportamiento como una propiedad.

      .col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.py-4
            figure.py-4
              img(src="@/assets/curso/temas/tema1/tema1-14.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Primera ley
            p.mb-0 Aborda la energía como una magnitud que se transforma y se conserva.

      .col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.py-4
            figure.py-4
              img(src="@/assets/curso/temas/tema1/tema1-15.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Segunda ley
            p.mb-0 Introduce conceptos relacionados con calidad de la energía y provee información para describir la dirección de los procesos de transferencia de energía.

      .col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.py-4
            figure.py-4
              img(src="@/assets/curso/temas/tema1/tema1-16.svg", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Tercera ley
            p.mb-0 Estrechamente conectada a la segunda ley, explica el comportamiento de algunas propiedades en el cero absoluto de temperatura.

    p.mb-5(data-aos="fade-right") Complementando la información sobre la termodinámica se invita a explorar el contexto histórico en el que esta se desarrolló:


    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Breve historia de la termodinámica
                  p.text-small Amplía el conocimiento sobre cómo y cuándo surge la termodinámica, y el impacto que esta tiene en las sociedades.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=wiFkJebegwk" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p.mb-5(data-aos="fade-right") Para comprender mejor estos fenómenos cotidianos y descubrir aplicaciones que involucran las transformaciones de energía, se invita a explorar los temas que se desarrollan a continuación y sus respectivos anexos. 

    Separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1  Dimensiones y unidades

    .row.mb-5.align-self-stretch.justify-content-center.align-items-center
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-left")
        p(data-aos="fade-right") Tienen un papel importante en el estudio de la termodinámica. Por tratarse de una ciencia que estudia los fenómenos a nivel macroscópico, las cantidades que se utilizan en esta rama de la física se pueden conocer a partir de una medición directa o indirecta. 
        .cajon.color-acento-botones.p-4.mb-2
          p El sistema de unidades que comúnmente se utiliza en termodinámica es el Sistema Internacional (SI). Actualmente en países como Estados Unidos de América aún no se adopta el sistema métrico, por tanto, se mencionan en este documento las unidades del sistema inglés para conocer la relación entre algunas magnitudes. Se invita a examinar las unidades básicas y derivadas del SI más frecuentes en termodinámica. 
        .row.justify-content-center.align-items-center.mb-5
          .col-12.mb-4.mb-md-0(data-aos="fade-left")
            .tarjeta.color-primario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/temas/descargar.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h4 Dimensiones y unidades
                      p.text-small Se invita al aprendiz a revisar algunas unidades del sistema inglés, prefijos y relaciones de conversión.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_1_Dimensiones_y_unidades.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
      .col-12.col-md-5.mb-5.mb-lg-0.d-none.d-sm-none.d-md-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')  

    Separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Conceptos básicos

    p.mb-5(data-aos="fade-right") Los términos básicos que permitirán tener una mejor comprensión del estudio de la termodinámica y de los principios que la gobiernan son:  

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="width:100%")
            .p-4
              h5.text-center Sistema
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris(style="width:100%")
            .p-4
              h5.text-center Propiedades termodinámicas
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="width:100%")
            .p-4
              h5.text-center Estado
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris(style="width:100%")
            .p-4
              h5.text-center Procesos y ciclos

    p.mb-5(data-aos="fade-right") Se invita a examinar las unidades básicas y derivadas del SI más frecuentes en termodinámica, y algunas unidades del sistema inglés, prefijos y relaciones de conversión que se encuentran en los numerales.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Principios básicos de la termodinámica
                  p.text-small Se integra de qué trata cada principio que a la vez gobierna la termodinámica.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_2_Conceptos_básicos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


      
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
