import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Email from '../../../Icons/EmailIcons';

const CustomEmailInput = ({ field, form, ...props }) => {
  return (
    <TextField
      {...field}
      {...props}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Email />
          </InputAdornment>
        ),
      }}
      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] placeholder:text-[#8897AE] focus:border-2 focus:border-custom-green"
    //   error={Boolean(form.touched[field.name] && form.errors[field.name])}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#AFBACA',
          },
          '&:hover fieldset': {
            borderColor: '#B7C1D0', 
          },
          '&.Mui-focused fieldset': {
            borderColor: '#21B546', 
            borderWidth: '2px',
          },
          '& input::placeholder': {
            color: '#8897AE', 
            fontWeight: 500, 
            fontFamily: '"Basier Circle Medium", sans-serif',
          },
        },
      }}
    />
  );
};

export default CustomEmailInput;
