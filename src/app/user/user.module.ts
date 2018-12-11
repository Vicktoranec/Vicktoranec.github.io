import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { UserComponent } from "./user.component";
import { AuthGuard } from "./auth.guard";
import { ProductTableComponent } from "./productTable.component";
import { ProductEditorComponent } from "./productEditor.component";
import { OrderTableComponent } from "./orderTable.component";
let routing = RouterModule.forChild([
{ path: "auth", component: AuthComponent },
{
path: "main", component: UserComponent, canActivate: [AuthGuard],
children: [
{ path: "products/:mode/:id", component: ProductEditorComponent },
{ path: "products/:mode", component: ProductEditorComponent },
{ path: "products", component: ProductTableComponent },
{ path: "orders", component: OrderTableComponent },
{ path: "**", redirectTo: "products" }
]
},
{ path: "**", redirectTo: "auth" }
]);
@NgModule({
imports: [CommonModule, FormsModule, routing],
providers: [AuthGuard],
declarations: [AuthComponent, UserComponent,
ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class UserModule {}