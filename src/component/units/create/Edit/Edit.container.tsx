/* eslint-disable react-hooks/exhaustive-deps */
import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { IsEditState } from "../../../../commons/store";
import EditUI from "./Edit.presenter";

import {
  FETCH_PRODUCT_DIRECT,
  FETCH_USER_LOGGED_IN,
  UPDATE_PRODUCT_DIRECT,
} from "./Edit.queries";

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

export default function Edit(): any {
  const router = useRouter();

  const [isEdit, setIsEdit] = useRecoilState(IsEditState);

  const [category, setCategory] = useState("");
  const [updateProductDirect] = useMutation(UPDATE_PRODUCT_DIRECT);
  const { data: DataId } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: DataItem, loading } = useQuery(FETCH_PRODUCT_DIRECT, {
    variables: {
      productId: router.query.directId,
    },
  });

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

  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br><p/>" ? "" : value);
    trigger("contents");
    console.log(value);
  };

  const onClickUpdate = async (data: any) => {
    try {
      const Update = await updateProductDirect({
        variables: {
          productId: router.query.directId,
          title:
            data.title === "" ? DataItem?.fetchProductDirect.title : data.title,
          content:
            data.content === ""
              ? DataItem?.fetchProductDirect.content
              : String(data.contents),
          price:
            data.price === ""
              ? Number(DataItem?.fetchProductDirect.price)
              : Number(data.price),
          quantity:
            data.quantity === ""
              ? Number(DataItem?.fetchProductDirect.quantity)
              : Number(data.quantity),
          categoryId:
            category === ""
              ? DataItem?.fetchProductDirect.category.id
              : category,
          createFileInput: {
            imageUrl: fileUrls.join(","),
          },
        },
      });
      router.push(`/admin_treat`);
      console.log(Update);
    } catch (e) {
      Modal.error({ content: "수정에 실패했습니다." });
    }
  };
  const onClickMove = (move: string) => () => {
    router.push(move);
  };
  return loading ? (
    ""
  ) : (
    <EditUI
      onClickMove={onClickMove}
      setFileUrls={setFileUrls}
      handleSubmit={handleSubmit}
      register={register}
      onChangeContents={onChangeContents}
      onClickUpdate={onClickUpdate}
      handleChange={handleChange}
      CategoryList={CategoryList}
      isEdit={isEdit}
      onChangeFiles={onChangeFiles}
      fileUrls={fileUrls}
      DataItem={DataItem}
    />
  );
}
