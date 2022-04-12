import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesideComponent } from './profileside.component';

describe('ProfilesideComponent', () => {
  let component: ProfilesideComponent;
  let fixture: ComponentFixture<ProfilesideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
