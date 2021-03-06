import {Component, forwardRef, OnInit} from '@angular/core';
import {DndItemComponent}              from "../dnd-item/dnd-item.component";
import {NG_VALUE_ACCESSOR}             from "@angular/forms";
import {concatAll, map, takeUntil}     from "rxjs/operators";
import {fromEvent}                     from "rxjs";

@Component({
             selector: 'at-dnd-move-item',
             template: `
               <div *ngIf="drag_enter == true && show_drag_line == true" class="drag-over-place"></div>
               <div [class.dz-drag-start]="dragAndDropStart" class="none-drag-event">
                 <ng-content></ng-content>
               </div>
               <div #drag_view
                    style="position: fixed" [style.left.px]="-2000" [style.top.px]="-2000">
               </div>


             `,
             providers: [{
               provide: NG_VALUE_ACCESSOR,
               useExisting: forwardRef(() => DndItemComponent),
               multi: true
             }],
             styles: [
                 `:host {
                 display: block;
               }`
             ]
           })
export class DndMoveItemComponent extends DndItemComponent implements OnInit {

  writeValue(obj: any): void {
    if (obj) {
      this.content = obj
    }
  }

  position       = {x: 0, y: 0}
  onChange: any  = Function.prototype;
  onTouched: any = Function.prototype;


  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  loadDragList() {
    if (this._triggerElement) {
      this.drag_init       = true
      let dom: HTMLElement = this.elementRef.nativeElement
      let dragStart        = fromEvent(this._triggerElement, 'mousedown')
      let dragMoving       = fromEvent(document, 'mousemove')
      let dragEnd          = fromEvent(document, 'mouseup')

      dragStart.pipe(map((event: any) => {
                           let DomRect: any     = dom.getBoundingClientRect()
                           this.downeventOffset = {x: event.clientX - DomRect.x, y: event.clientY - DomRect.y}
                           this.pauseEvent(event)
                           return dragMoving.pipe(
                             takeUntil(dragEnd.pipe(map((e: any) => {
                               this.OnStopDrag.emit(e)
                               return e;
                             }))))

                         }
                     ),
                     concatAll(),
                     map((event: any) => ({
                       x: event.clientX,
                       y: event.clientY
                     }))).subscribe(rect => {

        this.position = rect
        this.onDragging.emit(rect)
      })

    }
  }

}
