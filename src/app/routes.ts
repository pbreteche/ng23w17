import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactTemplateFormComponent } from "./contact-template-form/contact-template-form.component";
import { contactResolver } from "./resolver/contact.resolver";

export const routes = [
    { path: '', component: ContactListComponent },
    { path: 'new', component: ContactTemplateFormComponent },
    { path: 'detail/:id', component: ContactDetailComponent, resolve: {contact: contactResolver} },
    { path: '**', redirectTo: '' },
];
