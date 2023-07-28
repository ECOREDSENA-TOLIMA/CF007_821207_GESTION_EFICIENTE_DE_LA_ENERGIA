<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 Energía renovable

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right") 
      .col-md-8.mb-4.mb-md-0
        p Con el fin de reducir la dependencia de los combustibles fósiles y mitigar los impactos del cambio climático durante la última década se han evidenciado grandes cambios en el contexto energético, desde la mejora en eficiencias de conversión de energía hasta la adopción de tecnologías alternativas innovadoras para satisfacer las nuevas demandas de energía, siendo el uso de las energías renovables uno de los principales impulsores de este cambio. Esta sección contiene el desarrollo del tema 3 – energía renovable, cuyo objetivo es presentar generalidades de las energías renovables, ventajas y desventajas y, las principales tecnologías que existen actualmente a nivel mundial.
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left") 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-02.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Para empezar, se va a definir qué es la energía renovable, de acuerdo con el Grupo Intergubernamental de Expertos sobre el Cambio Climático (IPCC) “la energía renovable es cualquier forma de energía de origen solar, geofísico o biológico que se renueva mediante procesos naturales a un ritmo igual o superior a su tasa de utilización. Se obtiene de los flujos continuos o repetitivos que se producen en el entorno natural” (IPCC, 2014, p. 164). Así pues, las energías renovables provienen de la utilización de recursos naturales como la luz solar, el agua o el viento, y son casi inagotables, por la cantidad de energía que contienen y su capacidad de regenerarse de forma natural, en contraste con las fuentes no renovables, cuyas reservas se agotan en el tiempo. Cabe destacar que, por no depender de combustibles fósiles, las fuentes de energía renovable generan menos emisiones de gases efecto invernadero, por tanto, contribuyen con la reducción del calentamiento global.

    p.mb-5(data-aos="fade-right") Se invita a complementar la información consultando el siguiente video sobre cada uno de los tipos de energía renovable.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Energías renovables en beneficio del planeta
                  p.text-small Los principales tipos de energía renovable son energía solar, eólica, hídrica, geotérmica, mareomotriz y del oleaje, y la bioenergía (biomasa). 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=dLNCev0RMcQ" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    Separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Energía solar
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-03.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida a partir del aprovechamiento de la radiación electromagnética procedente del sol. El aprovechamiento puede ser de dos formas: como fuente de calor (energía solar térmica) y como fuente de electricidad (energía solar fotovoltaica).
        p Es importante mencionar que según como sea la manera de recolectar, convertir y transferir la energía del sol, las tecnologías son de dos tipos: pasivas y activas. Las pasivas distribuyen y almacenan el calor de manera natural y sin transformaciones, a partir de estrategias que favorezcan el aprovechamiento de la luz solar, por ejemplo, en los edificios se adapta la orientación de las ventanas de manera que se pueda aprovechar la luz natural. Las activas aprovechan la energía mediante dispositivos fotovoltaicos y colectores solares.

    p.mb-5(data-aos="fade-right") Descubra más acerca de la energía solar térmica y solar fotovoltaica, revisando la siguiente información complementaria.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía solar térmica
                  p.text-small Descripción general de la energía solar, usos, forma de instalaciones y aprovechamiento en la vida cotidiana.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_A_Energía_solar_térmica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-12.col-lg-6.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía fotovoltaica
                  p.text-small Descripción general de la energía fotovoltaica, usos, forma de instalaciones y aprovechamiento en las industrias.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_B_Energía_solar_fotovoltaica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Energía eólica
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4
        figure
          img(src='@/assets/curso/temas/tema3/tema3-04.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida al aprovechar la velocidad de las corrientes de aire que se producen debido al calentamiento desigual de la superficie de la Tierra. Ahora bien, ¿cómo se aprovecha el viento a nivel local para generar energía? Todo comienza a partir del Sol, durante el día el área continental se calienta más rápidamente que el mar y las zonas bajas.
        p Cuando el aire en tierra firme se calienta se vuelve menos denso y se eleva, generando el flujo de aire desde el mar hacia el litoral. Este movimiento del aire es lo que se conoce como viento; durante la noche el aire frío tiende a bajar y el flujo es en sentido contrario.

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información e interaccione con un mapa de viento.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía eólica
                  p.text-small Descubra las principales características de esta energía, su aprovechamiento y las principales tecnologías y aplicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_C_Energía_eólica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-12.col-lg-6.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/link.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Mapa de viento
                  p.text-small Puede ver un mapa de viento global interactivo y en tiempo real.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.windy.com/?8.016,-74.180,7,m:dTsad2I" target="_blank")
                    span Ir al sitio web
                    i.fas.fa-link

    Separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.3 Energía hidroeléctrica
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-05.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida a partir del movimiento del agua y su caída desde cierta altura. La energía cinética de las corrientes y la energía potencial gravitacional de los saltos de agua se transforman en energía cinética mediante el accionamiento de una máquina rotatoria que hace funcionar un generador, convirtiendo la energía del movimiento en energía eléctrica.
        p El aprovechamiento de la energía hidráulica es posible utilizando el movimiento de los recursos hídricos de forma natural (ríos, cascadas, etc.) o mediante la construcción de embalses (presas) de almacenamiento. 

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía hidroeléctrica
                  p.text-small Descubra más sobre la tecnología utilizada para el aprovechamiento de esta energía y sus aplicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_D_Energía_hidroeléctrica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.4 Energía geotérmica
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-06.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida al aprovechar la energía térmica contenida en el interior de la Tierra. La energía térmica se origina debido a la diferencia de temperaturas entre la superficie terrestre y el núcleo interno (cercana a 7000 °C), provocando un flujo continuo de calor desde el interior de la Tierra hacia el exterior.
        p La energía térmica se encuentra disponible tanto en las rocas como en los depósitos de agua caliente o vapor localizados a diferentes temperaturas y profundidades debajo de la corteza terrestre. Puede observarse esta energía en la erupción de los volcanes, en las aguas termales, en géiseres, entre otros.

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información y el video que se propone.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11.mb-4(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía geotérmica
                  p.text-small Descubra más sobre la tecnología utilizada para el aprovechamiento de esta energía y sus aplicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_E_Energía_geotérmica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-md-11.col-12.mb-4(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Energía geotérmica, ¿qué es y cómo funciona?
                  p.text-small Se explica todo lo que debe saber sobre la energía geotérmica: qué es, cómo se obtiene, sus ventajas y desventajas, y ejemplos de qué países la utilizan.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=SFf6k4OTslc" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    Separador
    #t_3_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.5 Energía oceánica
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-07.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida del océano; el mar provee formas de energía que se pueden explotar de las siguientes fuentes:
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Fuentes de producción de energía marina</i>
        figure 
          img(src='@/assets/curso/temas/tema3/tema3-08.svg', alt='')

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía oceánica
                  p.text-small Detalle el aprovechamiento de las diferentes energías provenientes del océano y sus aplicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_F_Energía_oceánica.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador
    #t_3_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.6 Energía de la biomasa
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-09.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p Es la energía obtenida a partir del aprovechamiento de la biomasa. La biomasa es la materia de origen orgánico, vegetal o animal, que se puede utilizar con propósitos energéticos.
        p El aprovechamiento de la biomasa es de dos tipos: tradicional y moderno.

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Energía de la biomasa
                  p.text-small Se revisan los tipos de biomasa aprovechables, las tecnologías y sus aplicaciones.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_G_Energía_de_la_Biomasa.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_3_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.7 Hidrógeno verde
      
    .row.justify-content-center.align-items-center.mb-5.tarjeta--azul.p-2(data-aos="fade-left") 
      .col-md-4 
        figure
          img(src='@/assets/curso/temas/tema3/tema3-10.svg', alt='')
      .col-md-8.mb-4.mb-md-0
        p El hidrógeno es el elemento químico más ligero y predominante en la Tierra; sin embargo, este no se encuentra disponible en un yacimiento natural; se encuentra combinado con otros elementos formando moléculas complejas, por ejemplo, la del agua y la de los hidrocarburos.
        p Para utilizar el hidrógeno, en primer lugar, se requiere producirlo y una vez producido, se puede aprovechar para generar energía y también para almacenarla. 

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Hidrógeno verde
                  p.text-small Aprenda más sobre la utilización de este elemento para la obtención de energía y sus usos en diferentes sectores.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_3_H_Hidrógeno_verde.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_3_8.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.8 Contexto mundial y colombiano - capacidad instalada de energías renovables
      
    p.mb-5(data-aos="fade-right") Según el IRENA #[i (International Renewable Energy Technologies)] la distribución mundial en porcentaje de la capacidad instalada de energías renovables en 2020 son las que se muestran en la siguiente figura:

    p.mb-5(data-aos="fade-right") En la siguiente figura se muestran las cifras de producción del sector de acuerdo con los datos estadísticos publicados por el Sistema de Información Minero Colombiano (2021).

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Distribución mundial de energías renovables 2020</i>
      .col-md-10.col-12(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/tema3-11.svg', alt='')
          figcaption Nota. Tomado de IRENA (2020). https://www.irena.org/Statistics/View-Data-by-Topic/Capacity-and-Generation/Technologies

    p.mb-5(data-aos="fade-right") Y según la misma fuente, la distribución en Colombia en 2020 corresponde a la siguiente figura:

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Distribución Colombia de energías renovables 2020</i>
      .col-md-10.col-12(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema3/tema3-12.svg', alt='')
          figcaption Nota. Tomado de IRENA (2020). https://www.irena.org/Statistics/View-Data-by-Topic/Capacity-and-Generation/Technologies






</template>

<script>
export default {
  name: 'Tema3',
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
