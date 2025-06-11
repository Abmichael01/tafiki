import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Register from "./pages/Auth/Register";
import AuthLanding from "./pages/Auth/AuthLanding";
import SiteLayout from "./layouts/SiteLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import Portfolio from "./pages/PartnerDashboard/Portfolio";
import Shop from "./pages/PartnerDashboard/Shop";
import PortfolioDetail from "./pages/PartnerDashboard/PortfolioDetail";
import MyOrders from "./pages/PartnerDashboard/MyOrders";
import OrderDetails from "./pages/PartnerDashboard/Order/OrderDetails";
import OrderTransactionFlow from "./pages/PartnerDashboard/Order/OrderTransactionFlow";
import Wallet from "./pages/PartnerDashboard/Wallet";
import ShopItemDetails from "./pages/PartnerDashboard/ShopItemDetails";
import Profile from "./pages/PartnerDashboard/Profile/Profile";
import WithdrawalPin from "./pages/PartnerDashboard/Profile/WithdrawalPin/WithdrawalPin";
import CheckPin from "./pages/PartnerDashboard/Profile/WithdrawalPin/CheckPin";
import ChangePin from "./pages/PartnerDashboard/Profile/WithdrawalPin/ChangePin";
import Beneficiary from "./pages/PartnerDashboard/Profile/Beneficiary/Beneficiary";
import NewBeneficiary from "./pages/PartnerDashboard/Profile/Beneficiary/NewBeneficiary";
import ResetPassword from "./pages/PartnerDashboard/Profile/ResetPassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RewardLoyaltyProgram from "./pages/RewardLoyaltyProgram";
import Cart from "./pages/PartnerDashboard/Cart/Cart";
import DeliveryInformation from "./pages/PartnerDashboard/Cart/DeliveryInfo";
import Checkout from "./components/PartnerDashboard/Cart/Checkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reward-loyalty-program" element={<RewardLoyaltyProgram />} />
        </Route>

        <Route path="/" element={<LandingPage />} />

        <Route path="/partner" element={<AuthLayout />}>
          <Route index element={<AuthLanding />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="/partner" element={<DashboardLayout />}>
          <Route path="portfolio">
            <Route index element={<Portfolio />} />
            <Route path="portfolio" element={<PortfolioDetail />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>

          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":itemId" element={<ShopItemDetails />} />
          </Route>

          <Route path="my-orders">
            <Route index element={<MyOrders />} />
            <Route path=":id" element={<OrderDetails />} />
            <Route
              path=":id/transactions"
              element={<OrderTransactionFlow />}
            />
          </Route>
          
          <Route path="cart">
            <Route index element={<Cart />} />
            <Route path="delivery-information" element={<DeliveryInformation />} />
            <Route path="checkout" element={<Checkout /> } />
          </Route>

          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="withdrawal-pin">
              <Route index element={<WithdrawalPin />} />
              <Route path="check-pin" element={<CheckPin />} />
              <Route path="change-pin" element={<ChangePin />} />
            </Route>
            <Route path="beneficiary">
              <Route index element={<Beneficiary />} />
              <Route path="new" element={<NewBeneficiary />} />
            </Route>
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
