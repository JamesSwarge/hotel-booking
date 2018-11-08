import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule, MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule } from '@angular/material';


@NgModule({
    declarations: [],
    imports: [
        BrowserAnimationsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule
    ]
})

export class MaterialModule { }