import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Radio from './Radio';
import { action } from '@storybook/addon-actions';
import Flex from '../Flex/Flex';

/**
 * 라디오는 여러 옵션에서 단일 상태를 선택하는 데 사용됩니다.
 *
 * 일반 체크박스는 다중 선택이 가능하지만 라디오에서는 불가합니다.
 *
 * 라디오에 대한 레이블을 추가할 수 있습니다. 라디오 그룹은 동일한 name 속성을 주면 적용됩니다.
 */

export default {
  title: 'Components/Radio',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '라디오 컴포넌트',
  },
};

export const Basics = () => {
  const onChange = action('onChange');

  return (
    <Flex direction='column' gap={50}>
      <Flex>
        <Radio name='radio1' label='Option A' defaultChecked={true} onChange={onChange} />
        <Radio name='radio1' label='Option B' onChange={onChange} />
        <Radio name='radio1' label='Option C' onChange={onChange} />
        <Radio name='radio1' label='Option D' onChange={onChange} />
      </Flex>
      <Flex>
        <Radio name='radio2' label='Small Option A' size={'small'} onChange={onChange} />
        <Radio
          name='radio2'
          label='Small Option B'
          size={'small'}
          onChange={onChange}
          defaultChecked={true}
        />
        <Radio name='radio2' label='Small Option C' size={'small'} onChange={onChange} />
        <Radio name='radio2' label='Small Option D' size={'small'} onChange={onChange} />
      </Flex>
      disabled radio group
      <Flex>
        <Radio name='radio2' label='Small Option A' size={'small'} onChange={onChange} disabled />
        <Radio
          name='radio2'
          label='Small Option B'
          size={'small'}
          onChange={onChange}
          defaultChecked={true}
          disabled
        />
        <Radio name='radio2' label='Small Option C' size={'small'} onChange={onChange} disabled />
        <Radio name='radio2' label='Small Option D' size={'small'} onChange={onChange} disabled />
      </Flex>
    </Flex>
  );
};

export const WithKnobs = () => {
  const labelsKnobs = {
    label1: text('label 1', 'A'),
    label2: text('label 2', 'B'),
    label3: text('label 3', 'C'),
    label4: text('label 4', 'D'),
    label5: text('label 5', 'E'),
  };

  const labels = Object.values(labelsKnobs);

  const defaultCheckedOption = select('defaultCheckedOption', labels, labels[0]);

  return (
    <Flex>
      {labels.map((item) => (
        <Radio
          name={'radio'}
          size={select('size', ['small', 'medium'], 'medium')}
          disabled={boolean('disabled', false)}
          label={item}
          defaultChecked={defaultCheckedOption === item}
        />
      ))}
    </Flex>
  );
};
