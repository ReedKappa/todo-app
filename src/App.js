import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {MainTodo} from "./components/MainTodo/MainTodo";
import {MainWrapper} from "./Styles";

function App() {

  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
          <MainWrapper>
              <MainTodo />
          </MainWrapper>
      </QueryClientProvider>
  );
}

export default App;
