gulp        = require 'gulp'
stylus      = require 'gulp-stylus'
minifyCSS   = require 'gulp-minify-css'
jade        = require 'gulp-jade'
htmlmin     = require 'gulp-htmlmin'
prefix      = require 'gulp-autoprefixer'
coffee      = require 'gulp-coffee'
uglify      = require 'gulp-uglify'
sourcemaps  = require 'gulp-sourcemaps'
concat      = require 'gulp-concat'
svgmin      = require 'gulp-svgmin'
svg2png     = require 'gulp-svg2png'
prettify    = require 'gulp-html-prettify'
cssbeautify = require 'gulp-cssbeautify'
ghpages     = require 'gh-pages'
path        = require 'path'
w3cjs       = require 'gulp-w3cjs'
esformatter = require 'gulp-esformatter'
coffeelint  = require 'gulp-coffeelint'
iconfont    = require 'gulp-iconfont'

imagemin    = require 'gulp-imagemin'
pngcrush    = require 'imagemin-pngcrush'

dev_path =
  jade:       'developer/jade/**.jade'
  css:        'developer/css/**.css'
  css_tmp:    'developer/css/'
  images:     'developer/images/**'
  js:         'developer/js/**.js'
  coffee:     'developer/coffee/**.coffee'
  stylus:     'developer/**/**.styl'
  fonts:      'developer/fonts/**'
  fonts_tmp:  'developer/fonts/'
  svg:        'developer/svg/**/*.svg'
  svg_fonts:  'developer/svg-font/*.svg'

prod_path =
  html:       'production/'
  js:         'production/js/'
  css:        'production/css/'
  fonts:      'production/fonts/'
  svg:        'production/img/register/'
  images:     'production/img/register/'
  svg_images: 'production/img/register/'


gulp.task('svgfont', ()->
  gulp.src(dev_path.svg_fonts)
    .pipe(iconfont(
      fontName: 'icon'
      appendCodepoints: true
      ))
    .pipe(gulp.dest(dev_path.fonts_tmp))
)

gulp.task('fonts', ['svgfont'], ()->
  return gulp.src(dev_path.fonts)
    .pipe(gulp.dest(prod_path.fonts))
)

gulp.task('svg', ()->
  return gulp.src(dev_path.svg)
    # .pipe(svgmin())
    .pipe(gulp.dest(prod_path.svg))
)

gulp.task('images', ()->
  return gulp.src(dev_path.images)
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
      }))
    .pipe(gulp.dest(prod_path.images))
)

gulp.task('svg2png', ()->
  return gulp.src(dev_path.svg)
    .pipe(svg2png())
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
      }))
    .pipe(gulp.dest(prod_path.svg_images))
)

gulp.task('html', ()->
  return gulp.src(dev_path.jade)
    .pipe(jade())
    .pipe(prettify({indent_char: ' ', indent_size: 4}))
    .pipe(w3cjs())
    # .pipe(htmlmin({collapseWhitespace: false}))
    .pipe(gulp.dest(prod_path.html))
)

gulp.task('stylus', ()->
  return gulp.src(dev_path.stylus)
    .pipe(stylus())
    .pipe(concat('stylus.css'))
    .pipe(gulp.dest(dev_path.css_tmp))
)

gulp.task('css', ['stylus'], ()->
  return gulp.src(dev_path.css)
    .pipe(prefix())
    # .pipe(sourcemaps.init())
    # .pipe(minifyCSS({removeEmpty:true}))
    .pipe(cssbeautify())
    .pipe(concat('styles.css'))
    # .pipe(sourcemaps.write())
    .pipe(gulp.dest(prod_path.css))
)

gulp.task('coffee', ()->
  return gulp.src(dev_path.coffee)
    .pipe(coffeelint())
    .pipe(coffeelint.reporter())
    .pipe(sourcemaps.init())
    .pipe(coffee({
      bare: true
      }))
    .pipe(uglify())
    # .pipe(esformatter({indent: {value: '  '}}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(prod_path.js))
)

gulp.task('js', ()->
  return gulp.src(dev_path.js)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    # .pipe(esformatter({indent: {value: '  '}}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(prod_path.js))
)


gulp.task('deploy', ()->
  ghpages.publish(path.join(__dirname, 'production'), {
      repo: 'git@github.com:SilentImp/Repetit.ru.git',
      branch: 'gh-pages'
    }, (err)->
      if err
        console.log 'Error: ', err
      else
        console.log 'Published!'
  )
)


gulp.task('watch', ()->
  gulp.watch dev_path.svg,        ['svg', 'svg2png']
  gulp.watch dev_path.fonts,      ['fonts']
  gulp.watch dev_path.svg_fonts,  ['fonts']
  gulp.watch dev_path.jade,       ['html']
  gulp.watch dev_path.stylus,     ['css']
  gulp.watch dev_path.css,        ['css']
  gulp.watch dev_path.coffee,     ['coffee']
  gulp.watch dev_path.js,         ['js']
  gulp.watch dev_path.images,     ['images']
)

gulp.task 'default', ['dev', 'watch']
gulp.task 'dev', ['svg', 'svg2png', 'fonts', 'html', 'css', 'coffee', 'js', 'images']

