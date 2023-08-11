<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Cambio climático

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        p Cuando se habla del medio ambiente y se quiere describir las condiciones naturales del entorno asociadas a un lugar específico, es necesario incluir en dicha descripción el tiempo atmosférico o meteorológico, el cual se define como el valor en el tiempo de la temperatura, la presión, el viento, la humedad y la precipitación.
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | El valor de estas variables cambia con el tiempo y dependen en general de la radiación solar y la composición de la atmósfera y estos factores a su vez dependen de la latitud, la altitud, orientación del relieve, continentalidad (distancia al mar) y corrientes oceánicas. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | El valor promedio de cada una de estas variables tomadas en lapsos de tiempo relativamente largos (30 años o más) se conoce como clima. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | A pesar de ser un promedio, el clima también experimenta cambios naturales en la magnitud de sus variables. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Cuando estos cambios no son debidos a factores naturales, sino a efectos de la actividad humana se habla de cambio climático.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema5/tema5-01.svg', alt='')

    p.mb-5(data-aos="fade-right") Se invita a la revisión de la definición de cambio climático, así como sus causas y efectos, a partir de la siguiente información.

    h5.mb-5(data-aos="fade-right") Definición
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-4
        figure
          img(src='@/assets/curso/temas/tema5/tema5-02.svg', alt='')
      .col-12.col-md-8
        p Según el Panel Intergubernamental de Expertos sobre el cambio climático (IPCC, 2013), el cambio climático es la “Variación del estado del clima identificable (por ejemplo, mediante pruebas estadísticas) en las variaciones del valor medio y/o en la variabilidad de sus propiedades, que persiste durante largos períodos de tiempo, generalmente decenios o períodos más largos”. 
        p Además, la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), en su artículo 1, define el cambio climático como “cambio de clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global y que se suma a la variabilidad natural del clima observada durante períodos de tiempo comparables”.

    p.mb-5(data-aos="fade-right") Además, la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), en su artículo 1, define el cambio climático como “cambio de clima atribuido directa o indirectamente a la actividad humana que altera la composición de la atmósfera global y que se suma a la variabilidad natural del clima observada durante períodos de tiempo comparables”.

    .row.justify-content-center.align-items-center.tarjeta--azul.mb-4(data-aos="fade-down-right") 
      .col-12.col-md-6.py-3
        .cajon.tarjeta--gris.p-3.mb-2
          p.text-center.mb-0 Actualmente se reconoce al científico sueco #[i Svante Arrheniuss] como el pionero en el estudio del cambio climático, especialmente de la temperatura, con la publicación en 1896 de su trabajo sobre “calentamiento global”.
        .cajon.tarjeta--gris.p-3.mb-2
          p.text-center.mb-0 Confirmado en forma independiente por el geólogo estadounidense #[i Thomas Chamberlain] y en donde se relaciona el aumento de temperatura de la superficie del planeta con el aumento de la concentración en la atmósfera del dióxido de carbono (CO2). 
        .cajon.tarjeta--gris.p-3.mb-2
          p.text-center.mb-0 Como el clima se define como un promedio a largo plazo (30 años mínimo), comprobar la teoría del calentamiento global tomó varias décadas y muchas discusiones sobre las causas y los efectos del cambio climático.
        .cajon.tarjeta--gris.p-3.mb-2
          p.text-center.mb-0 Para que finalmente la comunidad científica aceptara como un hecho la existencia del cambio climático y dentro de sus efectos más importantes, se encuentran 3 principales.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema5/tema5-03.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-6.p-4(data-aos="fade-down-left") 
        .row.cajon.tarjeta--azul.p-3
          p #[strong Efecto 1:] Aumento de la temperatura global: Como lo indica el IPCC (2013), el aumento de la temperatura es un hecho irrefutable, y numerosos cambios observados desde la década de 1950 no han tenido precedentes en los últimos decenios. A escala mundial, la temperatura de la superficie terrestre ha tenido un incremento promedio de 0.8 ºC desde 1880 hasta hoy y se estima un aumento entre 2.8ºC y 5.6ºC en los próximos 80 años de continuar la tendencia actual, como se muestra en la siguiente gráfica:
          figure
            img(src='@/assets/curso/temas/tema5/tema5-04.png', alt='')
          p.text-center.text-small Variación promedio de la temperatura global de la tierra.
      .col-12.col-md-6.p-4(data-aos="fade-down-right") 
        .row.cajon.tarjeta--azul.p-3
          p #[strong Efecto 2:] Aumento del nivel del mar: A escala mundial, el nivel global del mar ha tenido un incremento promedio de 19 [cm] desde 1901 hasta 2010 y se estima un aumento entre 40 [cm] y 63 [cm] en los próximos 80 años de continuar la tendencia actual (ONU), como se muestra en la siguiente gráfica:
          figure
            img(src='@/assets/curso/temas/tema5/tema5-05.png', alt='')
          p.text-center.text-small Variación promedio global del nivel del mar.

    .row.justify-content-center.align-items-center.mb-4.tarjeta--azul.p-3
      .col-12.col-md-6.p-4(data-aos="fade-down-left") 
        .row.cajon
          p #[strong Efecto 3:] Pérdida de cobertura glaciar: Los análisis del IPCC (2013) indican que, desde mediados del siglo XX, la extensión del manto de nieve del hemisferio norte ha disminuido.
          p Los deshielos no sólo han afectado al Ártico, sino también a las zonas frías y con hielos perpetuos que se hallan en las zonas altas de montañas y volcanes. La cobertura de los glaciares montañosos y la nieve ha disminuido en ambos hemisferios: sólo en el norte, el área máxima cubierta por hielos estacionales se ha reducido cerca de 7% desde 1900. (Semarnat, 2009), como se muestra en la siguiente gráfica:
      .col-12.col-md-6.p-4(data-aos="fade-down-left")
        figure
          img(src='@/assets/curso/temas/tema5/tema5-06.png', alt='')
        p.text-center.text-small Cobertura de nieve en el hemisferio norte (primavera).

    .cajon.color-acento-botones.p-4.mb-4
      p En cuanto a las causas del cambio climático, actualmente hay un acuerdo de la comunidad científica en atribuirlas al aumento de la concentración en la atmósfera de gases como el dióxido de carbono (CO#[sub 2]), metano (CH4), dióxido de nitrógeno (NO2) y otros, conocidos como gases de efecto invernadero.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6.py-3
        h4 Soluciones tecnológicas
        p Según el IPCC (2007), la sociedad puede adecuarse al cambio climático y sus impactos por medio de estrategias de adaptación, mitigación y geoingeniería.
        p Las estrategias de adaptación son necesarias porque el cambio climático natural es impredecible y no puede evitarse y ante estas circunstancias es un hecho que las acciones preventivas son más efectivas y menos costosas que las correctivas. Un ejemplo de estrategia de adaptación al aumento del nivel del mar se muestra en la siguiente figura:
      .col-12.col-md-6
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Estrategia de adaptación al aumento del nivel del mar.</i>
        figure
          img(src='@/assets/curso/temas/tema5/tema5-07.png', alt='')
        //p.text-center.text-small Estrategias de adaptación a aumento del nivel del mar (Mark Masli, Cambio climático, 2014)

    p.mb-5(data-aos="fade-right") De otra parte, están las estrategias de mitigación que hacen referencia a aquellas acciones encaminadas a disminuir las causas que producen el cambio climático, como por ejemplo, la denominada huella de carbono y cambiar de fuente primaria de energía no renovable (combustibles fósiles) a fuentes renovables como la solar, eólica, mareomotriz, geotérmica y nuclear. Revise a qué hacen alusión dichas fuentes:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/tema5-08.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Colombia como país integrante de la ONU y en cumplimientos de los objetivos de desarrollo sostenible, en particular el “Objetivo 13: Adoptar medidas urgentes para combatir el cambio climático y sus efectos” ha implementado la Estrategia colombiana de desarrollo bajo en carbono (ECDBC) que es un programa liderado por el Ministerio de Ambiente y Desarrollo Sostenible (MADS), cuyo objetivo es evitar el crecimiento acelerado de las emisiones de GEI a medida que los sectores económicos crecen.
                
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/tema5-09.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Las estrategias de geoingeniería hacen referencia al desarrollo y uso de nuevas tecnologías para remover de la atmósfera los gases de efecto invernadero y para controlar el clima.
      
      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/tema5-10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Ejemplos de estas estrategias son la reforestación, aumento del consumo de dióxido de carbono (CO2) en los procesos biológicos del mar, aumento de la desintegración y ruptura de las rocas (meteorización) por reacción con el dióxido de carbono (CO2) atmosférico y manejo de la radiación solar.

      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/tema5-11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Los Planes de Acción Sectorial de Mitigación para el Cambio Climático (PAS) que tienen como objeto identificar las prioridades de mitigación en los diferentes sectores económicos y sus medios de implementación para facilitar su integración en la planeación sectorial y lograr así la reducción de emisiones futuras y el programa de Uso Racional de la energía (URE).

      .col-md-11.col-lg-10.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta--gris-2.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema5/tema5-12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small Que es “el aprovechamiento óptimo de la energía en todas y cada una de las cadenas energéticas, desde la selección de la fuente energética, su producción, transformación, transporte, distribución, y consumo, incluyendo su reutilización cuando sea posible, buscando en todas y cada una de las actividades, de la cadena el desarrollo sostenible” (Ley 697 de 2001).




</template>

<script>
export default {
  name: 'Tema5',
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
