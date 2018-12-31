import { NgModule } from '@angular/core';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';
import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapTestComponent } from './bootstrap-test.component';

@NgModule({
  declarations: [
    BootstrapTestComponent,
  ],
  imports: [ NbLayoutModule, NbCardModule, BootstrapRoutingModule ],
})
export class BootstrapModule {}
