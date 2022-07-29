import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CreateUI from "./create.presenter";
import { CREATE_PRODUCT_DIRECT, FETCH_USER_LOGGED_IN } from "./create.queries";

const CategoryList = [
  {
    id: "44cc4424-eb4c-4da0-b24c-28bf60cf9bc7",
    name: "곡류",
  },
  {
    id: "b3796219-4b3f-4130-bf0f-1deb0feae810",
    name: "과일류",
  },
  {
    id: "d68644d7-efa3-4738-9175-8c3e2ad9daf6",
    name: "과채류",
  },
  {
    id: "84a3acb4-fdc5-4718-a8f3-b1d381e09c1e",
    name: "근채류",
  },
  {
    id: "b289363c-b29f-498c-b767-d12aa2523843",
    name: "버섯류",
  },
  {
    id: "eca05fa1-0c4f-43fc-aa39-0e237f443ffe",
    name: "양념류",
  },
  {
    id: "fef19348-62d0-47b5-9e7f-25fdafe59acd",
    name: "엽채류",
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
  console.log(fileUrls);

  const { handleSubmit, register, setValue, trigger, getValues } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p/>" ? "" : value);
    trigger("contents");
    console.log(value);
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
    console.log(result);
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
