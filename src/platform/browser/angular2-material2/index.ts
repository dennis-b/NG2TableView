import {MdButton, MdAnchor} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';

/*
 * we are grouping the module so we only need to manage the imports in one location
 */

export const MATERIAL_PIPES = [];

export const MATERIAL_DIRECTIVES = [
    ...MD_SIDENAV_DIRECTIVES,
    ...[
        MdAnchor,
        MdButton,
        MdIcon,
        MdCheckbox
    ],
    ...MD_TABS_DIRECTIVES,
    ...MD_INPUT_DIRECTIVES,
    ...MD_CARD_DIRECTIVES
];

export const MATERIAL_PROVIDERS = [
    MdIconRegistry
];
