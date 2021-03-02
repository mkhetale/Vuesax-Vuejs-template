/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
  					path => router path
  					name => router name
  					component(lazy loading) => component to load
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior () {
		return { x: 0, y: 0 }
	},
	routes: [

		{
	// =============================================================================
	// MAIN LAYOUT ROUTES
	// =============================================================================
			path: '',
			component: () => import('./layouts/main/Main.vue'),
			children: [
		// =============================================================================
		// Theme Routes
		// =============================================================================
				{
					path: '/',
					redirect: '/dashboard/analytics'
				},
				{
					path: '/dashboard/analytics',
					name: 'dashboardAnalytics',
					component: () => import('./views/DashboardAnalytics.vue'),
				},
				{
					path: '/dashboard/ecommerce',
					name: 'dashboardECommerce',
					component: () => import('./views/DashboardECommerce.vue'),
				},


		// =============================================================================
		// Application Routes
		// =============================================================================
				{
					path: '/apps/todo',
					name: 'todo',
					component: () => import('./views/apps/todo/Todo.vue')
				},
				{
					path: '/apps/chat',
					name: 'chat',
					component: () => import('./views/apps/chat/Chat.vue')
				},
				{
					path: '/apps/email',
					name: 'email',
					component: () => import('./views/apps/email/Email.vue')
				},
				{
					path: '/apps/calendar',
					name: 'calendar',
					component: () => import('./views/apps/Calendar.vue')
				},
		// =============================================================================
		// UI ELEMENTS
		// =============================================================================
				{
					path: '/ui-elements/grid/vuesax',
					name: 'gridVuesax',
					component: () => import('@/views/ui-elements/grid/vuesax/GridVuesax.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Grid'},
							{ title: 'Vuesax', active: true },
						],
						pageTitle: 'Grid'
					},
				},
				{
					path: '/ui-elements/grid/tailwind',
					name: 'gridTailwind',
					component: () => import('@/views/ui-elements/grid/tailwind/GridTailwind.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Grid'},
							{ title: 'Tailwind', active: true },
						],
						pageTitle: 'Tailwind Grid'
					},
				},
				{
					path: '/ui-elements/colors',
					name: 'colors',
					component: () => import('./views/ui-elements/colors/Colors.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Colors', active: true },
						],
						pageTitle: 'Colors'
					},
				},
				{
					path: '/ui-elements/card/basic',
					name: 'basicCards',
					component: () => import('./views/ui-elements/card/CardBasic.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Card' },
							{ title: 'Basic Cards', active: true },
						],
						pageTitle: 'Basic Cards'
					},
				},
				{
					path: '/ui-elements/card/statistics',
					name: 'statisticsCards',
					component: () => import('./views/ui-elements/card/CardStatistics.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Card' },
							{ title: 'Statistics Cards', active: true },
						],
						pageTitle: 'Statistics Card'
					},
				},
				{
					path: '/ui-elements/card/analytics',
					name: 'analyticsCards',
					component: () => import('./views/ui-elements/card/CardAnalytics.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Card' },
							{ title: 'Analytics Card', active: true },
						],
						pageTitle: 'Analytics Card'
					},
				},
				{
					path: '/ui-elements/card/card-actions',
					name: 'cardActions',
					component: () => import('./views/ui-elements/card/cardActions.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Card' },
							{ title: 'Card Actions', active: true },
						],
						pageTitle: 'Card Actions'
					},
				},
				{
					path: '/ui-elements/table',
					name: 'table',
					component: () => import('./views/ui-elements/table/Table.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Table', active: true },
						],
						pageTitle: 'Table'
					},
				},

		// =============================================================================
		// COMPONENT ROUTES
		// =============================================================================
				{
					path: '/components/alert',
					name: 'componentAlert',
					component: () => import('@/views/components/vuesax/alert/Alert.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Alert', active: true },
						],
						pageTitle: 'Alert'
					},
				},
				{
					path: '/components/avatar',
					name: 'componentAvatar',
					component: () => import('@/views/components/vuesax/avatar/Avatar.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Avatar', active: true },
						],
						pageTitle: 'Avatar'
					},
				},
				{
					path: '/components/breadcrumb',
					name: 'componentBreadcrumb',
					component: () => import('@/views/components/vuesax/breadcrumb/Breadcrumb.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Breadcrumb', active: true },
						],
						pageTitle: 'Breadcrumb'
					},
				},
				{
					path: '/components/button',
					name: 'componentButton',
					component: () => import('@/views/components/vuesax/button/Button.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Button', active: true },
						],
						pageTitle: 'Button'
					},
				},
				{
					path: '/components/chip',
					name: 'componentChip',
					component: () => import('@/views/components/vuesax/chip/Chip.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Chip', active: true },
						],
						pageTitle: 'Chip'
					},
				},
				{
					path: '/components/collapse',
					name: 'componentCollapse',
					component: () => import('@/views/components/vuesax/collapse/Collapse.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Collapse', active: true },
						],
						pageTitle: 'Collapse'
					},
				},
				{
					path: '/components/dialogs',
					name: 'componentDialog',
					component: () => import('@/views/components/vuesax/dialogs/Dialogs.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Dialogs', active: true },
						],
						pageTitle: 'Dialogs'
					},
				},
				{
					path: '/components/divider',
					name: 'componentDivider',
					component: () => import('@/views/components/vuesax/divider/Divider.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Divider', active: true },
						],
						pageTitle: 'Divider'
					},
				},
				{
					path: '/components/dropdown',
					name: 'componentDropDown',
					component: () => import('@/views/components/vuesax/dropdown/Dropdown.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Dropdown', active: true },
						],
						pageTitle: 'Dropdown'
					},
				},
				{
					path: '/components/list',
					name: 'componentList',
					component: () => import('@/views/components/vuesax/list/List.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'List', active: true },
						],
						pageTitle: 'List'
					},
				},
				{
					path: '/components/loading',
					name: 'componentLoading',
					component: () => import('@/views/components/vuesax/loading/Loading.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Loading', active: true },
						],
						pageTitle: 'Loading'
					},
				},
				{
					path: '/components/navbar',
					name: 'componentNavbar',
					component: () => import('@/views/components/vuesax/navbar/Navbar.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Navbar', active: true },
						],
						pageTitle: 'Navbar'
					},
				},
				{
					path: '/components/notifications',
					name: 'componentNotifications',
					component: () => import('@/views/components/vuesax/notifications/Notifications.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Notifications', active: true },
						],
						pageTitle: 'Notifications'
					},
				},
				{
					path: '/components/pagination',
					name: 'componentPagination',
					component: () => import('@/views/components/vuesax/pagination/Pagination.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Pagination', active: true },
						],
						pageTitle: 'Pagination'
					},
				},
				{
					path: '/components/popup',
					name: 'componentPopup',
					component: () => import('@/views/components/vuesax/popup/Popup.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Popup', active: true },
						],
						pageTitle: 'Popup'
					},
				},
				{
					path: '/components/progress',
					name: 'componentProgress',
					component: () => import('@/views/components/vuesax/progress/Progress.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Progress', active: true },
						],
						pageTitle: 'Progress'
					},
				},
				{
					path: '/components/sidebar',
					name: 'componentSidebar',
					component: () => import('@/views/components/vuesax/sidebar/Sidebar.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Sidebar', active: true },
						],
						pageTitle: 'Sidebar'
					},
				},
				{
					path: '/components/slider',
					name: 'componentSlider',
					component: () => import('@/views/components/vuesax/slider/Slider.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Slider', active: true },
						],
						pageTitle: 'Slider'
					},
				},
				{
					path: '/components/tabs',
					name: 'componentTabs',
					component: () => import('@/views/components/vuesax/tabs/Tabs.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Tabs', active: true },
						],
						pageTitle: 'Tabs'
					},
				},
				{
					path: '/components/tooltip',
					name: 'componentTooltip',
					component: () => import('@/views/components/vuesax/tooltip/Tooltip.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Tooltip', active: true },
						],
						pageTitle: 'Tooltip'
					},
				},
				{
					path: '/components/upload',
					name: 'componentUpload',
					component: () => import('@/views/components/vuesax/upload/Upload.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Components' },
							{ title: 'Upload', active: true },
						],
						pageTitle: 'Upload'
					},
				},


		// =============================================================================
		// FORMS
		// =============================================================================
			// =============================================================================
			// FORM ELEMENTS
			// =============================================================================
				{
					path: '/forms/form-elements/select',
					name: 'formElementSelect',
					component: () => import('./views/forms/form-elements/select/Select.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Select', active: true },
						],
						pageTitle: 'Select'
					},
				},
				{
					path: '/forms/form-elements/switch',
					name: 'formElementSwitch',
					component: () => import('./views/forms/form-elements/switch/Switch.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Switch', active: true },
						],
						pageTitle: 'Switch'
					},
				},
				{
					path: '/forms/form-elements/checkbox',
					name: 'formElementCheckbox',
					component: () => import('./views/forms/form-elements/checkbox/Checkbox.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Checkbox', active: true },
						],
						pageTitle: 'Checkbox'
					},
				},
				{
					path: '/forms/form-elements/radio',
					name: 'formElementRadio',
					component: () => import('./views/forms/form-elements/radio/Radio.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Radio', active: true },
						],
						pageTitle: 'Radio'
					},
				},
				{
					path: '/forms/form-elements/input',
					name: 'formElementInput',
					component: () => import('./views/forms/form-elements/input/Input.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Input', active: true },
						],
						pageTitle: 'Input'
					},
				},
				{
					path: '/forms/form-elements/number-input',
					name: 'formElementNumberInput',
					component: () => import('./views/forms/form-elements/number-input/NumberInput.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Number Input', active: true },
						],
						pageTitle: 'Number Input'
					},
				},
				{
					path: '/forms/form-elements/textarea',
					name: 'formElementTextarea',
					component: () => import('./views/forms/form-elements/textarea/Textarea.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Form Elements' },
							{ title: 'Textarea', active: true },
						],
						pageTitle: 'Textarea'
					},
				},
		// -------------------------------------------------------------------------------------------------------------------------------------------
				{
					path: '/forms/form-layouts',
					name: 'formsFormLayouts',
					component: () => import('@/views/forms/FormLayouts.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Forms' },
							{ title: 'Form Layouts', active: true },
						],
						pageTitle: 'Form Layouts'
					},
				},
				{
					path: '/forms/form-wizard',
					name: 'extraComponentFormWizard',
					component: () => import('@/views/forms/form-wizard/FormWizard.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Form Wizard', active: true },
						],
						pageTitle: 'Form Wizard'
					},
				},
				{
					path: '/forms/form-validation',
					name: 'extraComponentFormValidation',
					component: () => import('@/views/forms/form-validation/FormValidation.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Form Validation', active: true },
						],
						pageTitle: 'Form Validation'
					},
				},

		// =============================================================================
		// Pages Routes
		// =============================================================================
				{
					path: '/pages/profile',
					name: 'pageProfile',
					component: () => import('@/views/pages/Profile.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'Profile', active: true },
						],
						pageTitle: 'Profile'
					},
				},
				{
					path: '/pages/faq',
					name: 'pageFAQ',
					component: () => import('@/views/pages/Faq.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'FAQ', active: true },
						],
						pageTitle: 'FAQ'
					},
				},
				{
					path: '/pages/knowledge-base',
					name: 'pageKnowledgeBase',
					component: () => import('@/views/pages/KnowledgeBase.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'KnowledgeBase', active: true },
						],
						pageTitle: 'KnowledgeBase'
					},
				},
				{
					path: '/pages/knowledge-base/category',
					name: 'pageKnowledgeBaseCategory',
					component: () => import('@/views/pages/KnowledgeBaseCategory.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'KnowledgeBase', url: '/pages/knowledge-base' },
							{ title: 'Category', active: true },
						],
					},
				},
				{
					path: '/pages/knowledge-base/category/question',
					name: 'pageKnowledgeBaseCategoryQuestion',
					component: () => import('@/views/pages/KnowledgeBaseCategoryQuestion.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'KnowledgeBase', url: '/pages/knowledge-base' },
							{ title: 'Category', url: '/pages/knowledge-base/category' },
							{ title: 'Question', active: true },
						],
					},
				},
				{
					path: '/pages/search',
					name: 'pageSearch',
					component: () => import('@/views/pages/Search.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'Search', active: true },
						],
						pageTitle: 'Search'
					},
				},
				{
					path: '/pages/invoice',
					name: 'pageInvoice',
					component: () => import('@/views/pages/Invoice.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Pages' },
							{ title: 'Invoice', active: true },
						],
						pageTitle: 'Invoice'
					},
				},

		// =============================================================================
		// CHARTS & MAPS
		// =============================================================================
				{
					path: '/charts-and-maps/charts/apex-charts',
					name: 'extraComponentChartsApexCharts',
					component: () => import('@/views/charts-and-maps/charts/apex-charts/ApexCharts.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Charts & Maps' },
							{ title: 'Apex Charts', active: true },
						],
						pageTitle: 'Apex Charts'
					},
				},
				{
					path: '/charts-and-maps/charts/chartjs',
					name: 'extraComponentChartsChartjs',
					component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Charts & Maps' },
							{ title: 'chartjs', active: true },
						],
						pageTitle: 'chartjs'
					},
				},
				{
					path: '/charts-and-maps/charts/echarts',
					name: 'extraComponentChartsEcharts',
					component: () => import('@/views/charts-and-maps/charts/echarts/Echarts.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Charts & Maps' },
							{ title: 'echarts', active: true },
						],
						pageTitle: 'echarts'
					},
				},
				{
					path: '/charts-and-maps/maps/google-map',
					name: 'extraComponentMapsGoogleMap',
					component: () => import('@/views/charts-and-maps/maps/google-map/GoogleMap.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Charts & Maps' },
							{ title: 'Google Map', active: true },
						],
						pageTitle: 'Google Map'
					},
				},
		


		// =============================================================================
		// EXTENSIONS
		// =============================================================================
				{
					path: '/extensions/select',
					name: 'extraComponentSelect',
					component: () => import('@/views/components/extra-components/select/Select.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Select', active: true },
						],
						pageTitle: 'Select'
					},
				},
				{
					path: '/extensions/quill-editor',
					name: 'extraComponentQuillEditor',
					component: () => import('@/views/components/extra-components/quill-editor/QuillEditor.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Quill Editor', active: true },
						],
						pageTitle: 'Quill Editor'
					},
				},
				{
					path: '/extensions/drag-and-drop',
					name: 'extraComponentDragAndDrop',
					component: () => import('@/views/components/extra-components/drag-and-drop/DragAndDrop.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Drag & Drop', active: true },
						],
						pageTitle: 'Drag & Drop'
					},
				},
				{
					path: '/extensions/datepicker',
					name: 'extraComponentDatepicker',
					component: () => import('@/views/components/extra-components/datepicker/Datepicker.vue'),
					meta: {
						breadcrumb: [
							{ title: 'Home', url: '/' },
							{ title: 'Extra Components' },
							{ title: 'Datepicker', active: true },
						],
						pageTitle: 'Datepicker'
					},
				},
			],
		},
	// =============================================================================
	// FULL PAGE LAYOUTS
	// =============================================================================
		{
			path: '',
			component: () => import('@/layouts/full-page/FullPage.vue'),
			children: [
		// =============================================================================
		// PAGES
		// =============================================================================
				{
					path: '/pages/login',
					name: 'pageLogin',
					component: () => import('@/views/pages/Login.vue')
				},
				{
					path: '/pages/register',
					name: 'pageRegister',
					component: () => import('@/views/pages/Register.vue')
				},
				{
					path: '/pages/forgot-password',
					name: 'pageForgotPassword',
					component: () => import('@/views/pages/ForgotPassword.vue')
				},
				{
					path: '/pages/reset-password',
					name: 'pageResetPassword',
					component: () => import('@/views/pages/ResetPassword.vue')
				},
				{
					path: '/pages/lock-screen',
					name: 'pageLockScreen',
					component: () => import('@/views/pages/LockScreen.vue')
				},
				{
					path: '/pages/comingsoon',
					name: 'pageComingSoon',
					component: () => import('@/views/pages/ComingSoon.vue')
				},
				{
					path: '/pages/error-404',
					name: 'pageError404',
					component: () => import('@/views/pages/Error404.vue')
				},
				{
					path: '/pages/error-500',
					name: 'pageError500',
					component: () => import('@/views/pages/Error500.vue')
				},
				{
					path: '/pages/maintenance',
					name: 'pageMaintenance',
					component: () => import('@/views/pages/Maintenance.vue')
				},
			]
		},
		// Redirect to 404 page, if no match found
		{
			path: '*',
			redirect: '/pages/error-404'
		}
	],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
	if (appLoading) {
		appLoading.style.display = "none";
	}
})

export default router