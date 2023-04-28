import { DetailComponent } from "./component/group/detail/detail.component";
import { IndexComponent } from "./component/group/index/index.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactTemplateFormComponent } from "./contact-template-form/contact-template-form.component";
import { canActivateLoggedIn } from "./guard/login.guard";
import { contactDetailTitleResolver } from "./resolver/contact-detail-title.resolver";
import { contactResolver } from "./resolver/contact.resolver";
import { groupResolver } from "./resolver/group.resolver";

export const routes = [
    { path: '', component: IndexComponent, title: 'Accueil' },
    { 
        path: ':slug',
        component: DetailComponent,
        title: 'Group',
        resolve: {group: groupResolver},
        children: [
            { path: '', component: ContactListComponent },
            { 
                path: 'new', 
                component: ContactTemplateFormComponent, 
                title: 'Nouveau contact',
                canActivate: [canActivateLoggedIn]
            },
            { 
                path: 'detail/:id', 
                component: ContactDetailComponent, 
                resolve: {contact: contactResolver},
                title: contactDetailTitleResolver
            },
        ]
    },
    { path: '**', redirectTo: '' },
];
