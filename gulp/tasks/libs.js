export const libs = () => {
  return app.gulp.src(`${app.paths.libsFolder}/**`, { encoding: false })
    .pipe(app.gulp.dest(app.paths.buildLibsFolder))
} 