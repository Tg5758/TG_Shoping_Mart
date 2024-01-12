import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import PageNoteFOund from "./Component/PageNoteFOund";
import ProductDetail from "./Component/ProductDetail";
import Todo from "./Component/Todo";
import Login from "./Component/Login";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {

  const token = localStorage.getItem('token')
  const auth = !!token
  const PrivateRoute = ({children}) => {

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? children : <Navigate to="/login" />;
}

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>}></Route>
          <Route exact path="/todo" element={<Todo />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>}></Route>
          <Route path="/*" element={<PageNoteFOund />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
