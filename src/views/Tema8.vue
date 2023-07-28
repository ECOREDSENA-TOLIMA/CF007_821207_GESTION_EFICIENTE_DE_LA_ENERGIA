<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 8
      h1 Mercado eléctrico mayorista (MEM)

    p.mb-5(data-aos="fade-right") El mercado eléctrico mayorista (MEM) inició su funcionamiento en el año 1995 gracias a la legislación y organización del Sistema Eléctrico Colombiano determinado por las Leyes 142 y 143 de 1994. Con la creación del MEM se pretende garantizar las siguientes condiciones:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Condición 1")
            .col-12.mb-4.mb-md-0
              p.text-small Libre competencia de acuerdo con regulaciones establecidas.
          .row(numero="2" titulo="Condición 2")
            .col-12.mb-4.mb-md-0
              p.text-small Fomento de la inversión privada en el sector.
          .row(numero="3" titulo="Condición 3")
            .col-12.mb-4.mb-md-0
              p.text-small Reducción de la intervención del estado.
          .row(numero="4" titulo="Condición 4")
            .col-12.mb-4.mb-md-0
              p.text-small Eliminación de monopolios.
          .row(numero="5" titulo="Condición 5")
            .col-12.mb-4.mb-md-0
              p.text-small Precios de la electricidad competitivos.
      .col-12.col-md-6.mb-5.mb-lg-0.d-none.d-sm-none.d-md-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema8/tema8-01.png', alt='') 

    p.mb-3(data-aos="fade-right") Cuando se habla de mercado en términos económicos se hace referencia a un espacio en donde se realizan transacciones e intercambio de bienes, productos o servicios. Dichas acciones se pueden realizar entre individuos o entre diferentes tipos de organizaciones. En el sector eléctrico, dicho espacio se denomina mercado eléctrico mayorista (MEM) y en él se realizan transacciones de compra y venta de grandes bloques de energía eléctrica entre los agentes de la cadena del sector. Amplíe la información revisando el siguiente recurso:
    p.mb-5(data-aos="fade-right") En el MEM participan los siguientes agentes del mercado.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/temas/tema8/tema8-02.svg', alt='')

    p.mb-3(data-aos="fade-right") A pesar de que en el MEM participan todos los anteriores agentes, los más activos en cuanto a transacciones y operaciones del Mercado son los Generadores y Comercializadores. Cabe mencionar que en el MEM también se realizan transacciones con agentes internacionales para el intercambio de energía.
    p.mb-5(data-aos="fade-right") Además de los agentes mencionados, participan en el MEM los siguientes órganos de operación y administración:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-1.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="width:100%")
            .p-4
              h5.text-center Centro Nacional de Despacho (CND).
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-down")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--gris(style="width:100%")
            .p-4
              h5.text-center Administrador del Sistema de Intercambios Comerciales (ASIC).
      .col-md-6.col-lg.mb-5.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/numero-3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul(style="width:100%")
            .p-4
              h5.text-center Liquidador y Administrador de Cuentas de cargos por Uso de las Redes del SIN (LAC).

    p.mb-5(data-aos="fade-right") A pesar de que cada organismo de operación y administración tiene funciones diferentes, existe una empresa llamada XM que cumple con todas las funciones de los tres anteriores organismos descritos.

    //- .row.justify-content-center.align-items-center.mb-5
    //-   .col-md-11.col-lg-11.mb-4.mb-md-0(data-aos="fade-left")
    //-     .tarjeta.color-primario.p-3
    //-       .row.justify-content-around.align-items-center
    //-         .col-3.col-sm-2.col-lg-1
    //-           img(src="@/assets/curso/temas/link.svg")
    //-         .col
    //-           .row.justify-content-between.align-items-center
    //-             .col.mb-3.mb-sm-0
    //-               h5 XM
    //-               p.text-small Se puede obtener mayor información del sector eléctrico y de XM visitando su página web: 
    //-             .col-sm-auto
    //-               a.boton.color-acento-botones(href="https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/personas/1-11-5-normatividad-y-seguridad/4--contrato-de-condiciones-uniformes/contrato-servicio-publico-energia-electrica-2021.pdf" target="_blank")
    //-                 span Descargar
    //-                 i.fas.fa-file-download 

    h4 Segmentación de las transacciones en el MEM
    p.mb-3(data-aos="fade-right") De manera general, se puede afirmar que el MEM se encuentra dividido en dos segmentos dentro de los cuales se pueden realizar transacciones de la energía.

    p.mb-5(data-aos="fade-right") Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¿Qué hace XM?
                  p.text-small Se muestra al albor de la XM, así como las fuentes más utilizadas.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/7MyAXAkP048" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    Separador
    #t_8_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.1 Bolsa de energía o mercado de corto plazo

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-7.mb-5.mb-lg-0(data-aos="fade-left")
        p La bolsa de energía es un sistema de información administrado por XM y regulado por las reglas del mercado mayorista (dispuestas por la Comisión de Regulación de Energía y Gas), donde se intercambian ofertas y demandas de energía entre los generadores y comercializadores.
        p A través del sistema diariamente y con resolución horaria, los generadores realizan ofertas de cantidad de energía disponible (oferta) y el precio a la que pretenden venderla (pesos/kWh), mientras que los comercializadores informan la cantidad de energía (demanda) que requieren comprar para satisfacer las necesidades de sus clientes y el precio máximo al que pretenden comprarla (pesos/kWh).
        p Esta información se tabula gráficamente y a través de un algoritmo matemático se define el precio de la energía para la hora del día en que se está haciendo la transacción. 
      .col-12.col-md-5.mb-5.mb-lg-0.d-none.d-sm-none.d-md-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema8/tema8-03.svg', alt='') 

    p.mb-5(data-aos="fade-right") Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¿Cómo se fija el precio de la electricidad?
                  p.text-small Se muestra con más detalle la operación de la bolsa de energía y la definición del precio de la bolsa en España, que funciona de forma similar a Colombia, pero con nombres diferentes en el administrador del sistema de intercambios.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=eG0FgifDJLg" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    Separador
    #t_8_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.2 Mercado de contratos bilaterales o mercado de mediano y largo plazo

    p.mb-3(data-aos="fade-right") Los contratos bilaterales son acuerdos directos que se realizan entre un comercializador y un generador, donde se pacta libremente la cantidad de energía, el precio de esta, el tiempo de duración y el tipo de contrato. Por lo general, este tipo de contratos es realizado entre empresas que tienen alto volumen de consumo o demanda de energía y quieren evitar las fluctuaciones del mercado de corto plazo. También se utiliza para apalancar económicamente proyectos de generación con energías renovables. A pesar de que los acuerdos bilaterales son libres, estos también se encuentran  regulados y tienen obligaciones con el administrador del sistema de intercambios XM.
    p.mb-5(data-aos="fade-right") Complemente la información revisando el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¿Qué es un PPA?
                  p.text-small Se da una explicación general del modelo de contratos bilaterales a nivel mundial de forma similar al caso de Colombia.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=RS6JouoclLg" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    Separador
    #t_8_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 8.3 Regulación y disposiciones legales

    p.mb-5(data-aos="fade-right") La Comisión de Regulación de Energía y Gas (CREG) es la entidad encargada por el Gobierno Nacional para generar la reglamentación legal del funcionamiento del MEM. En general, las regulaciones van orientadas a dos objetivos principales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-11
        figure
          img(src='@/assets/curso/temas/tema8/tema8-04.svg', alt='')

    p.mb-5(data-aos="fade-right") A continuación, se muestran algunas de las reglas más relevantes del MEM y las resoluciones de la CREG que las establecen y los enlaces para su consulta:


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Reglas más relevantes del MEM y las resoluciones de la CREG</i>
        .tabla-a.color-acento-botones.mb-4
          table
            thead
              tr
                th(style="width:20%") Regla del mercado
                th Normativa CREG
            tbody
              tr
                td Aspectos comerciales del MEM.
                td 
                  p.mb-0 Resolución CREG 024 de 1995. 
                  p <a href="http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1995-CRG95024">http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1995-CRG95024</a>
              tr
                td Límites de verticalidad y participación accionaria.
                td 
                  p.mb-0 Resolución CREG 128 de 1996.
                  p <a href="http://apolo.creg.gov.co/PUBLICAC.NSF/Indice01/Resoluci%C3%B3n-1996-CR128-96">http://apolo.creg.gov.co/PUBLICAC.NSF/Indice01/Resoluci%C3%B3n-1996-CR128-96</a>
              tr
                td Promoción de la libre competencia en el mercado mayorista.
                td 
                  p.mb-0 Resolución CREG 020 de 1996.
                  p <a href="http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1996-CRG20-96">http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-1996-CRG20-96</a>
              tr
                td Registro de fronteras comerciales y contratos.
                td 
                  p.mb-0 Resolución CREG 047 de 2000.
                  p <a href="http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-2000-CREG047-2000">http://apolo.creg.gov.co/Publicac.nsf/Indice01/Resoluci%C3%B3n-2000-CREG047-2000</a>
              tr
                td Compras de energía del mercado regulado.
                td 
                  p.mb-0 Resolución CREG 114 de 2018.
                  p <a href="http://apolo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/e1aa2bca619f4f6e05258305007463d1?OpenDocument">http://apolo.creg.gov.co/Publicac.nsf/1c09d18d2d5ffb5b05256eee00709c02/e1aa2bca619f4f6e05258305007463d1?OpenDocument</a>

</template>

<script>
export default {
  name: 'Tema8',
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
