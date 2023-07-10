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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
    {
      termino: '<em></em>',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
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
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
