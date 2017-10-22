import { NgModule } from '@angular/core';
import { MatCheckboxModule, MatIconModule, MatInputModule, MatIconRegistry } from '@angular/material';


@NgModule({
    imports: [MatInputModule, MatCheckboxModule, MatIconModule],
    exports: [MatInputModule, MatCheckboxModule, MatIconModule],
    providers: [
        MatIconRegistry
    ]
})
export class TableMaterialModule {
}