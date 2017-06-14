import { Component, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'abutton',
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input() name: string = 'OK';
    @Input() style: string = 'btn-default';
    @Input() type: string = 'button';
    @Input() disabled: boolean = false;
    @Input() confirm: boolean = false;

    @Output() action = new EventEmitter();

    execute(photo) {
        if(this.confirm) {
            console.log('here');
            if(confirm('Deseja Excluir?')) {
                this.action.emit(null);
            }

            return;
        }

        this.action.emit(null);
    }

  
}