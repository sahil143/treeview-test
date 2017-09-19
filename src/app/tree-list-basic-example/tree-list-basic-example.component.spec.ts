import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeListBasicExampleComponent } from './tree-list-basic-example.component';

describe('TreeListBasicExampleComponent', () => {
  let component: TreeListBasicExampleComponent;
  let fixture: ComponentFixture<TreeListBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeListBasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeListBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
