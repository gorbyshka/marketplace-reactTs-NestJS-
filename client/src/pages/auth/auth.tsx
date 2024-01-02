import React, { useState } from 'react';

import {
    GlobalStyles,
    FormOverlay,
    CenteredFormWrapper,
    CloseButton,
    CloseIcon,
    Form,
    FormContainer,
    FormInput,
    FormButton,
    ButtonsContainer
} from '../../assets/styles/pages/authStyle.style';

import { AuthService } from '../../services/auth.service';

import { useMutation } from 'react-query';

import { useAuth } from '../../providers/AuthProvider';

import { getInputFields } from '../../constants/pages/inputFields';

import { FormField } from '../../types/pages/FormField';

import { buttonItems } from '../../constants/pages/buttonItems';

export const Auth: React.FC = React.memo(() => {

    const [data, setData] = useState({ email: '', password: '' });
    const [type, setType] = useState('login');
    const [isVisible, setIsVisible] = useState(true);

    const { setUser } = useAuth();

    const { mutateAsync: loginAsync } = useMutation('login', () => AuthService.login(data.email, data.password), {

        onError: (err) => console.log(err),

        onSuccess: ({ data }) => setUser(data.user)

    });

    const { mutateAsync: registerAsync } = useMutation('register', () => AuthService.register(data.email, data.password), {

        onError: (err) => console.log(err),

        onSuccess: ({ data }) => setUser(data.user),

    });

    const isAuthType = type === 'login';

    const handleSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        if (isAuthType) loginAsync();
        else registerAsync();
    }

    const inputFields: FormField[] = getInputFields({ data, setData });

    return isVisible ? (

        <>
            <GlobalStyles
                isVisible={isVisible}
            />

            <FormOverlay>

                <CenteredFormWrapper>

                    <Form
                        onSubmit={handleSubmit}
                        isVisible={isVisible}
                    >

                        <FormContainer>

                            <CloseButton
                                onClick={() => setIsVisible(false)}
                            >

                                <CloseIcon>

                                    &times;

                                </CloseIcon>

                            </CloseButton>

                            {inputFields.map((field, index) => (

                                <FormInput

                                    key={index}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={field.value}
                                    onChange={field.onChange}
                                    isVisible={isVisible}

                                />

                            ))}

                            <ButtonsContainer
                                isVisible={isVisible}
                            >

                                {buttonItems.map((item, index) => (

                                    <FormButton
                                        key={index}
                                        onClick={() => setType(item.type)}
                                        isVisible={isVisible}
                                    >

                                        {item.text}

                                    </FormButton>

                                ))}

                            </ButtonsContainer>

                        </FormContainer>

                    </Form>

                </CenteredFormWrapper>

            </FormOverlay>

        </>

    ) : null;

});
