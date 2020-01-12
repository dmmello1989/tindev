import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/logo.png";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import * as S from "./styles";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: { user: match.params.id }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    })

    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <S.Container>
      <Link to="/">
        <S.Logo src={logo} alt="Tindev" />
      </Link>
        { users.length > 0 ? (
          <S.List>
            {users.map(user => (
              <S.Item key={user._id}>
                <S.Avatar src={user.avatar} alt={user.name} />
                <S.Info>
                  <S.Name>{user.name}</S.Name>
                  <S.Bio>{user.bio}</S.Bio>
                </S.Info>
                <S.ButtonBox>
                  <S.Button type="button" onClick={() => handleDislike(user._id)}>
                    <S.Icon src={dislike} alt="Dislike" isDislike />
                  </S.Button>
                  <S.Button type="button" onClick={() => handleLike(user._id)}>
                    <S.Icon src={like} alt="Like" />
                  </S.Button>
                </S.ButtonBox>
              </S.Item>
            ))}
          </S.List>
        ) : (
          <S.Empty>Acabou :(</S.Empty>
        )}
    </S.Container>
  )
};