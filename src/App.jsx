import { Routes, Route, useParams } from 'react-router-dom'
import { HomePage, AboutPage, HelpCenterPage, ShippingInfoPage, ProductsPage, ProductDetailPage, AuthPage, SellerDashboardPage, CartPage } from './pages'
import './index.css'

function ProductDetailWrapper() {
  const { id } = useParams()
  return <ProductDetailPage id={id} />
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/shipping" element={<ShippingInfoPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailWrapper />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="/seller" element={<SellerDashboardPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}
