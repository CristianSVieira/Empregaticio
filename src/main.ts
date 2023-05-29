import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { MdlOrigem } from "./app/mdl.origem";


platformBrowserDynamic().bootstrapModule(MdlOrigem)
	.catch(err => console.error(err));
