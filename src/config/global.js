export default {
  global: {
    componenteFormativo:
      'Recursos energéticos de acuerdo con su aprovechamiento, impacto ambiental y contexto',
    descripcionCurso:
      'Esta unidad estudiará fundamentalmente los diferentes tipos de recursos energéticos. El aprendiz conocerá las principales tecnologías para la producción de energía renovable y no renovable. Además, llegará a la comprensión de sus impactos ambientales y su relación con fenómenos como el cambio climático. Estos conceptos son necesarios para entender la importancia de los cambios actuales en el contexto energético.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Termodinámica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Dimensiones y unidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conceptos básicos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Ley cero de la termodinámica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'La primera ley de la termodinámica',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'La segunda ley de la termodinámica',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Ciclos termodinámicos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Energía no renovable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'La industria del petróleo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'La industria del gas natural',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La industria del carbón',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Eficiencia en los usos de la energía',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Energía renovable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Energía solar',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Energía eólica ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Energía hidroeléctrica',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Energía geotérmica',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Energía oceánica',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Energía de la biomasa',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Hidrógeno verde',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'Contexto mundial y colombiano - capacidad instalada de energías renovables',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Impacto ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Impactos ambientales de las fuentes de generación de energía',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Evaluación del impacto ambiental',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cambio climático',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Huella de carbono',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'El efecto invernadero y gases de efecto invernadero (GEI)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Enfoques para la determinación de la huella de carbono',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Factores de emisión para la huella de carbono corporativa',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Pasos para el cálculo de la huella de carbono de una organización',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Servicios públicos domiciliarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Generalidades',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Marco normativo',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Regulación de los servicios públicos domiciliarios',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Vigilancia de los servicios públicos domiciliarios',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Contrato de condiciones uniformes',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Mercado eléctrico mayorista (MEM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Bolsa de energía o mercado de corto plazo',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo:
              'Mercado de contratos bilaterales o mercado de mediano y largo plazo',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Regulación y disposiciones legales',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Cifras del sector eléctrico colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Generación',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Transmisión',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Usuarios regulados y no regulados',
            hash: 't_9_3',
          },
          {
            numero: '9.4',
            titulo: 'Consumo nacional por tipo de usuario',
            hash: 't_9_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_007.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Termodinámica',
      referencia:
        'Martín, A. (2015). Apuntes de los temas de termodinámica. Universidad Politécnica de Madrid.',
      tipo: 'Página web',
      link: 'https://oa.upm.es/38735/1/amd-apuntes-termodinamica-v3_0.pdf',
    },
    {
      tema: 'Hidrógeno verde',
      referencia:
        'Smink, V. (2021). Hidrógeno verde: 6  países que lideran la producción de una de las "energías del futuro" (y cuál es el único latinoamericano). BBC News.',
      tipo: 'Página web',
      link: 'https://www.bbc.com/mundo/noticias-56531777',
    },
    {
      tema: 'Hidrógeno verde',
      referencia:
        'ProColombia. (2021). Hidrógeno verde, una alternativa para el futuro de la energía en Colombia.',
      tipo: 'Página web',
      link:
        'https://investincolombia.com.co/es/articulos-y-herramientas/articulos/hidrogeno-verde-una-alternativa-para-el-futuro-de-la-energia-en-colombia',
    },
    {
      tema: 'Huella de carbono',
      referencia:
        'IDEAM, PNUD. (2015). Cartilla Inventario Nacional de Gases de Efecto Invernadero (GEI) de Colombia. Tercera comunicación nacional del cambio climático de Colombia.',
      tipo: 'Cartilla',
      link:
        'http://documentacion.ideam.gov.co/openbiblio/bvirtual/023421/cartilla_INGEI.pdf',
    },
    {
      tema: 'Regulación de los servicios públicos domiciliarios',
      referencia:
        'Resolución 156 de 2011. [Comisión de Regulación de Energía y Gas]. Por la cual se establece el Reglamento de comercialización del servicio público de energía eléctrica, como parte del Reglamento de operación. Noviembre 17 de 2011.',
      tipo: 'Documento legal',
      link:
        'https://www.enel.com.co/content/dam/enel-co/espa%C3%B1ol/2-empresas/2-2-emgesa/2-2-9-link-utiles/Creg_156_2011.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ANH',
      significado:
        'Acrónimo que es utilizado para denotar la Agencia Nacional de Hidrocarburos.',
    },
    {
      termino: 'CRA',
      significado:
        'Acrónimo que es utilizado para denotar la Comisión de Regulación de Agua Potable y Saneamiento Básico.',
    },
    {
      termino: 'DNP',
      significado:
        'Acrónimo que es utilizado para denotar el Departamento Nacional de Planeación.',
    },
    {
      termino: 'IDEAM',
      significado:
        'Acrónimo que es utilizado para denotar el Instituto de Hidrología, Meteorología y Estudios Ambientales.',
    },
    {
      termino: 'PARATEC',
      significado:
        'Acrónimo que es utilizado para denotar la página web propiedad de XM con la información de Parámetros Técnicos del Sistema Interconectado Nacional.',
    },
    {
      termino: 'PNUD',
      significado:
        'Acrónimo que es utilizado para denotar el Programa de las Naciones Unidas para el Desarrollo.',
    },
    {
      termino: 'Superservicios',
      significado:
        'Acrónimo que es utilizado para denominar a la Superintendencia de Servicios Públicos Domiciliarios.',
    },
    {
      termino: 'TGI',
      significado:
        'Acrónimo que es utilizado para denotar a la Transportadora de Gas Internacional.',
    },
    {
      termino: 'UPME',
      significado:
        'Acrónimo que es utilizado para denotar a la Unidad de Planeación Minero-Energética.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Hidrocarburos ANH (2021). Datos y estadísticas. ',
      link:
        'https://www.anh.gov.co/es/operaciones-y-regal%C3%ADas/datos-y-estadisticas/',
    },
    {
      referencia:
        '<em>Cengel, Y. & Boles, M. (2015)</em>. Termodinámica (Octava ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Corporación Ambiental Empresarial. (2015). Factores de emisión considerados en la herramienta de cálculo de la huella de carbono corporativa. Versión 4. ',
      link:
        'https://www.acueducto.com.co/wps/html/resources/2018ag/huella_carbono/informe_gei/6_anexo_3Factores_Emision_Herramienta_Inventario_GEI_EAB_2014.pdf',
    },
    {
      referencia:
        'International Institute for Sustainable Development. (2021). EIA: 7 pasos. ',
      link: 'https://www.iisd.org/learning/eia/es/eia-7-steps/',
    },
    {
      referencia:
        'International Renewable Energy Agency. (2020). Solar energy. IRENA ',
      link:
        'https://www.irena.org/Statistics/View-Data-by-Topic/Capacity-and-Generation/Technologies',
    },
    {
      referencia:
        'IPPC. (2014).  Fuentes de energía renovables y mitigación del cambio climático Informe Especial del GRUPO Intergubernamental de expertos sobre el Cambio Climático Resumen para responsables de políticas y Resumen técnico. ',
      link:
        'https://archive.ipcc.ch/pdf/special-reports/srren/srren_report_es.pdf',
    },
    {
      referencia:
        'Ley 142 de 1994. Por la cual se establece el régimen de los servicios públicos domiciliarios y se dictan otras disposiciones. Julio 11 de 1994. DO. No. 41.433. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0142_1994.html',
    },
    {
      referencia:
        'Ley 143 de 1994. Por la cual se establece el régimen para la generación, interconexión, transmisión, distribución y comercialización de electricidad en el territorio nacional, se conceden unas autorizaciones y se dictan otras disposiciones en materia energética. Julio 12 de 1994. DO. No. 41.434. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0143_1994.html',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2020). Listado de impactos ambientales específicos en el Marco del Licenciamiento Ambiental. ',
      link:
        'http://www.andi.com.co/Uploads/listado-de-impactos-ambientales-espec%C3%ADficos-en-el-marco-del-licenciamiento-ambiental.pdf',
    },
    {
      referencia:
        'Ministerio de Minas y Energía. (2018). Boletín estadístico de Minas y Energía 2018. ',
      link:
        'https://www1.upme.gov.co/PromocionSector/SeccionesInteres/Documents/Boletines/Boletin_Estadistico_2018.pdf',
    },
    {
      referencia: 'PARATEC. (2021). Parámetros técnicos del SIN. XM. ',
      link: 'https://paratec.xm.com.co/paratec/SitePages/Default.aspx',
    },
    {
      referencia:
        'Sistema de Información Minero Colombiano. (2021). Carbón-Producción. de ',
      link:
        'https://www1.upme.gov.co/simco/Cifras-Sectoriales/Paginas/carbon.aspx',
    },
    {
      referencia:
        'Superintendencia de Servicios Públicos. (2015). Superservicios para todos. Imprenta Nacional de Colombia. ',
      link: 'https://www.superservicios.gov.co/',
    },
    {
      referencia: 'TGI. (2021). ¿Cómo llega el gas a mi casa o negocio? ',
      link: 'https://www.tgi.com.co/nuestro-negocio/mercado',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2004). Una visión del mercado eléctrico colombiano. UPME ',
      link:
        'http://www.upme.gov.co/Docs/Vision_Mercado_Electrico_Colombiano.pdf',
    },
    {
      referencia:
        'Unidad de Planeación Minero-Energética. (2019). Primer balance de energía útil para Colombia. UPME ',
      link:
        'https://www1.upme.gov.co/DemandayEficiencia/Documents/Balance_energia_util/BEU-Residencial.pdf',
    },
    {
      referencia:
        'XM. (2020). Reporte integral de sostenibilidad, operación y mercado 2020. XM. ',
      link: 'https://informeanual.xm.com.co/2020/informe/pages/home.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Linda Díaz Rivera',
          cargo: 'Consultora',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Carolina Arias',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
