import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactTemplateFormComponent } from "./contact-template-form/contact-template-form.component";
import { contactDetailTitleResolver } from "./resolver/contact-detail-title.resolver";
import { contactResolver } from "./resolver/contact.resolver";

export const routes = [
    { path: '', component: ContactListComponent, title: 'Accueil' },
    { path: 'new', component: ContactTemplateFormComponent, title: 'Nouveau contact' },
    { 
        path: 'detail/:id', 
        component: ContactDetailComponent, 
        resolve: {contact: contactResolver},
        title: contactDetailTitleResolver
    },
    { path: '**', redirectTo: '' },
];
