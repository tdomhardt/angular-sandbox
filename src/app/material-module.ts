import { MatButtonModule, MatCheckboxModule, MatCardModule, MatIconModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule, 
        MatCardModule, 
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatDialogModule,
        MatToolbarModule,
        MatGridListModule
    ]
})

export class MaterialModules {}