import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
components,
directives,
theme: {
defaultTheme: 'dark',
themes: {
light: {
colors: {
primary: '#1867C0', // Основной цвет
secondary: '#5CBBF6', // Второстепенный цвет
},
},
// dark: {
// colors: {
// primary: '#42b983', // Основной цвет для темной темы
// background: '#1e1e1e', // Цвет фона для темной темы
// },
// },
},
},
})