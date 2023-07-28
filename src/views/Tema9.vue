<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 9
      h1 Cifras del sector eléctrico colombiano

    p.mb-4(data-aos="fade-right") Para entender con más detalle el funcionamiento del sistema eléctrico colombiano es importante observar las cifras para cada uno de los sectores y operaciones de este. En los siguientes apartados se muestra a través de datos y gráficas el comportamiento, composición y tendencias para diferentes periodos de tiempo.

    Separador
    #t_9_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.1 Generación

    p.mb-4(data-aos="fade-right") La generación de electricidad es el proceso mediante el cual se transforma un tipo de energía primaria en energía eléctrica. Las plantas generadoras se clasifican, dependiendo del tipo de energía primaria utilizada para la generación de la electricidad. En Colombia las plantas generadoras utilizadas son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down-right")
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/tema9-01.svg' alt='AvatarTop')
        h4.text-center Hidráulica 
        p.text-center Aprovecha la energía cinética del agua acumulada en un embalse para mover turbinas
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/tema9-02.svg' alt='AvatarTop')
        h4.text-center Térmica o combustible fósil 
        p.text-center Utiliza procesos térmicos, químicos y eléctricos para generar energía obtenida a partir de combustibles como el Fuel Oil, Carbón, ACPM, Gas y Jet-A1, entre otros.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/tema9-03.svg' alt='AvatarTop')
        h4.text-center Solar 
        p.text-center Utiliza como fuente primaria la energía proveniente de la radiación solar.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/tema9-04.svg' alt='AvatarTop')
        h4.text-center Eólica 
        p.text-center Utiliza como fuente primaria la energía de las corrientes de aire para mover las palas de un aerogenerador.
      .tarjeta.tarjeta--gris.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema9/tema9-05.svg' alt='AvatarTop')
        h4.text-center Biomasa 
        p.text-center Utiliza procesos térmicos, químicos y eléctricos para generar energía obtenida a partir de la materia orgánica como plantas, residuos de los animales y de los humanos.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Capacidad instalada]

    p.mb-4(data-aos="fade-right") La capacidad instalada o efectiva hace referencia a la totalidad de potencia instalada disponible para atender las necesidades de energía eléctrica en el país. La unidad de medida es el Megavatio [MW]; en la siguiente tabla se muestra la capacidad instalada en Colombia al final del año 2020, de acuerdo con los datos suministrados por XM (2020).

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-6(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 6. </b> <i>Capacidad instalada en Colombia al final del año 2020</i>
        .tabla-a.color-acento-botones.mb-4
          table(style="width:auto")
            caption Nota. Los datos se tomaron de XM (2020).
            thead
              tr
                th.text-center Tipo / Fuente de energía
                th.text-center Capacidad efectiva neta [MW]
                th.text-center Porcentaje del total [%]
            tbody
              tr
                td.text-center Hidráulica 
                td.text-center 11.944,79
                td.text-center 68,3%
              tr
                td.text-center Térmica
                td.text-center 5.321,34
                td.text-center 30,4%
              tr
                td.text-center Solar
                td.text-center 60,56
                td.text-center 0,3%
              tr
                td.text-center Eólica
                td.text-center 18,42
                td.text-center 0,1%
              tr
                td.text-center Biomasa
                td.text-center 139,6
                td.text-center 0,8%
              tr
                th.text-center Total
                th.text-center 17.484,71
                th.text-center 100%
      .col-12.col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema9/tema9-06.png', alt='')
        figcaption Generación de electricidad 2020 [GWh]

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p Como se puede observar en Colombia, la mayor capacidad instalada se encuentra en las plantas hidroeléctricas, seguido de las centrales térmicas, en menor medida se encuentran las plantas de biomasa, centrales solares y eólicas. A pesar de estar en el último lugar, se espera en los próximos años un crecimiento exponencial en la capacidad disponible de las centrales solares y eólicas.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Generación de electricidad]

    p.mb-4(data-aos="fade-right") A diferencia de la capacidad instalada, la generación hace referencia a cuánta electricidad produce cada planta generadora, lo cual dependerá de las condiciones ambientales, en especial la hidrología y el clima. En la siguiente tabla se muestra la generación de electricidad en Colombia en el año 2020, de acuerdo con los datos suministrados por XM (2020):

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-6(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 7. </b> <i>Generación de electricidad en Colombia en 2020</i>
        .tabla-a.color-acento-botones.mb-4
          table(style="width:auto")
            caption Nota. Los datos se tomaron de XM (2020).
            thead
              tr
                th.text-center Tipo / Fuente de energía
                th.text-center Capacidad efectiva neta [MW]
                th.text-center Porcentaje del total [%]
            tbody
              tr
                td.text-center Hidráulica 
                td.text-center 49.837,40
                td.text-center 71,9%
              tr
                td.text-center Térmica
                td.text-center 18.560,90
                td.text-center 26,8%
              tr
                td.text-center Solar
                td.text-center 190,80
                td.text-center 0,3%
              tr
                td.text-center Eólica
                td.text-center 10,10
                td.text-center 0,0%
              tr
                td.text-center Biomasa
                td.text-center 724,40
                td.text-center 1,0%
              tr
                th.text-center Total
                th.text-center 69.323,60
                th.text-center 100%
      .col-12.col-md-6(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema9/tema9-07.png', alt='')
        figcaption Generación de electricidad 2020 [GWh]

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-left")
        .cajon.color-acento-botones.p-4
          p De los datos anteriores se puede concluir que en Colombia las plantas hidroeléctricas son las que generan mayor cantidad de electricidad, seguidas por las centrales térmicas. Esta distribución puede variar dependiendo de los fenómenos climáticos, como por ejemplo, el fenómeno del niño donde se presentan periodos de escasez de lluvias, por lo tanto, algunos embalses bajan su nivel de agua y las plantas hidroeléctricas no pueden entrar en operación.

    Separador
    #t_9_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.2 Transmisión

    p.mb-4(data-aos="fade-right") Esta actividad consiste en el transporte de energía eléctrica a través del conjunto de líneas, con sus correspondientes módulos de conexión (Sistema de Transmisión Nacional – STN), que operan a tensiones iguales o superiores a 220 kV, o a través de redes regionales o interregionales de transmisión a tensiones inferiores. En la siguiente tabla, de acuerdo con la información suministrada por PARATEC (2021) se muestra la longitud total de líneas de transmisión en el país a junio de 2021 y la distribución de acuerdo con su nivel de tensión.

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-8(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 8. </b> <i>Longitud total de líneas de transmisión en Colombia a junio de 2021</i>
        .tabla-a.color-acento-botones.mb-4
          table(style="width:auto")
            caption Nota. La información se tomó de PARATEC (2021).
            thead
              tr
                th.text-center Línea de Transmisión
                th.text-center Longitud [km]
                th.text-center Porcentaje
            tbody
              tr
                td.text-center Transmisión a 110 kV 
                td.text-center 3.961,86
                td.text-center 14%
              tr
                td.text-center Transmisión a 115 kV
                td.text-center 7.799,21
                td.text-center 28%
              tr
                td.text-center Transmisión a 138 kV
                td.text-center 15,49
                td.text-center 0%
              tr
                td.text-center Transmisión a 220 kV
                td.text-center 2.647,24
                td.text-center 09%
              tr
                td.text-center Transmisión a 230 kV
                td.text-center 10.548,26
                td.text-center 37%
              tr
                td.text-center Transmisión a 500 kV
                td.text-center 3.215,17
                td.text-center 11%
              tr
                th.text-center Total
                th.text-center 28.187,23
                th.text-center 100%
      .col-12.col-md-4(data-aos="fade-left")
        .row.justify-content-center.align-items-center
          .col-12
            .cajon.tarjeta--azul.p-3
              p La longitud mayor en líneas de transmisión para el Sistema de Transmisión Nacional se tiene para las líneas a 230 kV, seguidos de las líneas a 115 kV.
              p Algunas de las líneas de transmisión se utilizan para hacer el intercambio internacional de electricidad con Ecuador.

    p.mb-4(data-aos="fade-right") Desde el transporte de energía se tiene el paso de la comercialización con el usuario y por supuesto, la regulación vigente.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Comercialización]

    p.mb-4(data-aos="fade-right") La comercialización de energía eléctrica es el proceso mediante el cual las empresas denominadas y registradas como comercializadoras compran la energía en el mercado eléctrico mayorista (MEM), para posteriormente ser vendida a sus clientes o usuarios mediante una tarifa establecida.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Te invitamos a revisar los videos, para entender este mercado:
                  p.text-small Enel Codensa muestra de manera general de qué se trata la comercialización de energía.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://youtu.be/LeGd8DR0ymM" target="_blank")
                    span Ver video
                    i.fas.fa-video 
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Concepto de tarifa y sus componentes.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=LLm4NoSV3LI" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-08.png', alt='')
        p.text-center La rentabilidad de las empresas comercializadoras dependerá de la diferencia entre el valor al que adquieren la energía y el valor de venta al cliente.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-09.png', alt='')
        p.text-center Cada empresa asigna libremente el valor en pesos por las actividades de comercialización en un componente denominado con la letra C, el cual es cobrado al cliente en la factura de energía con los demás componentes asociados al costo unitario del servicio.

    p.mb-4(data-aos="fade-right") Al mes de julio de 2021, existen registrados en total 130 comercializadores de energía eléctrica distribuidos en los diferentes departamentos del país. Las reglas de la comercialización de energía están contempladas en el Reglamento de Comercialización del servicio público de energía eléctrica expedido por la CREG en la resolución 156 de 2011.


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        p Las empresas comercializadoras tienen la opción de comprar la energía en la bolsa y a través de la suscripción de contratos bilaterales.
        p En la siguiente tabla se muestran los precios promedio de compra de energía en la bolsa y los precios de los contratos.
        p Se debe tener en cuenta que estos valores corresponden solo al componente de generación (G) el cual es el único que se puede negociar en el mercado.
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 9. </b> <i>Precios promedio de compra de energía en la bolsa y los precios de los contratos</i>
        .tabla-a.color-acento-botones.mb-4
          table
            thead
              tr
                th.text-center(style="width:15%") Fecha
                th.text-center Precios de contratos - No regulado ($/kWh)
                th.text-center Precios de Bolsa Nacional ($/kWh)
            tbody
              tr
                td.text-center jul/2021
                td.text-center 212,55
                td.text-center 84,53
              tr
                td.text-center jun/2021
                td.text-center 212,38
                td.text-center 90,5
              tr
                td.text-center may/2021
                td.text-center 211,71
                td.text-center 99,69
              tr
                td.text-center abr/2021
                td.text-center 207,69
                td.text-center 163,45
              tr
                td.text-center mar/2021
                td.text-center 204,63
                td.text-center 166,16
              tr
                td.text-center feb/2021
                td.text-center 203,21
                td.text-center 272,63
              tr
                td.text-center ene/2021
                td.text-center 196,61
                td.text-center 178,59
              tr
                td.text-center dic/2020
                td.text-center 191,87
                td.text-center 161,2
              tr
                td.text-center nov/2020
                td.text-center 191,61
                td.text-center 174,82
              tr
                td.text-center oct/2020
                td.text-center 192,36
                td.text-center 194,14
              tr
                td.text-center sep/2020
                td.text-center 190,53
                td.text-center 151,16
              tr
                td.text-center ago/2020
                td.text-center 190,43
                td.text-center 159,29
              tr
                td.text-center jul/2020
                td.text-center 189,09
                td.text-center 156,99
              tr
                td.text-center jun/2020
                td.text-center 189,96
                td.text-center 313,1
              tr
                td.text-center may/2020
                td.text-center 190,27
                td.text-center 368,57
              tr
                td.text-center abr/2020
                td.text-center 192,19
                td.text-center 255,71
              tr
                td.text-center mar/2020
                td.text-center 191,51
                td.text-center 348,67
              tr
                td.text-center feb/2020
                td.text-center 190,93
                td.text-center 435,82
              tr
                td.text-center ene/2020
                td.text-center 192,43
                td.text-center 332,56

    p.mb-3(data-aos="fade-right") De acuerdo con los valores mostrados, en los meses de enero del 2020 hasta junio del mismo año el precio de bolsa de la generación (G) es mayor que la de los contratos. Sin embargo, en los meses posteriores el precio de bolsa es menor que el precio de los contratos.
    p.mb-5(data-aos="fade-right") Como se puede observar, los precios de la bolsa fluctúan constantemente ya que, dependen de las condiciones climáticas y las condiciones sociales del entorno. Muchas empresas que consumen grandes cantidades de electricidad prefieren comprar la energía a un valor fijo y en un periodo de varios años, para garantizar que se cumplan sus presupuestos de gastos en energía sin depender de factores externos. Para tal fin, existen los contratos bilaterales.


    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-10.png', alt='')
        p.text-center Los usuarios son las personas naturales o jurídicas quienes reciben y usan en sus domicilios el servicio de electricidad. 
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema9/tema9-11.png', alt='')
        p.text-center A cambio de la prestación del servicio, mensualmente reciben una factura donde se cobra un valor en pesos proporcional al consumo en kilovatioshora (kWh) de acuerdo con un precio unitario de pesos por kilovatiohora ($/kWh) pactado con la empresa comercializadora.

    Separador
    #t_9_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.3 Usuarios regulados y no regulados

    p.mb-5(data-aos="fade-right") En Colombia los usuarios se dividen en dos clasificaciones: regulados y no regulados. El término “regulado” indica que el valor unitario de pesos por kilovatio hora es establecido o regulado por la CREG. En la siguiente tabla se resumen las características de cada tipo de usuario:


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 10. </b> <i>Longitud total de líneas de transmisión en Colombia a junio de 2021</i>
        .tabla-a.color-acento-botones.mb-4
          figure
            img(src='@/assets/curso/temas/tema9/tema9-12.svg', alt='')

    p.mb-5(data-aos="fade-right") La ventaja de pertenecer a la categoría de usuario no regulado, es que por lo general (salvo en casos muy especiales) se obtiene un mejor precio por el valor unitario del kilovatio hora ($/kWh), permitiendo que se pague menos dinero por el consumo total facturado. Lo anterior se refleja en la siguiente figura donde se muestra el comportamiento del valor unitario promedio en el país durante los años 2016 a 2018 por departamento:

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 11. </b> <i>Comportamiento del valor unitario promedio en el país durante los años 2016 a 2018</i>
        .tabla-a.color-acento-botones.mb-4
          figure
            img(src='@/assets/curso/temas/tema9/tema9-13.png', alt='')
          figcaption Ministerio de Minas y Energía (2018) p. 104 https://www1.upme.gov.co/PromocionSector/SeccionesInteres/Documents/Boletines/Boletin_Estadistico_2018.pdf

    Separador
    #t_9_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 9.4 Consumo nacional por tipo de usuario

    p.mb-5(data-aos="fade-right") El consumo de energía eléctrica determina la participación de los usuarios en el mercado y las transacciones realizadas en el sistema eléctrico nacional. En la siguiente figura se describe el porcentaje de participación por tipo de usuario en el año 2020, de acuerdo con los datos suministrados por XM (2020).

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 12. </b> <i>Porcentaje de participación por tipo de usuario en 2020</i>
        .tabla-a.color-acento-botones.mb-4
          figure
            img(src='@/assets/curso/temas/tema9/tema9-14.svg', alt='')

    p.mb-3(data-aos="fade-right") Se observa una mayor demanda de energía para los clientes pertenecientes al mercado regulado.
    p.mb-5(data-aos="fade-right") Adicionalmente, de acuerdo con XM (2020), la distribución de consumo para los usuarios no regulados dependiendo de la actividad económica se muestra a continuación:


    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 13. </b> <i>Distribución de consumo para los usuarios no regulados dependiendo de la actividad económica</i>
        .tabla-a.color-acento-botones.mb-4
          figure
            img(src='@/assets/curso/temas/tema9/tema9-15.svg', alt='')

    p Las industrias manufactureras y la explotación de minas y canteras se llevan la mayoría de la demanda de electricidad.


</template>

<script>
export default {
  name: 'Tema9',
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
