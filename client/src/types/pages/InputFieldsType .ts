
export interface InputFieldsType {

    data: { email: string, password: string };

    setData: React.Dispatch<React.SetStateAction<{ email: string, password: string }>>;
};
