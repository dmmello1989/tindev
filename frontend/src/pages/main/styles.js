import styled from "styled-components";

export const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;

export const Logo = styled.img`
  width: 105px;
`;

export const List = styled.ul`
  display: grid;
  margin-top: 50px;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0 0;
`;

export const Info = styled.footer`
  flex: 1;
  padding: 15px 20px;
  text-align: left;
  border: 1px solid #eeeeee;
  border-radius: 0 0 5px 5px;
  background: #ffffff;
`;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
`;

export const Bio = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #999999;
  margin-top: 5px;
`;

export const ButtonBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  flex: 1;
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:last-child {
    margin-left: 10px;
  }

  &:hover ${Icon} {
    transform: translateY(-5px);
    transition: all 0.2s;
  }
`;

export const Empty = styled.div`
  margin-top: 300px;
  font-size: 32px;
  font-weight: 600;
  color: #999999
`;