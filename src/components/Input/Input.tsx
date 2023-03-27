import TextArea, { MultiLineInputProps } from './Textarea';
import TextField, { SingleLineInputProps } from './TextField';

function Input({ multiline = false, ...props }: SingleLineInputProps | MultiLineInputProps) {
  if (multiline) {
    return <TextArea {...(props as MultiLineInputProps)} />;
  } else {
    return <TextField {...(props as SingleLineInputProps)} />;
  }
}

export default Input;
