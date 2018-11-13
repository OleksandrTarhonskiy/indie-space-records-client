import React              from 'react';
import styled             from 'styled-components';
import TextField          from '@material-ui/core/TextField';
import InputLabel         from '@material-ui/core/InputLabel';
import FormControl        from '@material-ui/core/FormControl';
import Input              from '@material-ui/core/Input';
import Select             from '@material-ui/core/Select';
import MenuItem           from '@material-ui/core/MenuItem';
import Paper              from '@material-ui/core/Paper';

import { PRODUCTS_TYPES } from '../models/types';
import GradientButton     from '../../../layouts/gradient_button';

const AddProductForm = () => (
  <AddProductForm.FormWrapper>
    <AddProductForm.Section>
      <h2>About product:</h2>
      <AddProductForm.SelectWrapper>
        <InputLabel
          ref={ref => {
            this.InputLabelRef = ref;
          }}
          htmlFor="type"
        >
          Type of product
        </InputLabel>
        <Select
          value={'none'}
          input={
            <Input
              name="type"
              id="type"
            />
          }
        >
          { PRODUCTS_TYPES.map((t, index) => <MenuItem key={index} value={t}>{t}</MenuItem>) }
        </Select>
      </AddProductForm.SelectWrapper>
      <TextField
        name="title"
        label="Title"
        type="text"
        margin="normal"
        value=""
        fullWidth
      />
      <TextField
        name="description"
        label="Description"
        type="text"
        margin="normal"
        value=""
        multiline={true}
        fullWidth
      />
      <h3>Upload product image:</h3>
      <GradientButton
        text={'Upload image'}
      />
    </AddProductForm.Section>
    <AddProductForm.Section>
      <h2>Pricing:</h2>
      <AddProductForm.PriceBlock>
        <TextField
          label="Price"
          value={0}
          name="price"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <AddProductForm.PriceDesc>
          for 1 unit
        </AddProductForm.PriceDesc>
      </AddProductForm.PriceBlock>
    </AddProductForm.Section>
  </AddProductForm.FormWrapper>
);

AddProductForm.FormWrapper = styled.form`
  font-family : 'Roboto', sans-serif;
  color       : #374142;
`;

AddProductForm.Section = styled(Paper)`
  margin  : 2%;
  padding : 2%;
`;

AddProductForm.SelectWrapper = styled(FormControl)`
  width : 100%;
`;

AddProductForm.PriceBlock = styled.div`
  display        : flex;
  flex-direction : row;
`;

AddProductForm.PriceDesc = styled.p`
  margin : 3%;
`;

export default AddProductForm;
