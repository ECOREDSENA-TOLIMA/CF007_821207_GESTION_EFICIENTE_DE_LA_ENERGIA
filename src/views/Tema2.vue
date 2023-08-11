<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Energía no renovable

    p.mb-5(data-aos="fade-right") Cuando se habla de fuentes de energía no renovables, se refiere a los recursos energéticos que se encuentran en la naturaleza de manera limitada y no se pueden renovar, es decir, que en algún momento dejarán de estar disponibles para su extracción y uso. Los principales energéticos no renovables son:

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
        p La energía nuclear a nivel mundial es utilizada para la generación de electricidad en grandes centrales, ya que no emite gases de efecto invernadero; sin embargo, los residuos que genera son radioactivos y altamente contaminantes. Además, han ocurrido accidentes en donde como consecuencia grandes extensiones de tierra han tenido que ser evacuadas y no pueden volver a ser usadas. En Colombia no existen centrales de generación nuclear, pero, en las grandes potencias y en países como Brasil y Argentina, existe este tipo de tecnología.

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
    p.mb-5(data-aos="fade-down-right") Aplicaciones industriales. En la siguiente tabla se muestran algunas de las aplicaciones industriales de los derivados del petróleo.
    
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

    p.mb-5(data-aos="fade-right") De acuerdo con la Agencia Nacional de Hidrocarburos ANH (2018), la infraestructura asociada a la industria del petróleo es denominada también cadena del petróleo y se compone de las siguientes actividades, agrupadas en dos áreas llamadas #[i Upstream] y #[i Downstream]. En la siguiente figura se resumen las actividades de la cadena del petróleo.


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
                td.text-center Posterior al estudio sísmico se procede a realizar en el terreno analizado perforaciones con taladros especiales, de tal manera que sea posible llegar hasta la capa de roca donde posiblemente exista un depósito de hidrocarburos.
              tr
                td.text-center Producción
                td.text-center Una vez confirmada la existencia de hidrocarburos en las diferentes capas de roca, se procede a instalar varios equipos que permiten la extracción del petróleo de manera continua hasta la superficie.
              tr
                th.text-center(rowspan="3" style="width:15%") #[i Downstream]
                td.text-center(style="width:25%") Transporte
                td.text-center Una vez el petróleo se extrae a la superficie, se procede a transportarlo desde el pozo hasta los sitios de almacenamiento y procesamiento. El petróleo es conducido a través de tuberías (oleoductos), camiones o barcos.
              tr
                td.text-center Refinación
                td.text-center Es un proceso mediante el cual se le hace tratamiento térmico al petróleo para obtener sus derivados (gasolina, #[i diesel], gas licuado de petróleo, etc.). El lugar donde se realiza este proceso se llama Refinería.
              tr
                td.text-center Comercialización
                td.text-center Consiste en la venta y distribución del petróleo y sus derivados a los clientes o usuarios. Normalmente se utiliza la figura de distribuidores mayoristas y distribuidores minoristas.

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
            | #[strong Cifras del sector]

    p.mb-5(data-aos="fade-right") En las siguientes figuras se muestran las cifras y las tendencias del sector de acuerdo los datos estadísticos publicados por Agencia Nacional de Hidrocarburos ANH (2021).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-10
        figure
          img(src='@/assets/curso/temas/tema2/tema2-15.png', alt='')

    h5 Reservas y producción de petróleo
    p En la figura anterior se observan los datos correspondientes a tres variables:
    p.mb-0 Reservas probadas de Petróleo en millones de barriles (MBls).
    p.mb-0 Producción anual de petróleo en millones de barriles (MBls).
    p Relación Reservas/Producción (R/P) en años. Esta cantidad permite determinar si se requieren más proyectos de exploración y producción. No se debe confundir con la cantidad de años en que se tendrá el recurso disponible. Normalmente, se busca que este valor sea lo más alejado de uno (1).

    p.mb-5(data-aos="fade-right") Como se puede observar, las reservas probadas de petróleo en Colombia han venido decreciendo si se comparan con los años 2010 a 2014. Sin embargo, actualmente se están ejecutando varios proyectos de exploración que pueden hacer cambiar esta tendencia. Adicionalmente, la producción anual ha decrecido en el año 2020, pero esto se debe a los efectos de la pandemia en la economía nacional. El valor más alto de R/P se produjo en el año 2009, mientras que el más bajo se registró en el año 2016.

    Separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 La industria del gas natural

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-16.svg', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Aplicaciones]
    
    p.mb-5(data-aos="fade-right") Las principales aplicaciones del gas natural son:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-17.png', alt='')
        .cajon.text-center(style="background-color:#CFDDF1")
          strong.text-samll Generación de electricidad
        .cajon.tarjeta--azul.px-4.py-3
          p.text-small.mb-0 Existen centrales térmicas de gran capacidad que utilizan gas para producir electricidad mediante turbinas de gas o turbinas de vapor. La electricidad producida es inyectada al Sistema Interconectado Nacional.

      .col-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-18.png', alt='')
        .cajon.text-center(style="background-color:#CFDDF1")
          strong.text-samll Transporte
        .cajon.tarjeta--azul.px-4.py-3
          p.text-small.mb-0 El gas natural se utiliza como combustible de automóviles particulares y de servicio público, también en autobuses y en los sistemas masivos de transporte de las ciudades.
      .col-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-19.png', alt='')
        .cajon.text-center(style="background-color:#CFDDF1")
          strong.text-samll Residencial y comercial
        .cajon.tarjeta--azul.px-4.py-3
          p.text-small.mb-0 Este recurso es muy utilizado en los hogares para el uso en las estufas, calentadores de agua y en calefacción de interiores y exterior en zonas climáticas con temperaturas bajas.
      .col-12.col-md-6.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/tema2-20.png', alt='')
        .cajon.text-center(style="background-color:#CFDDF1")
          strong.text-samll Industrial
        .cajon.tarjeta--azul.px-4.py-3
          p.text-small.mb-0 El gas natural es utilizado en diferentes procesos y equipos en la industria, tales como calderas de vapor, secadores, hornos, sistemas de cogeneración, entre otros.

    p.mb-5(data-aos="fade-right") Como complemento a la información se invita a que ahora observe el siguiente video.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¿Qué es el gas natural y para qué sirve?
                  p.text-small Se explica acerca de la producción del gas natural, y cómo ha servido en las comunidades humanas.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=q8YGbqSVrdE" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Infraestructura]

    p.mb-5(data-aos="fade-right") La infraestructura de la industria del gas comparte con el petróleo las actividades de exploración sísmica y exploración perforatoria. De acuerdo con TGI (2021) las principales actividades de la cadena del gas natural son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Producción")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-21.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Después de la exploración sísmica y exploratoria, el gas es llevado a la superficie para posteriormente pasar por un proceso de limpieza. Luego se lleva a un sistema de compresión (estación de compresión) donde se eleva la presión para ser conducida a las tuberías de transporte.
      .row(titulo="Transporte")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-22.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Consiste en llevar el gas a alta presión a través de kilómetros de tuberías denominadas gasoductos hacia los centros de distribución y directamente hacia los grandes usuarios como los generadores de energía eléctrica y grandes industrias.
      .row(titulo="Distribución")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-23.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p En esta actividad se baja la presión del gas a través de equipos especiales y se adiciona un olor característico (proceso de odorización) para garantizar la seguridad de las personas. El gas es llevado hacia los usuarios finales a través de tuberías de menor diámetro que atraviesan las ciudades y pueblos.
      .row(titulo="Comercialización")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-24.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Es el proceso mediante el cual los consumidores adquieren el gas natural para su consumo. A contraprestación, el usuario recibe una factura con el valor de consumo en metros cúbicos, el valor unitario de pesos por metro cúbico ($/m3) y el valor total a pagar en pesos.

    p.mb-5(data-aos="fade-right") Se invita a consultar el siguiente video donde se ilustra con más detalle la infraestructura de la cadena del gas natural.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Cadena del gas natural
                  p.text-small Conozca todo el recorrido que hace el gas natural para llegar a los hogares.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=zzxIwKPqOoo" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Cifras del sector]

    p.mb-5(data-aos="fade-right") En la siguiente gráfica se muestran las cifras y las tendencias del sector de acuerdo con los datos estadísticos publicados por la Agencia Nacional de Hidrocarburos ANH (2021).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-25.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        p En la gráfica anterior se observan los datos correspondientes a tres variables:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Reservas probadas de gas natural en giga pies cúbicos (Gpc).
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Producción anual comercializada de gas natural en giga pies cúbicos (Gpc).
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Relación reservas/producción (r/p) en años. Esta cantidad permite determinar si se requieren más proyectos de exploración y producción. No se debe confundir con la cantidad de años en que se tendrá el recurso disponible. Normalmente, se busca que este valor sea lo más alejado a (1).
        p Como se puede observar, las reservas actuales probadas de gas natural en Colombia han venido decreciendo si se comparan con los años 2010 a 2013; sin embargo, actualmente se están ejecutando varios proyectos de exploración que pueden hacer cambiar esta tendencia. Adicionalmente, la producción anual comercializada ha decrecido paulatinamente desde el año 2014 hasta el año 2020. El valor más alto de R/P se produjo en el año 2011, mientras que el más bajo se registró en el año 2020.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema2/tema2-26.png', alt='')


    Separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 La industria del carbón
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/temas/tema2/tema2-27.svg', alt='')

    p.mb-5(data-aos="fade-right") Se invita a consultar el siguiente video donde se explica con más detalle el origen del carbón.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 El carbón, ¿qué es?, y ¿cómo se forma?
                  p.text-small Paso a paso del origen del carbón y de qué está compuesto.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=QkWetBP42ik" target="_blank")
                    span Ver video
                    i.fas.fa-video 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-right") 
      .col-12.col-md-6
        .row.justify-content-center.align-items-center.mb-3
          .col-12(data-aos="fade-right")
            ul.lista-ul.mb-2
              li.mb-0
                i.fas.fa-play(style="color:#AD84FF")
                | Aplicaciones
        p De forma similar al petróleo, el carbón en nuestra sociedad tiene una gran cantidad de aplicaciones debido a que desde el Siglo XIX ha sido uno de los principales minerales utilizados para la generación de electricidad, el transporte en barcos y trenes, y posee características químicas para la producción de elementos de uso cotidiano. Actualmente las principales aplicaciones del carbón son las siguientes:
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Generación de electricidad en centrales térmicas. 
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Generación de vapor de agua para procesos industriales.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Fabricación del acero y el cemento.
          li.mb-0
            i.fas.fa-bolt(style="color:#AD84FF")
            | Hornos para la producción de ladrillos.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/temas/tema2/tema2-28.png', alt='')

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Infraestructura]

    p.mb-5(data-aos="fade-right")  Las actividades que hacen parte de la cadena del carbón en Colombia son las siguientes:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Prospección")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-29.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Consiste en la identificación de posibles fuentes de carbón para el desarrollo de un proyecto minero.
      .row(titulo="Exploración")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-30.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p En esta parte de la cadena se pretende hacer una identificación de las características geológicas de un yacimiento. Consiste en la realización de manera secuencial de las siguientes actividades: geología superficial, geología del subsuelo, elaboración del modelo geológico del yacimiento y programación de trabajos y obras requeridos.
      .row(titulo="Construcción y montaje de obras")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-31.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Consiste en la construcción de la infraestructura (carreteras, edificaciones, maquinaria, recursos humanos, etc.) necesaria para realizar la extracción, almacenamiento y transporte del carbón.
      .row(titulo="Comercialización")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-32.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Se refiere a todas las actividades que conllevan las operaciones de compra y venta del carbón al comprador o usuario final.
      .row(titulo="Cierre y abandono")
        .col-md-5.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/tema2-33.png', alt='')
        .col-md-7.col-lg-8.mb-4.mb-md-0
          p Una vez se haya cumplido con los plazos para la extracción del proyecto carbonífero, se debe elaborar y ejecutar un plan de cierre de la mina de acuerdo con la normativa ambiental y social solicitada por las autoridades competentes.

    .row.justify-content-center.align-items-center.mb-3
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#AD84FF")
            | #[strong Cifras del sector]

    p.mb-5(data-aos="fade-right") En la siguiente figura se muestran las cifras de producción del sector de acuerdo con los datos estadísticos publicados por el Sistema de Información Minero Colombiano (2021).

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-botones
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Datos de la producción anual de carbón en Colombia.</i>
      .col-md-4.col-12(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/tema2/tema2-34.svg', alt='')
      .col-md-8.col-12(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema2/tema2-35.svg', alt='')

    p.mb-5(data-aos="fade-right") En la figura anterior se observan los datos correspondientes a la producción anual de carbón en Colombia (en millones de toneladas) desde el año 2012 hasta el año 2020. Las cifras de producción se mantienen en valores regulares entre 84.000 y 91.000 toneladas al año; sin embargo, para el año 2020 la producción disminuyó cerca de un 40% con respecto al año anterior, debido a las restricciones de movilidad implantadas por la mitigación de la propagación de la pandemia del Covid 19 y por una huelga de trabajadores que duró cerca de tres meses.


    Separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Eficiencia en los usos de la energía

    p.mb-5(data-aos="fade-right") La eficiencia dentro de un proceso de transformación de energía es una cantidad por lo general expresada en porcentaje, obtenida a partir de la división entre la energía de salida y la energía de entrada requerida para producirla.  Hay mucho más por descubrir, por ello, se invita a que explore la siguiente información:

    .tarjeta.tarjeta--gris.p-4.mb-5(data-aos="fade-down-right")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Mientras esta cantidad sea igual o muy cercana al 100%, se puede afirmar que el proceso es eficiente, pero si dicha cantidad se aleja del 100% significa que se presentan pérdidas considerables en el proceso de transformación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-36.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Por ejemplo, si se tiene una estufa alimentada con gas natural con una eficiencia del 60%, y se utiliza para calentar agua a 100 centígrados, quiere decir que solo el 60% de la energía del gas natural a la entrada de la estufa se convertirá en energía para calentar el agua y el 40% de energía restante se pierde en el proceso de combustión, en el ambiente y en el calentamiento de los demás elementos que componen la estufa. A este 40% normalmente se le denomina porcentaje de pérdidas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-37.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p De acuerdo con Unidad de Planeación Minero-Energética UPME (2021) en el estudio denominado Primer balance de energía útil para Colombia, se pueden determinar de forma general un promedio de eficiencias de las energías primarias para un uso específico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-38.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Se puede observar que para el calentamiento de agua en el sector residencial, el calentador de paso eléctrico tiene mayor eficiencia que los demás. Sin embargo, debido a que en muchos lugares y en los estratos medios y altos de la economía el valor unitario de la electricidad es más costoso que el del gas natural, se procura utilizar calentadores de paso a Gas para esta aplicación. El equipo menos eficiente para calentar agua es el calentador de acumulación eléctrico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-39.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Se puede observar que para el uso del calor directo para cocción, la opción con mayor eficiencia es la estufa eléctrica, sin embargo, debido a que en muchos lugares y en los estratos medios y altos de la economía el valor unitario de la electricidad es más costoso que el del gas natural, se procura utilizar estufas alimentadas por Gas Natural. A pesar de que el energético menos eficiente para cocción de alimentos es la leña, su uso en Colombia aún es considerable debido a que existen zonas apartadas que no cuentan con acceso a electricidad, gas natural o GLP.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-40.png', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Se puede observar que las eficiencias para cualquier tipo de energético en el transporte privado son muy bajas y no superan el 34%. Si se toma el caso de las camionetas, el energético con mayor eficiencia es el Gas Natural, por esta razón muchos usuarios han realizado la conversión de gasolina a Gas Natural. Para el caso de los automóviles, las eficiencias con muy cercanas entre cada tipo de energético. Debido a que las eficiencias en los vehículos de pasajeros son muy bajas, se está dando impulso a la movilidad eléctrica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-41.png', alt='')


    

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
