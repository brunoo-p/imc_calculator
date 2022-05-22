import React, { memo } from 'react';
import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';

const ErrorInput = styled.div`
    color: #ee5253;
    font-size: 12px;
    font-weight: 700;
    padding: 4px;
    animation: showError .2s ease-in forwards;

    @keyframes showError {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;

function InputFormik({ type, name, testid } : any) {
    
    const placeholder = type === 'email' ? 'email@email.com' : '••••••••••';
    return (
        <>
            <Field
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                autoComplete="off"
                data-testid={testid}
            />
            <ErrorMessage
                render={(message: string) => <ErrorInput> {message}</ErrorInput>}
                name={name}
                data-testid="error-message"
            />
        </>
    );

}

export default memo(InputFormik);
