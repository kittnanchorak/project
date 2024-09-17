import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.page.html',
})
export class DrinksPage {

  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();  // กลับไปยังหน้าก่อนหน้า
  }

  goNdwdext() {
    this.navCtrl.navigateForward('/food');  // ไปยังหน้าต่อไป
  }
  
  
}