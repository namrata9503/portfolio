import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Directive({
  selector: '[appResposiveLayout]'
})
export class ResposiveLayoutDirective {

  constructor(private breakpointObserver: BreakpointObserver,
              private element: ElementRef) { 

  this.breakpointObserver
  .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
  .subscribe({
    next: (result: any) => {
      for(let breakpoint of Object.keys(result.breakpoints)) {
        if(result.breakpoints[breakpoint]) {
          if(breakpoint === Breakpoints.HandsetPortrait) {
            this.element.nativeElement.classList.remove('largeScreen');
          }
          if(breakpoint === Breakpoints.WebLandscape) {
            this.element.nativeElement.classList.add('largeScreen');
          }
        }
      }
    }
  })
}
}
