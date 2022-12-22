import styled from 'styled-components';

export const AddNewButton = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AddWeatherCityWrapper = styled.div`
  border-radius: 25px;
`;

export const SearchInput = styled.div`
  background: rgba(255, 255, 255, 0.26);
  border-radius: 20px;
  padding-left: 2px;

  input {
    width: 85%;
    height: 30px;
    margin: 5px 3px;
    border: none;
    border-radius: 15px;
    padding: 0 0 0 10px;
  }
  button {
    height: 32px;
    width: 10%;
    background-color: rgba(255, 255, 255, 0.26);
    cursor: pointer;
    border: transparent;
    border-radius: 25px;
  }
`;
export const SearchIconWrapper = styled.img`
  width: 15px;
  height: 15px;
  margin: -1px;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90%;
`;

export const Spinner = styled.div`
  img {
    animation-name: spin;
    animation-duration: 3000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
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
