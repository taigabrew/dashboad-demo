module.exports = {
  theme: {
    extend: {
      inset: {
        '1/2': '50%',
        full: '100%'
      },
      boxShadow: {
        shade: '0 3px 10px rgba(0,0,0,.03), 0 1px 3px rgba(0,0,0,.02)',
        focus: `0 0 0 3px ${theme => theme('colors.blue.300')}`
      },
      transitionProperty: {
        bg: 'background-color',
        transform: 'transform',
        text: 'color',
        shadow: 'box-shadow',
        colors: ['color', 'background-color', 'border-color', 'shadow'],
        cheap: ['opacity', 'transform']
      },
      transitionDuration: {
        '250': '250ms',
        '325': '325ms',
        '500': '500ms'
      },
      transitionTimingFunction: {
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)'
      }
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('tailwindcss-transitions')()]
}
