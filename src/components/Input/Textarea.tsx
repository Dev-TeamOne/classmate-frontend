import React, {
  Children,
  cloneElement,
  ReactElement,
  TextareaHTMLAttributes,
  useState,
} from 'react';
import styled from 'styled-components';

export interface MultiLineInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline?: boolean;
  rightAddon?: ReactElement;
  disabled?: boolean;
}

function TextArea(props: MultiLineInputProps) {
  const {
    placeholder = '플레이스 홀더',
    disabled = false,
    rightAddon,
    maxLength = 160,
    cols = 80,
    rows = 1,
    ...rest
  } = props as MultiLineInputProps;
  const right = rightAddon != null ? Children.only(rightAddon) : null;
  const [textCount, setTextCount] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.target.value.length);
  };

  return (
    <TextareaWrapper disabled={disabled} rightAddon={rightAddon}>
      <textarea
        onChange={onInputHandler}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        disabled={disabled}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{ height: textCount > 0 ? '4em' : undefined }}
        {...(rest as MultiLineInputProps)}
      />
      {right != null
        ? cloneElement(right, {
            ...right.props,
            className: 'textarea-icon',
          })
        : null}
      {isFocused && <span className='text-count-label'>{textCount}/160</span>}
    </TextareaWrapper>
  );
}

export default TextArea;

type TextareaWrapperType = Pick<MultiLineInputProps, 'disabled' | 'rightAddon'>;

const TextareaWrapper = styled.div<TextareaWrapperType>`
  position: relative;

  .textarea-icon {
    position: absolute;
    top: 50%;
    transform: translate(-150%, -50%);
    pointer-events: ${(props) => (props.disabled ? 'none' : 'inherit')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    cursor: pointer;

    svg {
      [fill] {
        &:not([fill='none']) {
          fill: ${({ theme }) => theme.colors.grey1};
        }
      }

      [stroke] {
        &:not([stroke='none']) {
          stroke: ${({ theme }) => theme.colors.grey1};
        }
      }
    }

    :hover {
      svg {
        [fill] {
          &:not([fill='none']) {
            fill: ${({ theme }) => theme.colors.primary1};
          }
        }

        [stroke] {
          &:not([stroke='none']) {
            stroke: ${({ theme }) => theme.colors.primary1};
          }
        }
      }
    }
  }

  textarea:hover:not(:disabled) + .textarea-icon,
  textarea:focus:not(:disabled) + .textarea-icon,
  textarea:active:not(:disabled) + .textarea-icon {
    svg {
      [fill] {
        &:not([fill='none']) {
          fill: ${({ theme }) => theme.colors.primary1};
        }
      }

      [stroke] {
        &:not([stroke='none']) {
          stroke: ${({ theme }) => theme.colors.primary1};
        }
      }
    }
  }

  textarea {
    width: 900px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey3};
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.titleActive};
    resize: none;
    padding: 19px 50px 19px 8px;
    font-size: ${({ theme }) => theme.typo.small};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-family: 'Noto Sans KR', sans-serif;
    overflow-y: hidden;
    overflow: hidden;

    ::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.offWhite};
      cursor: not-allowed;
    }

    :hover:not(:disabled),
    :focus:not(:disabled),
    :active:not(:disabled) {
      outline: none !important;
      border-color: ${({ theme }) => theme.colors.primary1};
      box-shadow: 0 0 2.5px ${({ theme }) => theme.colors.primary1};
    }

    :focus {
      height: 4em;
    }
  }

  .text-count-label {
    position: absolute;
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: ${({ theme }) => theme.fontWeight.text};
    font-size: ${({ theme }) => theme.typo.xsmall};
    bottom: 10px;
    right: 20px;
  }
`;
