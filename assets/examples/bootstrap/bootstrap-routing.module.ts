import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';
import { BootstrapTestComponent } from './bootstrap-test.component';

const routes: Route[] = [
  {
    path: 'bootstrap-test.component',
    component: BootstrapTestComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class BootstrapRoutingModule {}
