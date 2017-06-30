import {Routes} from '@angular/router';
import {NewsList} from './news-list/news-list.component';
import {NewsView} from './news-view/news-view.component';

export const routes: Routes = [
    {path: '', redirectTo: 'all-news', pathMatch: 'full'},
    {path: 'all-news', component: NewsList},
    {path: 'news/:id', component: NewsView}
];
