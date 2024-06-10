import styled from "@emotion/styled";

export const SelectField = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
`;

export const Subtitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.div`
  height: 52px;
  width: 100%;
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray10};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.gray20};
    border: 1px solid ${({ theme }) => theme.colors.gray50};
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: center;
  margin-top: 4px;
  padding: 20px;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.gray10};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  overflow-y: auto;
  max-height: 200px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    width: 2px;
    margin: 0 auto;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    width: 3px;
    height: 100px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.gray10};
  }
`;

export const OptionItem = styled.li`
  padding: 6px 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray30};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
