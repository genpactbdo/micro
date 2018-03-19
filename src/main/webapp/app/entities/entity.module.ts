import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RemitBlogModule } from './blog/blog.module';
import { RemitEntryModule } from './entry/entry.module';
import { RemitTagModule } from './tag/tag.module';
import { RemitProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        RemitBlogModule,
        RemitEntryModule,
        RemitTagModule,
        RemitProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RemitEntityModule {}
