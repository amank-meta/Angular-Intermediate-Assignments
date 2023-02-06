import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AttributeDirective } from './attribute.directive';

@Component({
    template: `<button changeColor ></button>`
})

class TestHoverComponent { }
describe('AttributeDirective', () => {
    let component: TestHoverComponent;
    let fixture: ComponentFixture<TestHoverComponent>;
    let ele: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AttributeDirective, TestHoverComponent]
        });

        fixture = TestBed.createComponent(TestHoverComponent);
        component = fixture.componentInstance;
        ele = fixture.debugElement.query(By.css('button'));
    });

    it('Mouse hover effect', () => {
        ele.triggerEventHandler('mouseenter', null);
        fixture.detectChanges();
        expect(ele.nativeElement.style.opacity).toBe('0.85');
    });

    it('color change on leaving the button', () => {
        ele.triggerEventHandler('mouseleave',null);
        fixture.detectChanges();
        expect(ele.nativeElement.style.opacity).toBe('1');
      });

});
