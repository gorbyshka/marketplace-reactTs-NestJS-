import { FormField } from "../../types/pages/FormField";
import { InputFieldsType } from "../../types/pages/InputFieldsType ";

export const getInputFields = ({ data, setData }: InputFieldsType): FormField[] => {

    return [

        {

            type: "email",
            placeholder: "Email",
            value: data.email,
            onChange: e => setData({ ...data, email: e.target.value })

        },

        {

            type: "password",
            placeholder: "Password",
            value: data.password,
            onChange: e => setData({ ...data, password: e.target.value })

        },

    ];

};
