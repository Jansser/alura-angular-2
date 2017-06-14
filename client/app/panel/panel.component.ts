import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: [ './panel.component.css' ]
})
export class PanelComponent implements OnInit{
    @Input() title: string;
    element: ElementRef;

    constructor(element: ElementRef) {
        this.element = element;
    }

    ngOnInit() {
        this.title = this.title.length > 7 ? 
            this.title.substring(0, 7) + '...' : 
            this.title;
    }

    fadeOut(callback) {
        $(this.element.nativeElement).fadeOut(callback);
    }
}