import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { CmpOrigem } from "./cmp.origem";

@NgModule({
	declarations: [
		CmpOrigem
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [CmpOrigem]
})
export class MdlOrigem {  }
