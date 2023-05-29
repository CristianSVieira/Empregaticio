import { TestBed } from "@angular/core/testing";
import { CmpOrigem } from "./cmp.origem";

describe("CmpOrigem", () => {
	beforeEach(() => TestBed.configureTestingModule({
		declarations: [CmpOrigem]
	}));

	it("should create the app", () => {
		const fixture = TestBed.createComponent(CmpOrigem);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it("should have as title 'Empregaticio'", () => {
		const fixture = TestBed.createComponent(CmpOrigem);
		const app = fixture.componentInstance;
		expect(app.title).toEqual("Empregaticio");
	});

	it("should render title", () => {
		const fixture = TestBed.createComponent(CmpOrigem);
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		expect(compiled.querySelector(".content span")?.textContent).toContain("Empregaticio app is running!");
	});
});
