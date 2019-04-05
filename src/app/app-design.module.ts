import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatSelectModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatSelectModule],
})
export class AppDesignModule { }