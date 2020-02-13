import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
const components=[MatButtonModule, 
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }
