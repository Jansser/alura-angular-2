import { Component, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit {
    @Input() title: string = 'Tem certeza?';
    @Input() private content: string;
    @Output() confirm = new EventEmitter();

    constructor(private _element: ElementRef) {
        this._element = _element;
    }

    show() {
        $(this._element.nativeElement).dialog('open');
    }

    ngAfterViewInit() {
        $(this._element.nativeElement).dialog({
            title: this.title,
            autoOpen: false,
            resizable: false,
            modal: true,
            buttons: {
                Cancelar: () => {
                    $(this._element.nativeElement).dialog('close');
                },

                Confirmar: () => {
                    $(this._element.nativeElement).dialog('close');
                    this.confirm.emit(null);
                }
            }
        });       
    }
}