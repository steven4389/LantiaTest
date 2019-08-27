    
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: any, uri?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(uri+value);
  }

}