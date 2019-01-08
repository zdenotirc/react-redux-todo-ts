import * as React from 'react';

import { SimpleForm, TestFormData } from '../components/SimpleForm';
import { connect } from 'react-redux';
import { State } from '../reducers'

interface DummyFormContainerProps { 
    initialValues: TestFormData;
}

const submitForm = (formValues: object) => {
    alert(formValues);
};

const SimpleFormContainer: React.SFC<DummyFormContainerProps> = props => {
    return (
        <SimpleForm
            initialValues={props.initialValues}
            onSubmit={submitForm}
        />
    )
}

const mapStateToProps = (state: State) => {
    return ({
        initialValues: {
            firstName: state.datas.datas[0].name
        }
    });
};

const mapDispatchToProps = (dispatch: object) => {
    return {};
};

export const SimpleFormDemo = connect(mapStateToProps, mapDispatchToProps)(SimpleFormContainer)