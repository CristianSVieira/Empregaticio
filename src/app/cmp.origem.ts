import { Component, OnInit, Directive, HostListener } from "@angular/core";
import { NgModel, ReactiveFormsModule, FormsModule } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./cmp.origem.html",
	styleUrls: ["./cmp.origem.css"]
})

export class CmpOrigem implements OnInit {
	public pesquisa_evento: Event | undefined;
	public pesquisa_val: string | undefined;

	ngOnInit(): void {
		this.pesquisa_val = "Valôr";
	}

	//constructor() {}

  @HostListener("keyup", ["pesquisa_val"])
	premiuClave(pesquisa_val: any) {
		console.log(pesquisa_val);
	}

  title = "Empregaticio";
}
