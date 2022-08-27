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
    id: "40c5c645-66c8-462c-986c-75b401126656",
    name: "곡류",
  },
  {
    id: "2144df70-c36d-45fc-904e-d790d5631d25",
    name: "과일류",
  },
  {
    id: "d30bfec3-09fe-4d53-b821-65ec53781b07",
    name: "과채류",
  },
  {
    id: "d7ac5587-5aa9-4d37-a515-f8f8e6ba9dab",
    name: "근채류",
  },
  {
    id: "f7018fb6-dcd9-474e-93a0-b23e4267adc5",
    name: "버섯류",
  },
  {
    id: "ef426836-02ae-46d8-a715-d71ad1af1ba3",
    name: "양념류",
  },
  {
    id: "0c66bf51-5766-46d4-8eef-52f6bddba181",
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
