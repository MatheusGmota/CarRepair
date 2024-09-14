import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error/index.tsx'
import Home from './routes/Home/index.tsx'
import PaginaParticipantes from './routes/PaginaParticipantes/index.tsx'
import Orcamento from './routes/Orçamento/index.tsx'
import Cadastro from './routes/Cadastro/index.tsx'
import Login from './routes/Login/index.tsx'
import ConfirmaInformcacao from './routes/ConfirmaInformacao/index.tsx'
import Chatbot from './routes/Chatbot/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/pagina-participantes',
        element: <PaginaParticipantes/>
      },
      {
        path: '/orcamento',
        element: <Orcamento/>
      },
      {
        path: '/cadastro',
        element: <Cadastro/>
      },
      {
        path: '/entrar',
        element: <Login/>
      },
      {
        path:"/confirmacao/informacao",
        element: <ConfirmaInformcacao/>
      },
      {
        path: 'orcamento/chatbot/:id',
        element: <Chatbot/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
