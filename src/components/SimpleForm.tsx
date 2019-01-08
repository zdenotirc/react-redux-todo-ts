import * as React from 'react'
import { Field, reduxForm, InjectedFormProps, Form } from 'redux-form';

/* Decorated components */
export interface TestFormData {
    firstName: string;
    lastName: string;
    email: string;
    favoriteColor: string;
}

interface TestFormComponentProps {
    baz: string;
}

type InjectedProps = InjectedFormProps<TestFormData, TestFormComponentProps>;

class SimpleFormComponent extends React.Component<TestFormComponentProps & InjectedProps> {
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return (
            <Form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Favorite Color</label>
                    <div>
                        <Field name="favoriteColor" component="select">
                            <option />
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                        Submit
                </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                </button>
                </div>
            </Form>
        )
    }
}

export const SimpleForm = reduxForm({
    form: 'simple' // a unique identifier for this form
})(SimpleFormComponent)