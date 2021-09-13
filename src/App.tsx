/* Import React Route */
import { Route, Redirect } from "react-router";

/* Import React Hooks */
import { useState } from "react";

/* Import Ionic Router */
import { IonReactRouter } from "@ionic/react-router";
import { IonRouterOutlet } from "@ionic/react";

/* Import Pages */
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route
                    exact
                    path="/"
                    render={() => {
                        return isAuthenticated ? (
                            <Home />
                        ) : (
                            <LoginPage />
                        );
                    }}
                />
            </IonRouterOutlet>
        </IonReactRouter>
    );
};

export default App;
