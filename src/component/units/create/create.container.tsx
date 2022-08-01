import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CreateUI from "./create.presenter";
import { CREATE_PRODUCT_DIRECT, FETCH_USER_LOGGED_IN } from "./create.queries";

const CategoryList = [
  {
    id: "20d5ed94-31e9-4931-bdcd-f0c5826506d6",
    name: "곡류",
  },
  {
    id: "47a49dfb-65d6-4257-aa04-0bbe31b9d479",
    name: "과일류",
  },
  {
    id: "cc1b8948-caf0-4988-aff7-46fd231b98b8",
    name: "과채류",
  },
  {
    id: "6723bbc2-4518-43d1-a7c8-08f570bb56d3",
    name: "근채류",
  },
  {
    id: "3de5da83-c357-481c-87c4-d634205b3945",
    name: "버섯류",
  },
  {
    id: "36a90dad-6444-442d-bd52-e17060606b42",
    name: "양념류",
  },
  {
    id: "1c90cabf-6132-4970-ab3f-63eb6f4ca0e1",
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
