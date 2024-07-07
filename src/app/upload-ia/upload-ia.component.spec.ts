import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadIaComponent } from './upload-ia.component';

describe('UploadIaComponent', () => {
  let component: UploadIaComponent;
  let fixture: ComponentFixture<UploadIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadIaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
