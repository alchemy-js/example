const Alchemy = require('@alchemy-js/alchemy');
const markdown = require('@alchemy-js/transmute-markdown');
const ejs = require('@alchemy-js/transmute-ejs');
const sass = require('@alchemy-js/transmute-sass');

Alchemy({ src: './data', dest: './public' })
  .clean()
  .transmute(markdown())
  .transmute(ejs({
    use: './layouts',
    rmWhitespace: true,
  }))
  .transmute(sass({
    target: 'main',
    sass: { includePaths: ['./data/styles'] },
  }))
  .build()
  .watch(['./data', './layouts' ]);
