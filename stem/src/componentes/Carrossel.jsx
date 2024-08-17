import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const Container = styled.div``;
const Titulo = styled.h1``;

const SlidesItems = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

export const Carrossel = () => {
  const data = [
    {
      id: "1",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png",
    },

    {
      id: "2",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png",
    },

    {
      id: " 3",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/03/Frame-321.png",
    },

    {
      id: "4",
      image:
        "https://sujeitoprogramador.com/wp-content/uploads/2022/01/thumb-1.png",
    },
  ];

  return (
    <>
      <Container>
        <Titulo>Confira abaixo os projetos dos nossos alunos!</Titulo>

        <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
          {data.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <SwiperSlide key={item.id}>
                <SlidesItems src={item.image} alt="Slider" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};
