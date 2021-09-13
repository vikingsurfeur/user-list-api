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

/* Interface for Form Values */
interface IValues {
    email: string;
    password: string;
    job: string;
}

/* FormUser Component */
const FormUser: React.FC = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    job: "",
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
                    if (!values.job) {
                        errors.job = "Required";
                    }
                    return errors;
                }}
                onSubmit={(values: IValues, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
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
                                            <IonTitle>ADD A USER</IonTitle>
                                        </IonToolbar>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol className="ion-margin">
                                        <IonItem>
                                            <IonLabel>
                                                Email
                                            </IonLabel>
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
                                            <IonLabel>
                                                Password
                                            </IonLabel>
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
                                <IonRow>
                                    <IonCol className="ion-margin">
                                        <IonItem>
                                            <IonLabel>Job</IonLabel>
                                            <IonInput
                                                id="job"
                                                name="job"
                                                type="text"
                                                onIonChange={handleChange}
                                                value={values.job}
                                            />
                                        </IonItem>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            {errors.password &&
                                touched.password &&
                                errors.password}
                            <IonButton
                                expand="block"
                                className="ion-margin ion-padding"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Add this User
                            </IonButton>
                        </IonList>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default FormUser;
