import { Gulpclass, Task, SequenceTask } from 'gulpclass';
import * as path from 'path';
import * as gulp from 'gulp';
import * as gutil from 'gulp-util';
import * as watch from 'gulp-watch';

const concatFilenames = require('gulp-concat-filenames');
const recurseFolders = require('gulp-recursive-folder');

// Gulpclass example: https://github.com/molecuel/mlcl_core/blob/master/tasks/gulpclass.ts

@Gulpclass()
export class Gulpfile {

  public sourceRoot: string = path.join(process.cwd(), 'src');
  private excludeFolders = ['config'];

  private generateIndexFor(folder: string) {
      if (this.excludeFolders.indexOf(folder) > -1) return gutil.noop();

      gutil.log(gutil.colors.cyan(`👾  Building index.ts for ${gutil.colors.yellow(path.relative(path.dirname(this.sourceRoot), folder))}/`));

      return gulp
          .src([
            path.join(folder, '**/index.ts'),
            path.join(folder, '*.ts'),
            '!**/config/**/*',
            '!**/*.d.ts',
            `!${folder}/index.ts`
          ])
          .pipe(concatFilenames('index.ts', { template: (file: string) =>
            `export * from './${path.relative(folder, file).replace('.ts', '')}';` }))
          .pipe(gulp.dest(folder))
          .on('end', () => gutil.log(gutil.colors.green('✅  done!')));
  }

  @Task()
  indexes(file?: any) {
    const root = file.path ? file.path : this.sourceRoot;
    console.info(`👾 File modified in ${root}`);

    return recurseFolders({
        base: root,
        exclude: this.excludeFolders
    } , (folder: any) => {
      return this.generateIndexFor(folder.path);
    } )();
  }

  @SequenceTask('watch') // this special annotation using 'run-sequence' module to run returned tasks in sequence
  watch(): any {
    return watch(
      [this.sourceRoot + '/**/*.ts', '!**/index.ts'],
      { ignoreInitial: true, read: false } as any, (file: any) => {
        this.generateIndexFor(path.dirname(file.path));
      }
    );
  }

  @SequenceTask('default')
  default() { // because this task has 'default' name it will be run as default gulp task
    return ['indexes', 'watch'];
  }

}
