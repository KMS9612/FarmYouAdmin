import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  handleChange: (value: SetStateAction<string>) => void;
  CategoryList: { id: string; name: string }[];
  register: UseFormRegister<FieldValues>;
  onChangeContents: (value: string) => void;
  onClickUpdate: (data: any) => void;
  isEdit: boolean;
  onChangeFiles: (index: number, url: string) => void;
  DataItem: IDataItem;
  fileUrls: any[];
  setFileUrls: Dispatch<SetStateAction<any[]>>;
  onClickMove: (move: string) => () => void;
}

export interface IDataItem {
  fetchProductDirect: {
    id: string;
    title: string;
    content: any;
    price: number;
    quantity: number;
    category: {
      id: string;
      name: string;
    };
    files: {
      url: string;
    };
  };
}
