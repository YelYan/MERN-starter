import { QueryProviders } from "./QueryProviders";
import { AuthProvider } from "./AuthProvider";
import { ThemeProvider } from "./ThemeProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProviders>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </QueryProviders>
  );
};

export default AppProvider;
