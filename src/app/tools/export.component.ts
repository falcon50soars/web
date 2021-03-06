import { ToasterService } from 'angular2-toaster';
import { Angulartics2 } from 'angulartics2';

import { Component } from '@angular/core';

import { CryptoService } from 'jslib/abstractions/crypto.service';
import { ExportService } from 'jslib/abstractions/export.service';
import { I18nService } from 'jslib/abstractions/i18n.service';
import { PlatformUtilsService } from 'jslib/abstractions/platformUtils.service';
import { UserService } from 'jslib/abstractions/user.service';

import { ExportComponent as BaseExportComponent } from 'jslib/angular/components/export.component';

@Component({
    selector: 'app-export',
    templateUrl: 'export.component.html',
})
export class ExportComponent extends BaseExportComponent {
    constructor(analytics: Angulartics2, toasterService: ToasterService,
        cryptoService: CryptoService, userService: UserService,
        i18nService: I18nService, platformUtilsService: PlatformUtilsService,
        exportService: ExportService) {
        super(analytics, toasterService, cryptoService, userService, i18nService, platformUtilsService,
            exportService, window);
    }

    protected saved() {
        super.saved();
        this.masterPassword = null;
        this.toasterService.popAsync('success', null, this.i18nService.t('exportSuccess'));
    }
}
