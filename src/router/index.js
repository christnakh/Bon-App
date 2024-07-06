import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/components/HomePage.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Auth from "@/views/Auth.vue";
import Menu from "@/views/Menu.vue";
import ProfileView from "@/views/ProfileView.vue";
import Cart from "@/views/Cart.vue";
import Checkout from "@/views/Checkout.vue";
import OrderHistory from "@/views/OrderHistory.vue";
import OrderTracking from "@/views/OrderTracking.vue";

import AdminPanel from "@/views/restaurents/AdminPanel";
import Registration from "@/views/restaurents/Registration.vue";
import Login from "@/views/restaurents/Login.vue";
import Profile from "@/views/restaurents/Profile.vue";
import ReferOwner from "@/views/restaurents/ReferOwner.vue";
import ItemManagement from "@/views/restaurents/ItemManagement.vue";
import MenuCreate from "@/views/restaurents/MenuCreate.vue";
import OrderValidation from "@/views/restaurents/OrderValidation.vue";
import OrderTrackingR from "@/views/restaurents/OrderTrackingR.vue";
import OrderHistoryR from "@/views/restaurents/OrderHistoryR.vue";

import RegistrationD from "@/views/delivery/RegistrationD.vue";
import LoginD from "@/views/delivery/LoginD.vue";
import ProfileD from "@/views/delivery/ProfileD.vue";
import ReferDriver from "@/views/delivery/ReferDriver.vue";
import DeliveryAcceptance from "@/views/delivery/DeliveryAcceptance.vue";
import DeliveryConfirmation from "@/views/delivery/DeliveryConfirmation.vue";
import AdminPaneld from "@/views/delivery/AdminPaneld.vue";

import AdminPanelP from "@/views/thirdparty/AdminPanelP";
import ProfileT from "@/views/thirdparty/ProfileT";
import LoginP from "@/views/thirdparty/LoginP";
import RegistrationP from "@/views/thirdparty/RegistrationP";

import AdminPanelC from "@/views/commercial/AdminPanelC";
import ProfileC from "@/views/commercial/ProfileC";
import LoginC from "@/views/commercial/LoginC";
import AccountManagement from "@/views/commercial/AccountManagement";

import ComponentManagement from "@/views/technicalsupport/ComponentManagement";
import AdminPanelS from "@/views/technicalsupport/AdminPanelS";
import LoginS from "@/views/technicalsupport/LoginS";
import ProfileS from "@/views/technicalsupport/ProfileS";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/SignIn/auth",
    name: "Password",
    component: Auth
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView
  },
  {
    path: "/menu/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/menu/cart/checkout",
    name: "Checkout",
    component: Checkout
  },
  {
    path: "/orderhistory",
    name: "OrderHistory",
    component: OrderHistory
  },
  {
    path: "/menu/cart/checkout/ordertracking",
    name: "OrderTracking",
    component: OrderTracking
  },
  {
    path: "/restaurant/registration",
    name: "restaurantRegistration",
    component: Registration
  },
  {
    path: "/restaurant/login",
    name: "restaurantLogin",
    component: Login
  },
  {
    path: "/restaurant/profile",
    name: "restaurantProfile",
    component: Profile
  },
  {
    path: "/restaurant/referowner",
    name: "restaurantReferOwner",
    component: ReferOwner
  },
  {
    path: "/restaurant/itemmanagement",
    name: "restaurantItemManagement",
    component: ItemManagement
  },
  {
    path: "/restaurant/menucreate",
    name: "restaurantMenuCreate",
    component: MenuCreate
  },
  {
    path: "/restaurant/ordervalidation",
    name: "restaurantOrderValidation",
    component: OrderValidation
  },
  {
    path: "/restaurant/ordertracking",
    name: "restaurantOrderTracking",
    component: OrderTrackingR
  },
  {
    path: "/restaurant/orderhistory",
    name: "restaurantOrderHistory",
    component: OrderHistoryR
  },
  {
    path: "/restaurant/adminpanel",
    name: "restaurentadminpanel",
    component: AdminPanel
  },
  {
    path: "/delivery/registration",
    name: "DeliveryRegistration",
    component: RegistrationD
  },
  {
    path: "/delivery/login",
    name: "DeliveryLogin",
    component: LoginD
  },
  {
    path: "/delivery/profile",
    name: "DeliveryProfile",
    component: ProfileD
  },
  {
    path: "/delivery/referdriver",
    name: "DeliveryReferDriver",
    component: ReferDriver
  },
  {
    path: "/delivery/deliveryacceptance",
    name: "DeliveryAcceptance",
    component: DeliveryAcceptance
  },
  {
    path: "/delivery/deliveryconfirmation",
    name: "DeliveryConfirmation",
    component: DeliveryConfirmation
  },
  {
    path: "/delivery/adminpanel",
    name: "AdminPaneld",
    component: AdminPaneld
  },
  {
    path: "/thirdparty/adminpanel",
    name: "AdminPanelP",
    component: AdminPanelP
  },
  {
    path: "/thirdparty/profile",
    name: "ProfileT",
    component: ProfileT
  },
  {
    path: "/thirdparty/login",
    name: "LoginP",
    component: LoginP
  },
  {
    path: "/thirdparty/registration",
    name: "RegistrationP",
    component: RegistrationP
  },
  {
    path: "/commercial/accountmanagment",
    name: "AdminPanelC",
    component: AdminPanelC
  },
  {
    path: "/commercial/login",
    name: "LoginC",
    component: LoginC
  },
  {
    path: "/commercial/profile",
    name: "ProfileC",
    component: ProfileC
  },
  {
    path: "/commercial/adminpanel",
    name: "AdminPanelC",
    component: AdminPanelC
  },
  {
    path: "/commercial/accountmanagement",
    name: "AccountManagement",
    component: AccountManagement
  },
  {
    path: "/tech/adminpanel",
    name: "AdminPanelS",
    component: AdminPanelS
  },
  {
    path: "/tech/component",
    name: "ComponentManagement",
    component: ComponentManagement
  },
  {
    path: "/tech/login",
    name: "LoginS",
    component: LoginS
  },
  {
    path: "/tech/profile",
    name: "ProfileS",
    component: ProfileS
  }
];

const router = new VueRouter({
  routes
});

export default router;
