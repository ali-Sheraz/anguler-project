import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllProvidersComponent } from './delete-all-providers.component';

describe('DeleteAllProvidersComponent', () => {
  let component: DeleteAllProvidersComponent;
  let fixture: ComponentFixture<DeleteAllProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteAllProvidersComponent]
    });
    fixture = TestBed.createComponent(DeleteAllProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
