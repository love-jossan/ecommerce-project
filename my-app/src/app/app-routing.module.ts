import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { ChekoutComponent } from './chekout/chekout.component';
import { DialogComponent } from './dialog/dialog.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', redirectTo:"login",pathMatch:"full"},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'order', component: MainComponent},
   { path: 'items', component: ItemsComponent},
  { path: 'dialog/:id', component: DialogComponent},
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'chekout', component: ChekoutComponent},
  { path: 'payments', component: PaymentComponent},
  { path: 'todo/list', component: TodoListComponent},
  { path: 'todo/item', component: TodoItemComponent},
  { path: 'todo-add', component: TodoAddComponent},
  
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
