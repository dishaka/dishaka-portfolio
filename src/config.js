module.exports = {
  email: 'dishakatarafdar.dt@gmail.com',

  socialMedia: [
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/bchiang7',
    // },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dishaka-tarafdar-877b4117b/',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/dishakatarafdar',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dishakaaa/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dishakatarafdar?lang=en',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    darkpink: '#F72E43',
    pink: '#FF5768',
    whitepink: '#FAF4F4',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
