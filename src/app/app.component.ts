import { Component, Inject } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  template: `<div class="jumbotron">
  {{value}}
</div>`,
  styleUrls: ['./app.component.css'],
  providers: [AppServiceService]
})
export class AppComponent {
  value: string = '';
  constructor(private _service:AppServiceService) {
    
  }
  ngOnInit() : void{
    this.value = this._service.getApp();
  }
}
