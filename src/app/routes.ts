import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactTemplateFormComponent } from "./contact-template-form/contact-template-form.component";

export const routes = [
    { path: '', component: ContactListComponent },
    { path: 'new', component: ContactTemplateFormComponent },
    { path: '**', redirectTo: '' },
];
