import { ViewController, NavController, ModalController } from "ionic-angular";
import { Component } from "@angular/core";
import { ThemeableBrowserOptions, ThemeableBrowser, ThemeableBrowserObject } from "@ionic-native/themeable-browser";
import { AboutPage } from "../about/about";
import { StatusBar } from "@ionic-native/status-bar";
import { LoginPage } from "../login/login";

@Component({
    templateUrl: 'popover.html'
  })
  export class PopoverPage {
    constructor(public viewCtrl: ViewController, private navCtrl: NavController, private iab: ThemeableBrowser, private statusBar: StatusBar, private modalCtrl: ModalController) {}
  
    helpURL: string = 'http://cirdles.org/projects/chroni/#Procedures';
    browser: ThemeableBrowserObject;
    hasOverlay: boolean = false;

    close() {
      this.viewCtrl.dismiss();
    }

    openAbout() {
      this.navCtrl.push(AboutPage);
      this.close();
    }

    openHelp() {
      let options: ThemeableBrowserOptions = {
        location: 'no',
        toolbarposition: 'top',
        toolbar: {
          height: 40,
          color: '#D26D56'
        },
        title: {
          color: '#3F3F3F',
          showPageTitle: true
        },
        backButton: {
          image: 'back',
          imagePressed: 'back_pressed',
          align: 'right',
          event: 'backPressed'
        },
        forwardButton: {
          image: 'forward',
          imagePressed: 'forward_pressed',
          align: 'right',
          event: 'forwardPressed'
        },
        closeButton: {
          wwwImage: 'assets/icon/browser/close-icon.png',
          wwwImagePressed: 'assets/icon/browser/close-icon-pressed.png',
          wwwImageDensity: 13,
          align: 'left',
          event: 'closePressed'
        },
        backButtonCanClose: false
      };
      this.browser = this.iab.create(this.helpURL, '_blank', options);
    }

    openLoginPage() {
      let modal = this.modalCtrl.create(LoginPage);
      modal.present();
      this.close();
    }
  }