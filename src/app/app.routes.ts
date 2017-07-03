import {Routes} from '@angular/router';
import {NewsList} from './news-list/news-list.component';
import {NewsView} from './news-view/news-view.component';
import {NewsForm} from './news-form/news-form.component';

export const routes: Routes = [
    {path: '', redirectTo: 'all-news', pathMatch: 'full'},
    {path: 'all-news', component: NewsList},
    {path: 'news/:id', component: NewsView},
    {path: 'add-news', component: NewsForm},
    {path: 'edit-news/:id', component: NewsForm}
];
