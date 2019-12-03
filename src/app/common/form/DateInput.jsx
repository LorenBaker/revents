import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({
  input,
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? new Date(input.value) : new Date()}
        onChnge={input.onChnge}
        onBlur={input.onBlur}
        onChangeRaw={e => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color='red'>
          {' '}
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default DateInput;

// import React from 'react';
// import { Form, Label } from 'semantic-ui-react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DateInput = ({
//   input,
//   width,
//   placeholder,
//   meta: { touched, error },
//   ...rest
// }) => {
//   return (
//     <Form.Field error={touched && !!error} width={width}>
//       <DatePicker
//         {...rest}
//         placeholderText={placeholder}
//         // new Date(input.value) creates a javaScript date
//         selected={input.value ? new Date(input.value) : null}
//         onChange={input.onChange}
//       />
//       {touched && error && <Label basic color='red'>{error}</Label>}
//     </Form.Field>
//   );
// };

// export default DateInput;
