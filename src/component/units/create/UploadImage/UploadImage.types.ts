import { ChangeEvent, RefObject } from "react";
import { IDataItem } from "../Edit/Edit.types";

export interface IUploadsImageUIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrl: string;
  onClickUpload: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  DataItem: any;
}

export interface IUploadsImageProps {
  fileUrls: string[];
  index: number;
  onChangeFiles: (index: number, result: string) => void;
  DataItem: IDataItem;
}
