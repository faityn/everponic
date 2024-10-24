export type popupListType = {
  id?: number;
  popupName?: string;
  buyerShow?: boolean;
  startDate?: string;
  endDate?: string;
  imageUrl?: string;
  number: number;
  totalPages: number;
};

export type bannerInfoType = {
  title?: string;
  text?: string;
  white_text?: string;
  white_text_type?: string;
  img?: string;
};

export type NewsType = {
  id?: number;
  title?: string;
  content?: string;
  boardFile: [
    {
      id?: number;
      file_name?: string;
      file_ext?: string;
      file_loc?: string;
    }
  ];

  createdAt?: string;
  updatedAt?: string;
};

export type GalleryType = {
  id?: number;
  title?: string;
  content?: string;
  galleryFile: [
    {
      id?: number;
      file_name?: string;
      file_ext?: string;
    }
  ];

  createdAt?: string;
  updatedAt?: string;
};

export type FaqType = {
  id?: number;
  title?: string;
  name?: string;
  email?: string;
  message?: string;
  answer?: string;
  isreplied?: boolean;

  createdAt?: string;
  updatedAt?: string;
};

export type QuestionType = {
  title?: string;
  name?: string;
  email?: string;
  message?: string;
};
