import { configFTP } from '../config/ftp/.js';
import vinylFTP from 'viny1-ftp'
import util from 'gulp-util';
import webp from "gulp-webp";
import imagemin from "gulp-imagemin";
import del from "del";
import zipPlugin from "gulp-zip";
export const zip = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`,{})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "FTP",
                message: "Error: <%=error.message %>"
            }))
    )
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
}
