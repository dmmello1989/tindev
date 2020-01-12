import React, { useState } from "react";
import * as S from "./styles";
import logo from "../../assets/logo.png";
import api from "../../services/api";

export default function Login({ history }) {
  const [ username, setUsername ] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username,
    });
    const { _id } = response.data;

    console.log(response)

    history.push(`/dev/${_id}`);
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Logo src={logo} alt="Tindev" />
        <S.Input 
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Digite seu usuário no Github" />
        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
};
