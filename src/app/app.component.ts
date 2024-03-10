import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skogstjanst';
  desc =
    ' Lehult Skogstjänst är ett företag som under många år har utfört olika skogstjänster. Vi utför idag även det mesta inom gräv- och anläggningsarbete. Vår personal har cirka 30 års erfarenhet av både skogsarbete och entreprenadtjänster.';
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: this.desc },
      {
        name: 'keywords',
        content:
          ' Vatten och avlopp, Dammar, Dikning, Skogsvägar, Tomtplantering, Trädgårdsmurar, Husgrunder, Dränering, gräv, grävarbete, vittsjö, bjärnum, anläggning',
      },
    ]);
  }
}
