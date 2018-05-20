/**
 * INSPINIA - Responsive Admin Theme
 *
 */
function config($translateProvider) {

    $translateProvider
        .translations('en', {

            // Define all menu elements
            DASHBOARD: 'Dashboard',
            GRAPHS: 'Graphs',
            MAILBOX: 'Mailbox',
            CREATE: 'Create',
            SEARCH: 'Search',
            USERS: 'Users',
            PROJECTS: 'Projects',
            TEAMS: 'Teams',
            PROJECT: 'Project',
            TEAM: 'Team',
            LANGUAGE: 'Language',
            LOGOUT: 'Log out',
            HOME: 'Home',
            L_Status: 'Latest Status',
            STATUS: 'Status',
            User_Profile: 'User Profile',
            Team_Profile: 'Team Profile',
            Project_Profile: 'Project Profile',
            DETAILS: 'Details',

            WIDGETS: 'Widgets',
            METRICS: 'Metrics',
            FORMS: 'Forms',
            APPVIEWS: 'App views',
            OTHERPAGES: 'Other pages',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Miscellaneous',
            GRIDOPTIONS: 'Grid options',
            TABLES: 'Tables',
            COMMERCE: 'E-commerce',
            GALLERY: 'Gallery',
            MENULEVELS: 'Menu levels',
            ANIMATIONS: 'Animations',
            LANDING: 'Landing page',
            LAYOUTS: 'Layouts',

            // Define some custom text
            WELCOME: 'Welcome, ',
            MESSAGEINFO: 'This one is too lazy to leave any comments',
            DEMO: 'Internationalization (sometimes shortened to \"I18N , meaning \"I - eighteen letters -N\") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .'

        })
        .translations('cn', {

            // Define all menu elements
            DASHBOARD: '数据板',
            GRAPHS: '图表',
            MAILBOX: '邮箱',
            CREATE: '创建',
            SEARCH: '搜索',
            USERS: '用户列表',
            PROJECTS: '项目列表',
            TEAMS: '团队列表',
            PROJECT: '项目',
            TEAM: '团队',
            LANGUAGE: '语言',
            LOGOUT: '登出',
            HOME: '主页',
            L_Status: '最新状态',
            STATUS: '状态',
            User_Profile: '用户档案',
            Team_Profile: '团队档案',
            Project_Profile: '项目档案',
            DETAILS: '详情',



            WIDGETS: 'Widgets',
            METRICS: 'Métrica',
            FORMS: 'Formas',
            APPVIEWS: 'Vistas app',
            OTHERPAGES: 'Otras páginas',
            UIELEMENTS: 'UI elements',
            MISCELLANEOUS: 'Misceláneo',
            GRIDOPTIONS: 'Cuadrícula',
            TABLES: 'Tablas',
            COMMERCE: 'E-comercio',
            GALLERY: 'Galería',
            MENULEVELS: 'Niveles de menú',
            ANIMATIONS: 'Animaciones',
            LANDING: 'Página de destino',
            LAYOUTS: 'Esquemas',

            // Define some custom text
            WELCOME: '欢迎回来, ',
            MESSAGEINFO: '这个人很懒，什么都没有留下。',
            DEMO: 'Internacionalización (a veces abreviado como \"I18N, que significa\" I - dieciocho letras N \") es el proceso de planificación e implementación de productos y servicios de manera que se pueden adaptar fácilmente a las lenguas y culturas locales específicas, un proceso llamado localización El proceso de internacionalización. a veces se llama la traducción o la habilitación de localización.'
        });

    $translateProvider.preferredLanguage('en');

}

angular
    .module('capweb')
    .config(config)