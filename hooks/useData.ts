import { QuestionType } from "@src/components/types";

export const getNewsList = async (page: number, size: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/list?page=${page}&limit=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getNewsDetail = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/boardInfo/${id}`,
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getGalleryList = async (page: number, size: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/list?page=${page}&limit=${size}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getGalleryDetail = async (id: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/gallery/${id}`,
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        redirect: "follow",
      }
    );
    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getFaqList = async (page: number, size: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/faq/answers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const sendQuestion = async (sendData: QuestionType) => {
  const raw = JSON.stringify({
    title: sendData?.title,
    name: sendData?.name,
    email: sendData?.email,
    message: sendData?.message,
    isactive: true,
  });
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faq`, {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });
    console.log(response);

    const data = await response.text();
    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getCreersList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/careers/list?page=1&limit=20&order=newest`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      }
    );

    const data = await response.json();

    return { status: response.ok, result: data };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
