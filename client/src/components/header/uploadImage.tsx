import {
  Label,
  ButtonPlus,
  Input
} from "../../assets/styles/header/headerStyle.style";

import { UploadImageProps } from "../../types/header/UploadImageProps";

export const UploadImage: React.FC<UploadImageProps> = ({ onImageUpload }) => {

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target?.files?.[0];

    if (file) {

      const reader = new FileReader();

      reader.onload = () => onImageUpload(file);

      reader.readAsDataURL(file);

    };

  };

  return (

    <>

      <Label htmlFor="fileInput">

        <ButtonPlus>

          +

        </ButtonPlus>

        <Input

          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}

        />

      </Label>

    </>

  );

};
