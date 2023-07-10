<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Energía no renovable

    p.mb-5(data-aos="fade-right") Cuando se habla de fuentes de energía no renovables se refiere a los recursos energéticos que se encuentran en la naturaleza de manera limitada y no se pueden renovar, es decir, que en algún momento dejarán de estar disponibles para su extracción y uso. Los principales energéticos no renovables son:

    .row.mb-5.align-self-stretch.justify-content-center(data-aos="fade-down-right") 
      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-02.svg', alt='')
          .text-small.text-center #[strong Petróleo y sus derivados]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-03.svg', alt='')
          .text-small.text-center #[strong Gas natural]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-04.svg', alt='')
          .text-small.text-center #[strong Carbón]

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-05.svg', alt='')
          .text-small.text-center #[strong Energía nuclear]

    .tarjeta--container.row.mb-5(data-aos="fade-down-left") 
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-06.png', alt='')
        p El petróleo, el gas natural y el carbón se denominan combustibles fósiles debido a que se encuentran en la naturaleza gracias a los procesos de descomposición de la materia orgánica ocurridos hace millones de años. Actualmente, se pretende reemplazar paulatinamente este tipo de energéticos porque su uso genera gases de efecto invernadero, que aumentan la temperatura global del planeta y producen gases contaminantes que afectan la salud de los ecosistemas y de la sociedad en general.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-07.png', alt='')
        p La energía nuclear a nivel mundial es utilizada para la generación de electricidad en grandes centrales, ya que no emite gases de efecto invernadero; sin embargo, los residuos que genera son radioactivos y altamente contaminantes. Además, han ocurrido accidentes en donde como consecuencia grandes extensiones de tierra han tenido que ser evacuadas y no pueden volver a ser usadas. En Colombia no existen centrales de generación nuclear, pero, en las grandes potencias y en países como Brasil y Argentina existe este tipo de tecnología.

    Separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 La industria del petróleo

    .row.mb-5(data-aos="fade-down-right") 
      .col-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-08.png', alt='')

    p.mb-5(data-aos="fade-down-right") El petróleo pertenece a la familia de los Hidrocarburos y es denominado “oro negro” debido a su color y la importancia en todos los sectores de nuestra sociedad.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Aplicaciones]
    p.mb-3(data-aos="fade-down-right") El petróleo ha sido uno de los protagonistas fundamentales desde el siglo XIX en el desarrollo de los procesos industriales, el transporte y la generación de electricidad; además, sus derivados tienen gran cantidad de aplicaciones y sirven de insumo para muchos de los productos que usamos a diario. 
    p.mb-5(data-aos="fade-down-right") Aplicaciones industriales. En la siguiente tabla se muestran algunas de las aplicaciones industriales de los derivados del petróleo
    
    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Aplicaciones Industriales</i>
        .tabla-a.color-acento-botones.mb-4
          table
            thead
              tr
                th  
                th Vehículos y transporte 
                th Calefacción y motores 
                th Generación de electricidad 
                th Infraestructura 
                th Agricultura 
            tbody
              tr
                th.text-center Gasolina
                td.text-center X
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.text-center Diesel
                td.text-center X
                td.text-center 
                td.text-center X
                td.text-center 
                td.text-center  
              tr
                th.text-center Gas Licuado de Petróleo
                td.text-center 
                td.text-center X
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.text-center Asfaltos
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center X
                td.text-center 
              tr
                th.text-center Lubricantes
                td.text-center 
                td.text-center X
                td.text-center 
                td.text-center 
                td.text-center 
              tr
                th.text-center Fertilizantes
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center X
                td.text-center
              tr
                th.text-center Plaguicidas
                td.text-center 
                td.text-center 
                td.text-center 
                td.text-center X
                td.text-center

    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
    //-     .tarjeta.color-primario.p-3
    //-       .row.justify-content-around.align-items-center
    //-         .col-3.col-sm-2.col-lg-1
    //-           img(src="@/assets/curso/temas/video.svg")
    //-         .col
    //-           .row.justify-content-between.align-items-center
    //-             .col.mb-3.mb-sm-0
    //-               h4 b. Aplicaciones comerciales
    //-               p.text-small En el siguiente video se muestran algunas de las aplicaciones del petróleo en los elementos de la vida cotidiana:
    //-             .col-sm-auto
    //-               a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=yCnO7S3V2wE" target="_blank")
    //-                 span Ver video
    //-                 i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Infraestructura]

    p.mb-5(data-aos="fade-right") De acuerdo con la Agencia Nacional de Hidrocarburos ANH (2018), la infraestructura asociada a la industria del petróleo es denominada también cadena del petróleo y se compone de las siguientes actividades, agrupadas en dos áreas llamadas Upstream y Downstream. En la siguiente figura se resumen las actividades de la cadena del petróleo.


    .row.mb-5.align-self-stretch.justify-content-center(data-aos="fade-down-right") 
      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-09.svg', alt='')
          .text-small.text-center Exploración sismica

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-10.svg', alt='')
          .text-small.text-center Exploración perforatoria

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-11.svg', alt='')
          .text-small.text-center Producción

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-12.svg', alt='')
          .text-small.text-center Refinación

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-13.svg', alt='')
          .text-small.text-center Transporte

      .col-sm-6.col-lg-2.col-md-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.text-white--hover(style="height:100%")
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/temas/tema2/tema2-14.svg', alt='')
          .text-small.text-center Comercialización


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Cadena del petróleo</i>
        .tabla-a.color-acento-botones.mb-4
          table
            tbody
              tr
                th.text-center(rowspan="3" style="width:15%") #[i Upstream]
                td.text-center(style="width:25%") Exploración Sísmica
                td.text-center Consiste en el reconocimiento de las capas de rocas que existen en el subsuelo a través de técnicas de emisión de ondas de sonido con generadores de energía. Las ondas viajan y rebotan por las diferentes capas de la tierra de tal manera que son registradas por instrumentos denominados geófonos. El producto de esta actividad es un estudio sísmico.
              tr
                td.text-center Exploración Perforatoria
                td.text-center Posterior al estudio sísmico se procede a realizar en el terreno analizado perforaciones con taladros especiales de tal manera que sea posible llegar hasta la capa de roca donde posiblemente exista un depósito de hidrocarburos.
              tr
                td.text-center Producción
                td.text-center Una vez confirmada la existencia de hidrocarburos en las diferentes capas de roca, se procede a instalar varios equipos que permiten la extracción del petróleo de manera continua hasta la superficie.
              tr
                th.text-center(rowspan="3" style="width:15%") #[i Downstream]
                td.text-center(style="width:25%") Transporte
                td.text-center Una vez el petróleo se extrae a la superficie, se procede a transportarlo desde el pozo hasta lo sitios de almacenamiento y procesamiento. El petróleo es conducido a través de tuberías (oleoductos), camiones o barcos.
              tr
                td.text-center Refinación
                td.text-center Es un proceso mediante el cual se le hace tratamiento térmico al petróleo para obtener sus derivados (gasolina, #[i diesel], gas licuado de petróleo, etc.). El lugar donde se realiza este proceso se llama Refinería.
              tr
                td.text-center Comercialización
                td.text-center Consiste en la venta y distribución del petróleo y sus derivados a los clientes o usuarios. Normalmente de utiliza la figura de distribuidores mayoristas y distribuidores minoristas.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small En el siguiente video de la Agencia Nacional de Hidrocarburos se explica con mayor detalle cada uno de los componentes de la cadena del petróleo:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=tkmgV1d80MI" target="_blank")
                    span Ver video
                    i.fas.fa-video

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | Cifras del sector

    p.mb-5(data-aos="fade-right") En las siguientes figuras se muestran las cifras y las tendencias del sector de acuerdo los datos estadísticos publicados por Agencia Nacional de Hidrocarburos ANH (2021).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/temas/tema2/tema2-15.png', alt='')

    h5 Reservas y producción de petróleo
    p En la figura anterior se observan los datos correspondiente a tres variables:
    p.mb-0 Reservas probadas de Petróleo en millones de barriles (MBls).
    p.mb-0 Producción anual de petróleo en millones de barriles (MBls).
    p Relación Reservas/Producción (R/P) en años. Esta cantidad permite determinar si se requieren más proyectos de exploración y producción. No se debe confundir con la cantidad de años en que se tendrá el recurso disponible. Normalmente se busca que este valor sea lo más alejado de uno (1).

    p.mb-5(data-aos="fade-right") Como se puede observar, las reservas probadas de petróleo en Colombia han venido decreciendo si se comparan con los años 2010 a 2014. Sin embargo, actualmente se están ejecutando varios proyectos de exploración que pueden hacer cambiar esta tendencia. Adicionalmente la producción anual ha decrecido en el año 2020 pero esto se debe a los efectos de la pandemia en la economía nacional. El valor más alto de R/P se produjo en el año 2009, mientras que el más bajo se registró en el año 2016.











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
