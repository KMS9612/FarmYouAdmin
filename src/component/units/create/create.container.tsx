import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateUI from "./create.presenter";
import { CREATE_PRODUCT_DIRECT, FETCH_USER_LOGGED_IN } from "./create.queries";

const CategoryList = [
  {
    name: "곡류",
    id: "2b5270a4-47e4-4212-8bb6-3468ce207a5a",
  },
  {
    name: "과일류",
    id: "7b92d172-9ef5-40db-b307-c7d8341c2f21",
  },
  {
    name: "과채류",
    id: "2a4d6fb3-7dec-4876-9b33-942b6f5e1044",
  },
  {
    name: "근채류",
    id: "e5cd51b0-1e77-4b5d-a53b-439bf6a539c2",
  },
  {
    name: "버섯류",
    id: "151cb7d2-484e-462d-b21e-bc5524a90e40",
  },
  {
    name: "양념류",
    id: "e895e43f-9fec-4b34-8f35-768074aa5c99",
  },
  {
    name: "엽채류",
    id: "bfc70f34-8ec9-4ae2-8141-f0b7b6dadd26",
  },
];

export default function Create() {
  const router = useRouter();
  const [createProductDirect] = useMutation(CREATE_PRODUCT_DIRECT);

  const [category, setCategory] = useState("");
  const { data: DataId } = useQuery(FETCH_USER_LOGGED_IN);
  const handleChange = (value: SetStateAction<string>) => {
    setCategory(value);
  };
  // 이미지 프로세스
  const [fileUrls, setFileUrls] = useState([]);
  function onChangeFiles(index: number, url: string) {
    // 기존 state들을 담아줍니다.
    const newFileUrls = [...fileUrls];
    // 세개의 버튼 중 이미 사진이 들어있는 곳을 클릭했다면 덮어씌워줍니다.
    if (newFileUrls[index]) {
      newFileUrls[index] = url;
    } else {
      // 빈 곳이라면 맨 뒤에 추가해줍니다.
      newFileUrls.push(url);
    }
    // 변경된 배열을 state에 저장해줍니다.
    setFileUrls([...newFileUrls]);
  }

  const { handleSubmit, register, setValue, trigger, getValues } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p/>" ? "" : value);
    trigger("contents");
  };
  const onClickCreate = async (data: any) => {
    if (fileUrls.join(",") === "") {
      Modal.error({ content: "이미지를 첨부해주세요!" });
      return;
    }
    const result = await createProductDirect({
      variables: {
        title: data.title,
        content: data.contents,
        price: Number(data.price),
        quantity: Number(data.quantity),
        categoryId: category,
        directStoreId: DataId?.fetchUserLoggedIn.directStore.id,
        createFileInput: {
          imageUrl: fileUrls.join(","),
        },
      },
    });
    router.push(`/admin_treat`);
  };
  return (
    <CreateUI
      handleSubmit={handleSubmit}
      register={register}
      onChangeContents={onChangeContents}
      onClickCreate={onClickCreate}
      handleChange={handleChange}
      CategoryList={CategoryList}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      getValues={getValues}
    />
  );
}
