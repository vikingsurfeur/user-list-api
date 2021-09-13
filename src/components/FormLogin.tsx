/* Import axios */
import axios from "axios";

/* Import Formik */
import { Formik } from "formik";

/* Import Ionic Components */
import {
    IonTitle,
    IonToolbar,
    IonButton,
    IonGrid,
    IonCol,
    IonInput,
    IonLabel,
    IonList,
    IonRow,
    IonItem,
} from "@ionic/react";

/* Define URL environment constant*/
const { REACT_APP_API_URL_GET_TOKEN } = process.env;

/* Interface for Form Values */
interface IValues {
    email: string;
    password: string;
}

const FormLogin: React.FC = () => {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validate={(values) => {
                const errors: IValues | any = {};
                if (!values.email) {
                    errors.email = "Required";
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                    )
                ) {
                    errors.email = "Invalid email address";
                }
                if (!values.password) {
                    errors.password = "Required";
                } else if (
                    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(
                        values.password
                    )
                ) {
                    errors.password = "Invalid password";
                }
                return errors;
            }}
            onSubmit={(values: IValues, { setSubmitting }) => {
                setTimeout(async () => {
                    try {
                        const response = await axios({
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept": "application/json",
                            },
                            url: `${REACT_APP_API_URL_GET_TOKEN}`,
                            data: {
                                "username": values.email,
                                "password": values.password,
                            },
                        });
                        if (response.status === 200) {
                            console.log(response);
                        } else {
                            console.log("Try again");
                        }
                    } catch (error) {

                    }
                    setSubmitting(false);
                }, 500);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleSubmit,
                handleChange,
                isSubmitting,
            }) => (
                <form onSubmit={handleSubmit}>
                    <IonList>
                        <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <IonToolbar>
                                        <IonTitle>Sign In</IonTitle>
                                    </IonToolbar>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-margin">
                                    <IonItem>
                                        <IonLabel>Email</IonLabel>
                                        <IonInput
                                            id="email"
                                            name="email"
                                            placeholder="john@acme.com"
                                            type="email"
                                            onIonChange={handleChange}
                                            value={values.email}
                                        />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol className="ion-margin">
                                    <IonItem>
                                        <IonLabel>Password</IonLabel>
                                        <IonInput
                                            id="password"
                                            name="password"
                                            type="password"
                                            onIonChange={handleChange}
                                            value={values.password}
                                        />
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        {errors.password && touched.password && errors.password}
                        <IonButton
                            expand="block"
                            className="ion-margin ion-padding"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Log In
                        </IonButton>
                    </IonList>
                </form>
            )}
        </Formik>
    );
};

export default FormLogin;
