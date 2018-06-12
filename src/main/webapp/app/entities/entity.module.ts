import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterAndIonicBlogModule } from './blog/blog.module';
import { JHipsterAndIonicEntryModule } from './entry/entry.module';
import { JHipsterAndIonicTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JHipsterAndIonicBlogModule,
        JHipsterAndIonicEntryModule,
        JHipsterAndIonicTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterAndIonicEntityModule {}
