import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective implements OnInit {
  @Input('appHighlighted')
  color = '';
  active = true;

  constructor(private elt: ElementRef) { }

  ngOnInit(): void {
    console.log(this.color);
    this.setColor();
  }

  @HostListener('click')
  toggle() {
    this.active = !this.active;
    this.setColor();
  }

  private setColor() {
    this.elt.nativeElement.style.backgroundColor = this.active ?
        this.color || 'yellow' :
        'initial';
  }
}
