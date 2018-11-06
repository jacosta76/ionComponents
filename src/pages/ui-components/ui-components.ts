import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheet } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { AlertPage } from '../alert/alert';
/**
 * Generated class for the UiComponentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ui-components',
  templateUrl: 'ui-components.html',
})
export class UiComponentsPage {
  uiComponents: Array<{title:string, note:string, icon:string, component:any, path:string}>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.uiComponents = [
        {
          title: 'Action Sheet', 
          note: 'Se desliza hacia arriba, desde la parte inferior de la pantalla y muestra un conjunto de opciones, con la habilidad de aceptar o cancelar una acción.',
          icon: 'flask',
          component: ActionSheetPage,
          path: 'action-sheets'
        },
        {
          title: 'Alert',
          note : 'Alertas son una magnifica forma de ofrecer al usuario la posibilidad de escoger una acción o una lista de ellas.',
          icon : 'flask',
          component : AlertPage,
          path: 'alert'
        }
      ];

  }

  uiComponentTapped(event, uiComponent) {
    this.navCtrl.push(uiComponent.component, {info:{note: uiComponent.note, path: uiComponent.path}});
  }

}
