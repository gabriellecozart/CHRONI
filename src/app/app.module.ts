import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { ThreeDeeTouch } from '@ionic-native/three-dee-touch';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Device } from '@ionic-native/device';

import { Chroni } from './app.component';
import { AboutPage } from '../pages/about/about';
import { DownloadPage } from '../pages/download/download';
import { FileBrowser } from '../pages/fileBrowser/fileBrowser';
import { HistoryPage } from '../pages/history/history';
import { ManageReportsPage } from '../pages/manageReports/manageReports';
import { MyIGSNsPage } from '../pages/myIGSNs/myIGSNs';
import { TablePage, ImageView } from '../pages/table/table';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/popover/popover';

import { XMLUtility } from '../utilities/XMLUtility';
import { HistoryUtility } from '../utilities/HistoryUtility';
import { FileUtility } from '../utilities/FileUtility';
import { GeochronUtility } from '../utilities/GeochronUtility';
import { ReportUtility } from '../utilities/ReportUtility';

import { FileNamePipe } from '../utilities/pipes/FileName';

import { AppVersion } from '@ionic-native/app-version';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    Chroni,
    AboutPage,
    DownloadPage,
    FileBrowser,
    HistoryPage,
    ManageReportsPage,
    MyIGSNsPage,
    TablePage,
    PopoverPage,
    ImageView,
    FileNamePipe,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Chroni),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Chroni,
    AboutPage,
    DownloadPage,
    FileBrowser,
    HistoryPage,
    ManageReportsPage,
    MyIGSNsPage,
    TablePage,
    TabsPage,
    PopoverPage,
    ImageView,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    FileTransferObject,
    ThreeDeeTouch,
    ThemeableBrowser,
    ScreenOrientation,
    Device,
    AppVersion,
    XMLUtility, HistoryUtility, FileUtility, GeochronUtility, ReportUtility,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
