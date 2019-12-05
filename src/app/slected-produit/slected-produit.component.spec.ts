import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectedProduitComponent } from './slected-produit.component';

describe('SlectedProduitComponent', () => {
  let component: SlectedProduitComponent;
  let fixture: ComponentFixture<SlectedProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlectedProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlectedProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
