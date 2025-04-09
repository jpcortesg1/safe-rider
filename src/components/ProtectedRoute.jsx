import { Navigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

export const ProtectedRoute = ({ children, requiresAuth = true }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!requiresAuth && isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
} 