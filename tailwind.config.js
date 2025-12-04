module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'radial': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '15vh': '15vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '12vh': '12vh',
        '14vh': '14vh',
        '16vh': '16vh',
      }
    }
  }
}
