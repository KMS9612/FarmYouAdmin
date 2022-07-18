import { gql, useMutation, useQuery } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import CreateUI from "./create.presenter";
import { CREATE_PRODUCT_DIRECT, FETCH_USER_LOGGED_IN } from "./create.queries";

const CategoryList = [
  {
    id: "52b78eb6-0dbb-42ed-8829-7627378e74fa",
    name: "곡류",
  },
  {
    id: "d9434649-f177-4455-9c90-9ceabea2f6ad",
    name: "과일류",
  },
  {
    id: "09f3161c-a29f-4258-aec2-c218ba99da46",
    name: "과채류",
  },
  {
    id: "d2ca5445-d38e-40b1-8433-a50ca2d8337a",
    name: "근채류",
  },
  {
    id: "7eb7a2a7-5e43-4dd9-9ae7-1865dc314682",
    name: "버섯류",
  },
  {
    id: "bc2f2bfd-9f53-4877-acd1-90346792e00c",
    name: "양념류",
  },
  {
    id: "aee5e17b-14fd-48be-be68-b697791e5d39",
    name: "엽채류",
  },
];

export default function Create() {
  const [createProductDirect] = useMutation(CREATE_PRODUCT_DIRECT);
  const [category, setCategory] = useState("");
  const { data: DataId } = useQuery(FETCH_USER_LOGGED_IN);
  const handleChange = (value: SetStateAction<string>) => {
    console.log(DataId);
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
        categoryId: category,
        adminId: DataId.fetchUserLoggedIn.id,
        // directStoreId: "aa6b3ca6-24c0-4761-bf8a-633507f71412",
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
      CategoryList={CategoryList}
    />
  );
}
