import styled from 'styled-components';

export const AddNewButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SearchInput = styled.div`
  background: rgba(255, 255, 255, 0.26);
  input {
    width: 85%;
    height: 30px;
    margin: 5px;
    border: none;
  }
  button {
    height: 30px;
    width: 10%;
    background-color: rgba(255, 255, 255, 0.26);
    cursor: pointer;
    border: transparent;
    color: white;
  }
`;

export const AddWeatherCityWrapper = styled.div``;
export const AddWeatherCity = styled.div``;

export const AddNewWeather = styled.div`
  height: 130px;
  width: 130px;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 100px;
  cursor: pointer;
`;
export const PlusIcon = styled.img`
  width: 70px;
  padding: 30px;
`;
export const AddDescription = styled.p`
  margin: 0;
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  padding: 30px 0;
`;
