import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {HollowDirective} from './components/button/hollow/hollow.directive';
import {ButtonGroupComponent} from './components/button/button-group/button-group.component';
import {MenuComponent} from './components/menu/menu.component';
import {MenuItemComponent} from './components/menu/menu-item/menu-item.component';
import {SubMenuComponent} from './components/menu/sub-menu/sub-menu.component';
import {MenuItemGroupComponent} from './components/menu/menu-item-group/menu-item-group.component';
import {MenuListComponent} from './components/menu/menu-list/menu-list.component';
import {InlineMenuComponent} from './components/menu/inline-menu/inline-menu.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RowComponent} from './components/grid/row/row.component';
import {ColComponent} from './components/grid/col/col.component';
import {TagComponent} from './components/tag/tag.component';
import {IconComponent} from './components/icon/icon.component';
import {routing} from "../routes/routes";
import {AtDemoButtonComponent} from './showcase/at-demo-button/at-demo-button.component';
import {AtDemoComponentsComponent} from './showcase/at-demo-components/at-demo-components.component';
import {CommonModule} from "@angular/common";
import {AtDemoDocSectionComponent} from './showcase/at-demo-doc-section/at-demo-doc-section.component';
import {AtDemoLayoutComponent} from './showcase/at-demo-layout/at-demo-layout.component';
import {AtDemoTagComponent} from './showcase/at-demo-tag/at-demo-tag.component';
import {DemoBasicTagComponent} from './showcase/at-demo-tag/demo-basic-tag/demo-basic-tag.component';
import {DemoColorTagComponent} from './showcase/at-demo-tag/demo-color-tag/demo-color-tag.component';
import {AtDemoMenuComponent}              from './showcase/at-demo-menu/at-demo-menu.component';
import {DemoTopMenuComponent}             from './showcase/at-demo-menu/demo-top-menu/demo-top-menu.component';
import {DemoVerticalMenuComponent}        from './showcase/at-demo-menu/demo-vertical-menu/demo-vertical-menu.component';
import {DemoInlineMenuComponent}          from './showcase/at-demo-menu/demo-inline-menu/demo-inline-menu.component';
import {AtDemoCheckboxComponent}          from './showcase/at-demo-checkbox/at-demo-checkbox.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DemoBasicCheckboxComponent}       from './showcase/at-demo-checkbox/demo-basic-checkbox/demo-basic-checkbox.component';
import {DemoGroupCheckboxComponent}       from './showcase/at-demo-checkbox/demo-group-checkbox/demo-group-checkbox.component';
import {AtCheckboxGroupComponent}         from './components/checkbox/checkbox-group/at-checkbox-group.component';
import {InputComponent}                   from './components/input/input.component';
import {AtDemoInputComponent}             from './showcase/at-demo-input/at-demo-input.component';
import {DemoBasicInputComponent}          from "./showcase/at-demo-input/demo-basic-input/demo-basic-input.component";
import {DemoPendInputComponent}           from './showcase/at-demo-input/demo-pend-input/demo-pend-input.component';
import {DemoIconInputComponent}           from './showcase/at-demo-input/demo-icon-input/demo-icon-input.component';
import {DemoStatusInputComponent} from './showcase/at-demo-input/demo-status-input/demo-status-input.component';
import {DemoSizeInputComponent} from './showcase/at-demo-input/demo-size-input/demo-size-input.component';
import {AtDemoNumberInputComponent} from './showcase/at-demo-number-input/at-demo-number-input.component';
import {DemoBasicNumberInputComponent} from './showcase/at-demo-number-input/demo-basic-number-input/demo-basic-number-input.component';
import {DemoSizeNumberInputComponent} from './showcase/at-demo-number-input/demo-size-number-input/demo-size-number-input.component';
import {DemoStepNumberInputComponent} from './showcase/at-demo-number-input/demo-step-number-input/demo-step-number-input.component';
import {AtDemoRadioComponent} from './showcase/at-demo-radio/at-demo-radio.component';
import {DemoBasicRadioComponent} from './showcase/at-demo-radio/demo-basic-radio/demo-basic-radio.component';
import {RadioComponent} from "./components/radio/radio.component";
import {RadioGroupComponent} from "./components/radio/radio-group/radio-group.component";
import {RadioButtonComponent} from './components/radio/radio-button/radio-button.component';
import {DemoButtonRadioComponent} from './showcase/at-demo-radio/demo-button-radio/demo-button-radio.component';
import {DemoDisableRadioComponent} from './showcase/at-demo-radio/demo-disable-radio/demo-disable-radio.component';
import {DemoSizeRadioComponent} from './showcase/at-demo-radio/demo-size-radio/demo-size-radio.component';
import {DemoColorRadioComponent} from './showcase/at-demo-radio/demo-color-radio/demo-color-radio.component';
import {AtDemoSelectComponent} from './showcase/at-demo-select/at-demo-select.component';
import {DemoSelectBasicComponent} from './showcase/at-demo-select/demo-select-basic/demo-select-basic.component';
import {DemoSelectMultipleComponent} from './showcase/at-demo-select/demo-select-multiple/demo-select-multiple.component';
import {DemoSelectSizeComponent} from './showcase/at-demo-select/demo-select-size/demo-select-size.component';
import {DemoSelectClearComponent} from './showcase/at-demo-select/demo-select-clear/demo-select-clear.component';
import {DemoInputSelectComponent} from './showcase/at-demo-select/demo-input-select/demo-input-select.component';
import {DemoSearchSelectComponent} from './showcase/at-demo-select/demo-search-select/demo-search-select.component';
import {SwitchComponent} from './components/switch/switch.component';
import {AtDemoSwitchComponent} from './showcase/at-demo-switch/at-demo-switch.component';
import {SwicthBasicComponent} from './showcase/at-demo-switch/swicth-basic/swicth-basic.component';
import {SliderComponent} from './components/slider/slider.component';
import {AtDemoSliderComponent} from './showcase/at-demo-slider/at-demo-slider.component';
import {DemoBasicSliderComponent} from './showcase/at-demo-slider/demo-basic-slider/demo-basic-slider.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {AtDemoTextareaComponent} from './showcase/at-demo-textarea/at-demo-textarea.component';
import {DemoBasicTextareaComponent} from './showcase/at-demo-textarea/demo-basic-textarea/demo-basic-textarea.component';
import {IntroComponent} from './showcase/intro/intro.component';
import {InstallComponent} from './showcase/install/install.component';
import {UpdateLogComponent} from './showcase/update-log/update-log.component';
import {StartupComponent} from './showcase/startup/startup.component';
import {ConnectComponent} from './showcase/connect/connect.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {AtDemoDropdownComponent} from './showcase/at-demo-dropdown/at-demo-dropdown.component';
import {BasicDemoDropdownComponent} from './showcase/at-demo-dropdown/basic-demo-dropdown/basic-demo-dropdown.component';
import {AtDemoPagenationComponent} from './showcase/at-demo-pagenation/at-demo-pagenation.component';
import {DropdownMenuItemComponent} from './components/menu/dropdown-menu-item/dropdown-menu-item.component';
import {DropMenuListComponent} from './components/menu/drop-menu-list/drop-menu-list.component';
import {DemoPlaceDropdownComponent} from './showcase/at-demo-dropdown/demo-place-dropdown/demo-place-dropdown.component';
import {AtDemoNotificationComponent} from './showcase/at-demo-notification/at-demo-notification.component';
import {AtDemoAlertComponent} from './showcase/at-demo-alert/at-demo-alert.component';
import {AtDemoBadgeComponent} from './showcase/at-demo-badge/at-demo-badge.component';
import {AtDemoLoadingbarComponent} from './showcase/at-demo-loadingbar/at-demo-loadingbar.component';
import {AtDemoModalComponent} from './showcase/at-demo-modal/at-demo-modal.component';
import {AtDemoMessageComponent} from './showcase/at-demo-message/at-demo-message.component';
import {AtDemoPopoverComponent} from './showcase/at-demo-popover/at-demo-popover.component';
import {AtDemoProgressComponent} from './showcase/at-demo-progress/at-demo-progress.component';
import {AtDemoTooltipComponent} from './showcase/at-demo-tooltip/at-demo-tooltip.component';
import {AtDemoTableComponent} from './showcase/at-demo-table/at-demo-table.component';
import {DemoBasicNotificationComponent} from './showcase/at-demo-notification/demo-basic-notification/demo-basic-notification.component';
import {DemoAlertBasicComponent} from './showcase/at-demo-alert/demo-alert-basic/demo-alert-basic.component';
import {DemoBasicBadgeComponent} from './showcase/at-demo-badge/demo-basic-badge/demo-basic-badge.component';
import {DemoCombineBadgeComponent} from './showcase/at-demo-badge/demo-combine-badge/demo-combine-badge.component';
import {DemoDynamicBadgeComponent} from './showcase/at-demo-badge/demo-dynamic-badge/demo-dynamic-badge.component';
import {DemoBasicModalComponent} from './showcase/at-demo-modal/demo-basic-modal/demo-basic-modal.component';
import {DemoServiceModalComponent} from './showcase/at-demo-modal/demo-service-modal/demo-service-modal.component';
import {DemoCustomModalComponent} from './showcase/at-demo-modal/demo-custom-modal/demo-custom-modal.component';
import {DemoPositionModalComponent} from './showcase/at-demo-modal/demo-position-modal/demo-position-modal.component';
import {DemoBasicTableComponent} from './showcase/at-demo-table/demo-basic-table/demo-basic-table.component';
import {DemoBasicPageComponent} from './showcase/at-demo-pagenation/demo-basic-page/demo-basic-page.component';
import {DemoSizePageComponent} from './showcase/at-demo-pagenation/demo-size-page/demo-size-page.component';
import {DemoSimplePageComponent} from './showcase/at-demo-pagenation/demo-simple-page/demo-simple-page.component';
import {DemoFullPageComponent} from './showcase/at-demo-pagenation/demo-full-page/demo-full-page.component';
import {DemoPageTableComponent} from './showcase/at-demo-table/demo-page-table/demo-page-table.component';
import {DemoSizeTableComponent} from './showcase/at-demo-table/demo-size-table/demo-size-table.component';
import {AtDemoBreadcrumbComponent} from './showcase/at-demo-breadcrumb/at-demo-breadcrumb.component';
import {DemoBasicBreadcrumbComponent} from './showcase/at-demo-breadcrumb/demo-basic-breadcrumb/demo-basic-breadcrumb.component';
import {DemoSeparateBreadcrumbComponent} from './showcase/at-demo-breadcrumb/demo-separate-breadcrumb/demo-separate-breadcrumb.component';
import {DemoBasicMessageComponent} from './showcase/at-demo-message/demo-basic-message/demo-basic-message.component';
import {DemoLoadingMessageComponent} from './showcase/at-demo-message/demo-loading-message/demo-loading-message.component';
import {DemoBasicPopoverComponent} from './showcase/at-demo-popover/demo-basic-popover/demo-basic-popover.component';
import {DemoContentPopoverComponent} from './showcase/at-demo-popover/demo-content-popover/demo-content-popover.component';
import {DemoPositionPopoverComponent} from './showcase/at-demo-popover/demo-position-popover/demo-position-popover.component';
import {DemoBasicProgressComponent} from './showcase/at-demo-progress/demo-basic-progress/demo-basic-progress.component';
import {DemoStrokeProgressComponent} from './showcase/at-demo-progress/demo-stroke-progress/demo-stroke-progress.component';
import {DemoStatusProgressComponent} from './showcase/at-demo-progress/demo-status-progress/demo-status-progress.component';
import {DemoBasicTooltipComponent} from './showcase/at-demo-tooltip/demo-basic-tooltip/demo-basic-tooltip.component';
import {DemoPositionTooltipComponent} from './showcase/at-demo-tooltip/demo-position-tooltip/demo-position-tooltip.component';
import {AtDemoFormComponent} from './showcase/at-demo-form/at-demo-form.component';
import {DemoFormBasicComponent} from './showcase/at-demo-form/demo-form-basic/demo-form-basic.component';
import { DemoPositionFormComponent } from './showcase/at-demo-form/demo-position-form/demo-position-form.component';
import { AtDemoIconComponent } from './showcase/at-demo-icon/at-demo-icon.component';
import { AtDemoDatetimepickerComponent } from './showcase/at-demo-datetimepicker/at-demo-datetimepicker.component';
import { DemoBasicDatepickerComponent } from './showcase/at-demo-datetimepicker/demo-basic-datepicker/demo-basic-datepicker.component';
import { AtDemoCardComponent } from './showcase/at-demo-card/at-demo-card.component';
import {HighLightComponent} from "./showcase/high-light/high-light.component";
import { AtDemoTabsComponent } from './showcase/at-demo-tabs/at-demo-tabs.component';
import { DemoBasicTabComponent } from './showcase/at-demo-tabs/demo-basic-tab/demo-basic-tab.component';
import { AtDemoStepsComponent } from './showcase/at-demo-steps/at-demo-steps.component';
import { DemoBasicStepsComponent } from './showcase/at-demo-steps/demo-basic-steps/demo-basic-steps.component';
import { AtDemoTimelineComponent } from './showcase/at-demo-timeline/at-demo-timeline.component';
import { AtDemoTimelineBasicComponent } from './showcase/at-demo-timeline/at-demo-timeline-basic/at-demo-timeline-basic.component';
import { AtDemoTimelineDotComponent } from './showcase/at-demo-timeline/at-demo-timeline-dot/at-demo-timeline-dot.component';
import { AtDemoPendingTimelineComponent } from './showcase/at-demo-timeline/at-demo-pending-timeline/at-demo-pending-timeline.component';
import { DemoHorizonalStepsComponent } from './showcase/at-demo-steps/demo-horizonal-steps/demo-horizonal-steps.component';
import { DemoSizeStepsComponent } from './showcase/at-demo-steps/demo-size-steps/demo-size-steps.component';
import { AtDemoAffixComponent }         from './showcase/at-demo-affix/at-demo-affix.component';
import { AtDemoAutocompeleteComponent } from './showcase/at-demo-autocompelete/at-demo-autocompelete.component';
import { DemoAffixBasicComponent }      from './showcase/at-demo-affix/demo-affix-basic/demo-affix-basic.component';
import { AtDemoUploadComponent }        from './showcase/at-demo-upload/at-demo-upload.component';
import { AtDemoUploadBasicComponent }   from './showcase/at-demo-upload/at-demo-upload-basic/at-demo-upload-basic.component';
import {AdminComponent}                 from "./showcase/admin/admin.component";
import { AtDemoTreeComponent } from './showcase/at-demo-tree/at-demo-tree.component';
import { AtDemoBasicTreeComponent } from './showcase/at-demo-tree/at-demo-basic-tree/at-demo-basic-tree.component';
import { AtDemoCustomTreeComponent } from './showcase/at-demo-tree/at-demo-custom-tree/at-demo-custom-tree.component';
import { AtDemoCheckableTreeComponent } from './showcase/at-demo-tree/at-demo-checkable-tree/at-demo-checkable-tree.component';
import { AtDemoTreeGroupComponent }   from './showcase/at-demo-tree/at-demo-tree-group/at-demo-tree-group.component';
import { AtDemoRemoteTreeComponent }  from './showcase/at-demo-tree/at-demo-remote-tree/at-demo-remote-tree.component';
import { AtDemoCardTabComponent }     from './showcase/at-demo-tabs/at-demo-card-tab/at-demo-card-tab.component';
import { AtDemoSizeTabsComponent }    from './showcase/at-demo-tabs/at-demo-size-tabs/at-demo-size-tabs.component';
import {AtModule}            from "./components/at-ng.module";
import { AtDemoCarouselComponent }    from './showcase/at-demo-carousel/at-demo-carousel.component';
import {AtDemoBasicCarouselComponent} from "./showcase/at-demo-carousel/at-demo-basic-carousel/at-demo-basic-carousel.component";
import { AtDemoDrawerComponent }      from './showcase/at-demo-drawer/at-demo-drawer.component';
import { AtDemoColorPickerComponent } from './showcase/at-demo-color-picker/at-demo-color-picker.component';
import zh_CN                          from "./components/i18n/languages/zh_CN";
import en_US                          from "./components/i18n/languages/en_US";
import { I18NComponent }              from './showcase/i18-n/i18-n.component';
import { AtDemoDndComponent }         from './showcase/at-demo-dnd/at-demo-dnd.component';
import { AtDemoDndBasicComponent }    from './showcase/at-demo-dnd/at-demo-dnd-basic/at-demo-dnd-basic.component';
import {AT_I18N}                      from "./components/i18n/i18n-token";



@NgModule({
  declarations: [
    AtDemoButtonComponent,
    AtDemoComponentsComponent,
    AtDemoDocSectionComponent,
    AtDemoLayoutComponent,
    AtDemoTagComponent,
    DemoBasicTagComponent,
    DemoColorTagComponent,
    AtDemoMenuComponent,
    DemoTopMenuComponent,
    DemoVerticalMenuComponent,
    DemoInlineMenuComponent,
    AtDemoCheckboxComponent,
    DemoBasicCheckboxComponent,
    DemoGroupCheckboxComponent,
    AtDemoInputComponent,
    DemoBasicInputComponent,
    DemoPendInputComponent,
    DemoIconInputComponent,
    DemoStatusInputComponent,
    DemoSizeInputComponent,
    AtDemoNumberInputComponent,
    DemoBasicNumberInputComponent,
    DemoSizeNumberInputComponent,
    DemoStepNumberInputComponent,
    AtDemoRadioComponent,
    SwicthBasicComponent,
    AppComponent,
    DemoBasicRadioComponent,
    DemoButtonRadioComponent,
    DemoDisableRadioComponent,
    DemoSizeRadioComponent,
    DemoColorRadioComponent,
    AtDemoSelectComponent,
    DemoSelectBasicComponent,
    DemoSelectMultipleComponent,
    DemoSelectSizeComponent,
    DemoSelectClearComponent,
    DemoInputSelectComponent,
    DemoSearchSelectComponent,
    AtDemoSwitchComponent,
    AtDemoSliderComponent,
    DemoBasicSliderComponent,
    AtDemoTextareaComponent,
    DemoBasicTextareaComponent,
    HighLightComponent,
    IntroComponent,
    InstallComponent,
    UpdateLogComponent,
    StartupComponent,
    ConnectComponent,
    AtDemoDropdownComponent,
    BasicDemoDropdownComponent,
    AtDemoPagenationComponent,
    DemoPlaceDropdownComponent,
    AtDemoNotificationComponent,
    AtDemoAlertComponent,
    AtDemoBadgeComponent,
    AtDemoLoadingbarComponent,
    AtDemoModalComponent,
    AtDemoMessageComponent,
    AtDemoPopoverComponent,
    AtDemoProgressComponent,
    AtDemoTooltipComponent,
    AtDemoTableComponent,
    DemoBasicNotificationComponent,
    DemoAlertBasicComponent,
    DemoBasicBadgeComponent,
    DemoCombineBadgeComponent,
    DemoDynamicBadgeComponent,
    DemoBasicModalComponent,
    DemoServiceModalComponent,
    DemoCustomModalComponent,
    DemoPositionModalComponent,
    DemoBasicTableComponent,
    DemoBasicPageComponent,
    DemoSizePageComponent,
    DemoSimplePageComponent,
    DemoFullPageComponent,
    DemoPageTableComponent,
    DemoSizeTableComponent,
    AtDemoBreadcrumbComponent,
    DemoBasicBreadcrumbComponent,
    DemoSeparateBreadcrumbComponent,
    DemoBasicMessageComponent,
    DemoLoadingMessageComponent,
    DemoBasicPopoverComponent,
    DemoContentPopoverComponent,
    DemoPositionPopoverComponent,
    DemoBasicProgressComponent,
    DemoStrokeProgressComponent,
    DemoStatusProgressComponent,
    DemoBasicTooltipComponent,
    DemoPositionTooltipComponent,
    AtDemoFormComponent,
    DemoFormBasicComponent,
    DemoPositionFormComponent,
    AtDemoIconComponent,
    AtDemoDatetimepickerComponent,
    DemoBasicDatepickerComponent,
    AtDemoCardComponent,
    AtDemoTabsComponent,
    DemoBasicTabComponent,
    AtDemoStepsComponent,
    DemoBasicStepsComponent,
    AtDemoTimelineComponent,
    AtDemoTimelineBasicComponent,
    AtDemoTimelineDotComponent,
    AtDemoPendingTimelineComponent,
    DemoHorizonalStepsComponent,
    DemoSizeStepsComponent,
    AtDemoAffixComponent,
    AtDemoAutocompeleteComponent,
    DemoAffixBasicComponent,
    AtDemoUploadComponent,
    AtDemoUploadBasicComponent,

    AdminComponent,

    AtDemoTreeComponent,

    AtDemoBasicTreeComponent,

    AtDemoCustomTreeComponent,

    AtDemoCheckableTreeComponent,

    AtDemoTreeGroupComponent,

    AtDemoRemoteTreeComponent,

    AtDemoCardTabComponent,

    AtDemoSizeTabsComponent,

    AtDemoCarouselComponent,

    AtDemoBasicCarouselComponent,

    AtDemoDrawerComponent,

    AtDemoColorPickerComponent,

    I18NComponent,

    AtDemoDndComponent,

    AtDemoDndBasicComponent


  ],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    AtModule.forRoot(),
    ReactiveFormsModule,

    BrowserModule, BrowserAnimationsModule
  ],
  providers: [{provide:AT_I18N,useValue:en_US}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
