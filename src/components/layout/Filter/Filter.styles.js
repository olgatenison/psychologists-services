import styled from "@emotion/styled";

export const FilterContainer = styled.div`
  position: relative;
  width: 230px;
`;

export const FilterLabel = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.grey};
  padding-top: 64px;
`;

export const Dropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.div`
  height: 40px;
  padding: 14px 18px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 14px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main_accent};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.hoverred_accent};
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  padding: 0;
  list-style: none;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const OptionItem = styled.li`
  padding: 4px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray30};
  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;
