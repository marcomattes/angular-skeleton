import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing";
import {AppComponent} from "./app.component";

describe("AppComponent", () => {
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  });

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it("should create the app", () => {
    expect(fixture).toBeTruthy();
  });

  it("should show dummy content", () => {
    const title = fixture.debugElement.query(By.css(".dummy"));
    expect(title).toBeTruthy();
  });
});
