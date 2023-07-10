<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 6
      h1 Huella de carbono

    .row.justify-content-center.align-items-center.tarjeta--azul.mb-4.p-4(data-aos="fade-down-right") 
      .col-12.col-md-6.py-3
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | La huella de carbono es un valor que permite cuantificar la cantidad de Gases de Efecto Invernadero (GEI) .
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Los GEI, son liberados a la atmósfera a causa del desarrollo de cualquier actividad humana, incluyendo la prestación de cualquier servicio, y la elaboración, comercialización y disposición de productos de consumo.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Debido a que el dióxido de carbono (CO2) es el GEI más abundante, la huella de carbono se mide en unidades de masa (toneladas por lo general) equivalente a este gas y se expresa como CO2equivalente o de forma abreviada CO2e. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | En otras palabras, hay procesos que directamente emiten al ambiente dióxido de carbono, pero no solo se emite ese gas sino por ejemplo metano (CH4),
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | El CH4, para poder sumarlo en la cuantificación de la huella de carbono, se debe convertir ese metano a su equivalente en CO2, que para este gas de acuerdo con Corporación Ambiental Empresarial (2015) resulta de multiplicar por 25 la cantidad en toneladas de CH4.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Es decir, emitir al ambiente una tonelada de CH4 equivale a la emisión de 25 toneladas de CO2e. El factor de 25 equivale al Potencial de Calentamiento Global del CH4 con respecto al CO2. 
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema6/tema6-01.svg', alt='')

    Separador
    #t_6_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.1 El efecto invernadero y gases de efecto invernadero (GEI)


    .row.justify-content-center.align-items-center(data-aos="fade-down-right") 
      .col-12.col-md-8.py-3
        p El efecto invernadero es un fenómeno natural en donde parte de la energía por radiación que viene del sol se queda atrapada en el planeta y permite un equilibrio en las condiciones climáticas, bióticas y abióticas que permiten el desarrollo de la vida; sin embargo, este equilibrio ha sido perturbado por la influencia de las actividades humanas, lo cual ha producido como consecuencia el calentamiento global. 
        p En el siguiente video realizado por Estrategia climática de largo Plazo Colombia E2050 se explica con mayor detalle el efecto invernadero, no deje de consultarlo.
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema6/tema6-02.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 El efecto invernadero - E2050 Colombia
                  p.text-small Se visualiza el efecto invernadero como un fenómeno natural que permite la vida en la Tierra, gracias a la capacidad atmosférica de retener parte del calor del sol.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=IhV2GdgEQvs" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Principales gases de efecto invernadero]

    p.mb-5(data-aos="fade-right") La cantidad total de gases de efecto invernadero es bastante numerosa, ya que cada GEI difiere en su origen, composición, impacto ambiental y el tiempo de permanencia en la atmósfera. Los GEI que mayor tiempo permanecen en la atmósfera son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 CO2
              p Dióxido de carbono: tiempo de permanencia mayor a 100 años.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 N2O
              p Óxido nitroso: tiempo de permanencia mayor a 121 años.
      .col-lg-6(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 CH4
              p Metano: tiempo de permanencia entre 12 y 20 años.
      .col-lg-6(data-aos="fade-left")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema6/tema6-06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 SF6
              p Hexafluoruro de azufre: tiempo de permanencia de 3200 años.

    p.mb-3(data-aos="fade-right") En la siguiente tabla se muestran los principales gases de efecto invernadero de mayor tiempo de permanencia y su potencial de calentamiento global (o factor de conversión a CO2) de acuerdo con la informació n de la Corporación Ambiental Empresarial (2015).
    p.mb-5(data-aos="fade-right") Nota: por lo general para los cálculos se toma el factor definido por el horizonte a 100 años, debido a que se tiene estimado que ese es el tiempo de permanencia en el ambiente del dióxido de carbono. Se puede observar que para el caso del metano el valor del PCG con un horizonte de 100 años disminuye respecto al horizonte de 20 años, porque su tiempo de permanencia estimado es de aproximadamente 20 años.

    .row.justify-content-center.mb-4
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Principales gases de efecto invernadero de mayor tiempo de permanencia</i>
        .tabla-a.color-acento-botones.mb-4
          table
            caption Nota. Los datos se tomaron dela Corporación Ambiental Empresarial (2015). https://www.acueducto.com.co/wps/html/resources/2018ag/huella_carbono/informe_gei/6_anexo_3Factores_Emision_Herramienta_Inventario_GEI_EAB_2014.pdf
            thead
              tr
                th(style="width:15%") Nombre del GEI
                th(style="width:15%") Fórmula química
                th Potencial de Calentamiento Global (PCG) para un horizonte de 100 años (factor de conversión a CO2e)
                th Potencial de Calentamiento Global (PCG) para un horizonte de 20 años (factor de conversión a CO2e)
            tbody
              tr
                th.text-center Dióxido de Carbono
                td.text-center CO2
                td.text-center 1
                td.text-center 1
              tr
                th.text-center Metano
                td.text-center CH4
                td.text-center 25
                td.text-center 72
              tr
                th.text-center Óxido Nitroso
                td.text-center N2O
                td.text-center 298
                td.text-center 289
              tr
                th.text-center Hexafluoruro de Azufre
                td.text-center SF6
                td.text-center 22.800
                td.text-center 16.300

    Separador
    #t_6_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.2 Enfoques para la determinación de la huella de carbono

    p.mb-5(data-aos="fade-right") Existen cuatro posibles enfoques para el cálculo de la huella de carbono, los cuales están determinados por el tipo de actividad a analizar:


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6.mb-5.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Huella de carbono de producto")
            .col-12.mb-4.mb-md-0
              p.text-small Consiste en el cálculo de las emisiones de GEI de un producto durante todo su ciclo de vida. Cuando se habla de ciclo de vida normalmente se acostumbra a escuchar la expresión “desde la cuna hasta la tumba” lo cual quiere decir que se deben analizar todos los procesos involucrados como por ejemplo la extracción de los materiales requeridos para la fabricación, el transporte, el proceso de producción, la comercialización, su utilización por el usuario o comprador y la disposición final cuando acabe su tiempo de vida útil. Por lo general este tipo de cálculos se realiza a través de una metodología más detallada denominada como Análisis de Ciclo de Vida.
              
          .row(numero="2" titulo="Huella de carbono de una corporación u organización")
            .col-12.mb-4.mb-md-0
              p.text-small Consiste en el cálculo de las emisiones de GEI que se generan por la actividad de una empresa u organización. En este tipo de análisis se deben definir los alcances para realizar el cálculo y por lo general se analiza el consumo de energía y agua del edificio u oficina de la organización, medios de transporte, personal que labora para la empresa y otros factores más.

          .row(numero="3" titulo="Inventario nacional de emisiones de GEI")
            .col-12.mb-4.mb-md-0
              p.text-small consiste en el cálculo de las emisiones de GEI de todo un país teniendo en cuenta el resultado de todas las actividades humanas realizadas al interior de la nación y adicionalmente los recursos naturales con los que cuenta para almacenamiento de GEI.
              
          .row(numero="4" titulo="Huella de carbono de una persona")
            .col-12.mb-4.mb-md-0
              p.text-small Consiste en el cálculo de las emisiones de GEI que se generan como consecuencia de la actividad de una persona. Nuestro papel en la sociedad es muy importante y nuestra huella de carbono dependerá de la energía que consumimos en el hogar, nuestros medios de transporte, nuestro estilo de vida, los productos y servicios que adquirimos entre muchos otros factores.
              
      .col-12.col-md-6.mb-5.mb-lg-0.d-none.d-sm-none.d-md-block(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/tema6-07.png', alt='')  

    Separador
    #t_6_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.3 Factores de emisión para la huella de carbono corporativa

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-down-right") 
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema6/tema6-08.svg', alt='')
      .col-12.col-md-6.py-3
        p Con el fin de facilitar el cálculo de la huella de carbono, a nivel mundial se han desarrollado estudios liderados por el Grupo Intergubernamental de Expertos sobre el Cambio Climático (IPCC por sus siglas en inglés) en donde es posible calcular las emisiones de GEI con una fórmula sencilla, a partir de la multiplicación de la cantidad del dato o actividad por un factor numérico (que puede variar a través de los años). 
        p Para algunas actividades y usos de la energía el valor de los factores de emisión puede variar, dependiendo del país, por tal razón, cada gobierno ha adoptado los factores que son comunes a nivel internacional y ha calculado sus propios factores en los casos que se requieran.
        p De acuerdo con la Corporación Ambiental Empresarial (2015) algunas de las clasificaciones y factores de emisión para el cálculo de la huella de carbono más comunes dentro de una corporación u organización son:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Factores de emisión para combustibles. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Factor de emisión para la energía eléctrica. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Factores de emisión asociados al transporte de pasajeros y carga.

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-11.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Huella de carbono
                  p.text-small Se integra información respecto a los factores de emisión de la huella de carbono, así como los factores asociados.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Tema_6_3_Huella_de_Carbono.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    Separador
    #t_6_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 6.4 Pasos para el cálculo de la huella de carbono de una organización

    .row.justify-content-center.align-items-center(data-aos="fade-down-right") 
      .col-12.col-md-8.py-3
        p Por lo general cuando se requiere el cálculo de la huella de carbono corporativa o de una organización se deben seguir algunos pasos para obtener resultados de manera ordenada.
        p Se debe tener en cuenta que para las organizaciones la huella de carbono se calcula con valores anuales, razón por la cual se debe recopilar toda la información necesaria del año que se requiere estimar y calcular las emisiones de GEI proyectadas a un año.
        p También se recomienda que los valores de las GEI calculadas se muestran en unidades de toneladas. 
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema6/tema6-09.svg', alt='')

    p.mb-5(data-aos="fade-right") Complemente su estudio revisando la siguiente información.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-11.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Huella de carbono
                  p.text-small Este documento muestra que existen varias metodologías o pasos a seguir, para el cálculo de la huella de carbono de una organización; sin embargo, para efectos educativos se sigue la metodología sugerida porla  Corporación Ambiental Empresarial (2015).
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Tema_6_4_Huella_de_Carbono.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 


</template>

<script>
export default {
  name: 'Tema6',
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
