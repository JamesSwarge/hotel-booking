import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule, MatButtonModule, MatCardModule } from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule
    ]
})

export class MaterialModule { }