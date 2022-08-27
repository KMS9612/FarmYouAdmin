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
