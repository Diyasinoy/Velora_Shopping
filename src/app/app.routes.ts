import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Cheesecake } from './pages/cheesecake/cheesecake';
import { Choco } from './pages/choco/choco';
import { Muffins } from './pages/muffins/muffins';
import { Brownies } from './pages/brownies/brownies';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [{path: '' , component : Home}, {path: 'products' , component : Products}, {path: 'home' , component : Home},
    {path: 'services' , component : Services}, {path: 'cheesecake' , component : Cheesecake}, {path: 'choco' , component : Choco},
    {path: 'muffins' , component : Muffins}, {path: 'brownies' , component : Brownies}, {path: 'contact' , component : Contact}
];
