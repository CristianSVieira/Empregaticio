import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CmpOrigem } from "./cmp.origem";

@NgModule({
	declarations: [
		CmpOrigem
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [CmpOrigem]
})
export class MdlOrigem {  }
