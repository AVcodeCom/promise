import React from "react";
import { RadioGroup, FormControlLabel } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {
  InputCategory,
  AddButton,
  AddCategoryButton,
  RadioBtn,
  RowBox,
} from "../../componentsStyled/OpenNewCard.style";

export const Category = ({
  newCategory,
  openNewCategory,
  putNewCategory,
  categoryList,
  category,
  categoryChange,
}) => {
  const inputCategory = React.createRef();

  const handleChangeCategory = (e) => {
    const { value } = e.target;
    categoryChange(value);
  };

  console.log(category);
  return (
    <div>
      <RadioGroup
        name="category"
        value={category}
        onChange={handleChangeCategory}
      >
        {categoryList.map((item) => (
          <FormControlLabel
            key={item.id}
            value={item.name}
            control={<RadioBtn />}
            label={item.name}
          />
        ))}
      </RadioGroup>
      <AddCategoryButton onClick={() => openNewCategory()}>
        Добавить категорию
      </AddCategoryButton>
      <div>
        {newCategory ? (
          <RowBox>
            <InputCategory inputRef={inputCategory} />
            <AddButton
              onClick={() => putNewCategory(inputCategory.current.value)}
            >
              <AddBoxIcon />
            </AddButton>
          </RowBox>
        ) : null}
      </div>
    </div>
  );
};
