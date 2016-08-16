module.exports = ( {
  title: 'Tara Gonzalez',
  meta: [
    { name: 'description', content: 'Works of Tara Maria Gonzalez' },
    { name: 'author', content: 'Rafe Lepre' }
  ],
  links: [
    { rel: 'apple-touch-icon', href: '' },
    { property: 'og:image', content: '' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '' }
  ],
  scripts: [
    'app.js',
    'https://use.typekit.net/fzs6ewt.js',
    () => { try { Typekit.load( { async: true } ); } catch ( e ) {} }
  ]
} );
