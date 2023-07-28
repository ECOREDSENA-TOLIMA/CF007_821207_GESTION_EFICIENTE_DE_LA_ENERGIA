<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 4
      h1 Impacto ambiental

    p.mb-5(data-aos="fade-right") Cuando se habla de medio ambiente, normalmente se hace referencia a todas las interacciones existentes entre los seres vivos, los ecosistemas del planeta Tierra, los recursos naturales disponibles, los seres humanos y los comportamientos sociales de la humanidad. 

    .row.justify-content-center.mb-5.cajon-custom.color-secundario.p-4(data-aos="fade-left")
      .col-12.col-lg-11
        p Es importante resaltar que toda acción humana genera un efecto sobre el medio ambiente. Estos efectos pueden ser considerados positivos o negativos dependiendo de si dichas acciones contribuyen a la mejora de la calidad en el medio ambiente o si al contrario generan un deterioro de este.

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            p El impacto ambiental se define como el efecto sobre el equilibrio del medio ambiente de una o varias acciones realizadas por el hombre.  
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-01.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            p Las actividades más comunes de los sectores económicos en nuestra sociedad y, que permiten mantener un nivel de calidad de vida para los habitantes del planeta, son la producción de bienes y servicios, extracción de materias primas, transporte, generación de electricidad, construcción de vías, construcción de vivienda, entre otras.
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-02.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            p Estas actividades generan impactos considerables en el medio ambiente, de tal forma que se ha roto el equilibrio ambiental y los efectos sobre los ecosistemas y la salud de las personas es negativo.  
            p Debido a lo anterior, muchos gobiernos y organizaciones han trabajado en desarrollar normativas y herramientas técnicas que permitan el desarrollo y operación de las actividades económicas sin afectar o logrando un mínimo de afectación al medio ambiente.
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-03.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            p En el caso de Colombia, actualmente el país cuenta con un marco político y normativo que tiene como objetivo principal reducir los impactos ambientales de las actividades económicas y productivas que soportan el desarrollo económico del país.  
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-04.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-5.mb-4.mb-md-0
            p Para complementar y reforzar el cumplimiento de las normativas ambientales vigentes, en el año 2018 el Consejo Nacional de Política Económica y Social (CONPES) promulgó la Política de Crecimiento Verde en el documento CONPES 3934, donde se establecen cinco ejes estratégicos.
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-05.png', alt='')
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-6.mb-4.mb-md-0
            p La clasificación de los impactos ambientales se establece de acuerdo al medio, determinado por los efectos producidos en gran parte por las actividades económicas y productivas de la sociedad.  
            p La cantidad y el tipo de impactos ambientales dependen directamente de las actividades que desarrolla la empresa para producir los bienes y servicios.  
            p Es decir, la exploración de petróleo tendrá un impacto diferente en cantidad y afectación a los provocados por una empresa que se dedica al lavado de automóviles. 
          .col-md-6.col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema4/tema4-06.png', alt='')

    p.mb-5(data-aos="fade-right") Para identificar los impactos ambientales se debe tener en cuenta que en la relación entre los seres humanos y la naturaleza existen los siguientes medios o factores ambientales en los que puede existir afectación ambiental:

    .row.justify-content-center.tarjeta--azul.mb-5
      .col-md-4.col-12.mb-4.mb-md-0.py-3(data-aos="fade-right")
        h5 Medio abiótico
        figure
          img(src='@/assets/curso/temas/tema4/tema4-07.png', alt='')
        p.pt-3 Elementos de un ecosistema que no tienen vida, pero son necesarios para su equilibrio y subsistencia. Algunos de ellos son: el agua, el aire, viento, minerales del suelo, luz y calor.
      .col-md-4.col-12.mb-4.mb-md-0.py-3(data-aos="fade-down")
        h5 Medio biótico
        figure
          img(src='@/assets/curso/temas/tema4/tema4-08.png', alt='')
        p.pt-3 A esta categoría pertenecen todos los seres vivos que hacen parte del ecosistema, incluido el ser humano. Algunos de ellos son: los microorganismos, las plantas y los animales.
      .col-md-4.col-12.mb-4.mb-md-0.py-3(data-aos="fade-left")
        h5 Medio Socioeconómico
        figure
          img(src='@/assets/curso/temas/tema4/tema4-09.png', alt='')
        p.pt-3 Lo constituye las condiciones sociales, culturales, históricas y económicas de una comunidad.

    //p.mb-5(data-aos="fade-right") En la siguiente tabla se muestran algunos de los impactos ambientales estandarizados y clasificados por el medio de afectación, de acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (2020).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Impactos ambientales estandarizados y clasificados por el medio de afectación
                  p.text-small En la siguiente tabla se muestran algunos de los impactos ambientales estandarizados y clasificados por el medio de afectación, de acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (2020).
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Impactos ambientales estandarizados y clasificados.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_4_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.1 Impactos ambientales de las fuentes de generación de energía

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        p La extracción de las principales fuentes de energía y el proceso de generación de electricidad son actividades que más generan impacto ambiental y, por lo tanto, existen normativas específicas para disminuir los efectos negativos sobre el medio ambiente. A continuación, se describen algunos de los impactos ambientales más significativos para la generación de energía eléctrica dependiendo de la tecnología:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Centrales termoeléctricas. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Centrales hidroeléctricas.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Parques eólicos.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Parques solares fotovoltaicos.  
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema4/tema4-10.png', alt='')

    p.mb-5(data-aos="fade-right") Para ampliar la información se invita a revisar el siguiente documento.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.col.md-2
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Impactos ambientales de las fuentes de generación de energía
                  p.text-small Se revisa el impacto que presenta esta fuente de energía a partir de 3 etapas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Tema_4_Impacto_Ambiental_parte_2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 4.2 Evaluación del impacto ambiental

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        p La Evaluación del impacto ambiental (EIA) es una herramienta que permite a las empresas:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Identificar los aspectos e impactos ambientales que pueden ocurrir por la construcción de un proyecto.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Estimar cuantitativamente la afectación de uno de los impactos y crear indicadores para el seguimiento.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Planificar las acciones necesarias para la prevención y/o corrección de los deterioros ocasionados al medio ambiente.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Potencializar los impactos ambientales positivos del proyecto.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Gestionar y hacer seguimiento a los planes de acción para la mitigación de los impactos ambientales.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Obtener por parte del Estado la aprobación de la licencia ambiental para la ejecución del proyecto en caso de ser requerida. En Colombia la entidad encargada del otorgamiento de licencias ambientales se denomina Autoridad Nacional de Licencias Ambientales (ANLA).
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema4/tema4-11.png', alt='')

    p.mb-5(data-aos="fade-right") Complete esta valiosa información observando el siguiente video:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Video de oferta institucional de la ANLA
                  p.text-small Conozca la oferta institucional y lo que hace la ANLA para promover el desarrollo sostenible y la conservación de la biodiversidad.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=FfsB8Vfc2xU" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    p.mb-5(data-aos="fade-right") De acuerdo con el International Institute for Sustainable Development (2021) los siete pasos recomendados para la elaboración de la evaluación de impacto ambiental son los siguientes:

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-left")
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-md-6.mb-4.mb-md-0
            h4 1. Proceso de tamizado
            p Consiste en la caracterización del proyecto de forma integral, analizando las actividades a desarrollar durante todas las etapas (construcción, operación, cierre).
            p Posteriormente, se procede a realizar la identificación y determinación de cada uno de los impactos ambientales que el proyecto puede ocasionar.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-12.png', alt='')
        .row(titulo="2")
          .col-md-6.mb-4.mb-md-0
            h4 2. Proceso de selección
            p En esta etapa se establecen los límites del proyecto y se seleccionan los impactos ambientales más significativos, y se eliminan los impactos que tienen efectos mínimos en el ambiente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-13.png', alt='')
        .row(titulo="3")
          .col-md-6.mb-4.mb-md-0
            h4 3. Evaluación de impactos y mitigación
            p Consiste en la realización de un análisis detallado de los impactos ambientales en todos los medios.
            p Se procede a realizar la cuantificación de los impactos tomando como base las condiciones actuales del medio (sin proyecto) y se establece una línea base para el seguimiento
            p También se establecen las medidas permitan mitigar y reducir los impactos negativos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-14.png', alt='')
        .row(titulo="4")
          .col-md-6.mb-4.mb-md-0
            h4 4. Manejo de Impactos
            p En esta etapa se realiza la planificación de las acciones a ejecutar durante todo el ciclo de vida del proyecto, y se determinan los indicadores para el cumplimiento de las medidas de reducción de impactos negativos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-15.png', alt='')
        .row(titulo="5")
          .col-md-6.mb-4.mb-md-0
            h4 5. Informe de EIA
            p Consiste en recopilar toda la información de las etapas anteriores y condensarla en un solo documento estructurado, de tal forma que se expliquen las características del proyecto y los resultados del análisis en cada una de las etapas anteriores.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-16.png', alt='')
        .row(titulo="6")
          .col-md-6.mb-4.mb-md-0
            h4 6. Revisión y licenciamiento
            p En esta etapa se radica la solicitud ante la autoridad ambiental para el estudio y revisión de la documentación, y posterior otorgamiento de la licencia ambiental. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-17.png', alt='')
        .row(titulo="7")
          .col-md-6.mb-4.mb-md-0
            h4 7. Monitoreo
            p Una vez sea aprobada la licencia ambiental, el proyecto puede iniciar sus actividades.
            p Durante la etapa de monitoreo se debe asegurar que las medidas de mitigación y los planes de contingencia son aplicados correctamente y se gestionan los impactos ambientales negativos ocasionados por el proyecto, además de registrar toda la información y documentación para ser revisada por la autoridad ambiental.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/tema4-18.png', alt='')

    p.mb-5(data-aos="fade-right") Es necesario que revise el proceso de evaluación e impacto ambiental explorando el siguiente caso.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-11.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/descargar.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 EIA estudio de caso: Minería - Colombia
                  p.text-small Para entender mejor el proceso de evaluación de impacto ambiental, en el siguiente documento tomado del International Institute for Sustainable Development se muestra un ejemplo didáctico donde se analiza el impacto ambiental y los métodos de mitigación utilizados para una mina de oro a cielo abierto.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.iisd.org/learning/eia/es/wp-content/uploads/2016/06/ES-Case-Study-Colombia-Mining.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 




</template>

<script>
export default {
  name: 'Tema4',
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
