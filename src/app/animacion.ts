import {
    trigger, state,
    transition, animate, style
} from '@angular/animations';

export const Animation = [
    trigger("leftR", [
        state("void", style({
            transform: 'translateX(-100px)',
            opacity: 0
        })),
        transition(":enter", animate("950ms", style({
            transform: 'translateX(0px) ',
            opacity: 1
        })))
    ]),
    trigger("rightL", [
        state("void", style({
            transform: 'translateX(100px)',
            opacity: 0
        })),
        transition(":enter", animate("950ms", style({
            transform: 'translateX(0px)',
            opacity: 1
        })))
    ]),
    trigger("Contenido", [
        state("void", style({
            transform: 'scale(0.9)'
        })),
        transition(":enter", animate("400ms", style({
            transform: 'scale(1)'
        })))
    ]),
    trigger("changenav", [
        state("void", style({
           background: '#0000008f'
        })),
        transition(":enter", animate("980ms", style({
            background: '#24274d'
        })))
    ])
    
];