import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  headerItems = ["Hem","Om oss","Tjänster","Tidigare projekt","Kontakt"]
 
  routeRecord:Record<string,string> = {
    "Hem":"",
    "Om oss":"om-oss",
    "Tjänster":"tjanster",
    "Tidigare projekt":"tidigare-projekt",
    "Kontakt":"kontakt",
  }

  reroute(item:any):void{
    console.log(this.routeRecord[item])
    this.router.navigate([`${this.routeRecord[item]}`], { relativeTo: this.route });

  }

}
