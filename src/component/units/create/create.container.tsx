import { useMutation } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import CreateUI from "./create.presenter";
import { CREATE_PRODUCT_DIRECT } from "./create.queries";

export default function Create() {
  const [createProductDirect] = useMutation(CREATE_PRODUCT_DIRECT);
  const [category, setCategory] = useState("");
  const handleChange = (value: SetStateAction<string>) => {
    setCategory(value);
  };

  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p/>" ? "" : value);
    trigger("contents");
  };
  const onClickCreate = (data: any) => {
    const result = createProductDirect({
      variables: {
        title: data.title,
        content: data.content,
        price: data.price,
        quantity: data.quantity,
        category: "4b20bd0f-a4ed-426f-b3b7-5359f727ba5c",
        directStoreId: "aa6b3ca6-24c0-4761-bf8a-633507f71412",
        adminId: "f3605471-b500-417a-82f1-299949131377",
      },
    });
    console.log(result);
  };
  return (
    <CreateUI
      handleSubmit={handleSubmit}
      register={register}
      onChangeContents={onChangeContents}
      onClickCreate={onClickCreate}
      handleChange={handleChange}
    />
  );
}
