import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

export const MATERIAL_DIRECTIVES = [
    ...[
        MdAnchor,
        MdButton,
        MdIcon,
        MdCheckbox
    ],
    ...MD_INPUT_DIRECTIVES,
    ...MD_CARD_DIRECTIVES
];

export const MATERIAL_PROVIDERS = [
    MdIconRegistry
];
