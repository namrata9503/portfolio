import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ResposiveLayoutDirective } from '../../directive/resposive-layout.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit, OnInit {
  @ViewChild(ResposiveLayoutDirective) dir : ResposiveLayoutDirective | any;
  @Input('ResposiveLayoutDirective') message: any;

  @ViewChild("textElement") textElement!: ElementRef;
  @ViewChild("blinkElement") blinkElement!: ElementRef;

  @Input() wordArray: string[] = [
    "Front End Developer",
  ];
  @Input() textColor = "white";
  @Input() fontSize = "3rem";
  @Input() blinkWidth = "5px";
  @Input() typingSpeedMilliseconds = 300;

  private i = 0;
  constructor(private renderer: Renderer2){}

    ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }
  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "font-size",
      this.fontSize
    );
    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.2em");

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-color",
      this.textColor
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.i].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
       // this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

}
