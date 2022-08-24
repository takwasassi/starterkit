import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEndpointComponent } from './update-endpoint.component';

describe('UpdateEndpointComponent', () => {
  let component: UpdateEndpointComponent;
  let fixture: ComponentFixture<UpdateEndpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEndpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEndpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
