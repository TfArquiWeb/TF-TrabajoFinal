import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mobileQuery:MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav=[
    {name: "Usuario", route: "usuario", icon:"settings_accessibility"},
    {name: "Empresario", route: "empresario", icon:"person"},
    {name: "Contador", route: "contador", icon:"transcribe"},
    {name: "Contrato", route: "contrato", icon:"group_add"},
    {name: "Curriculum", route: "curriculum", icon:"handshake"},
    {name: "Capacitacion", route: "capacitacion", icon:"home"},
    {name: "Habilidad", route: "habilidad", icon:"radio_button_checked"},
    {name: "Experiencia", route: "experiencia", icon:"arrow_forward_ios"},
    {name: "Tipo de Pago", route: "tipopago", icon:"shopping_cart_checkout"},
    {name: "Tipo de Moneda", route: "tipomoneda", icon:"language"},

  ]

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;
  ngOnInit(): void {
  }

}
