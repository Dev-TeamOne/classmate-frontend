import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Result from '@components/Result';
import Flex from '@components/Flex/Flex';
import Button from '@components/Button';

/**
 * Result는 일련의 운영 작업 결과를 피드백하는 데 사용됩니다.
 *
 * 중요한 작업이 결과를 처리하도록 사용자에게 알려야 하고 피드백이 더 복잡할 때 사용합니다.
 * Result의 사이즈는 부모 요소에 fit하게 들어가며 사용자 지정 사이즈 설정 시 style 속성을 추가해야 합니다.
 */

export default {
  title: 'Components/Result',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Result 컴포넌트',
  },
};

export const Basics = () => {
  return (
    <Flex direction='column' gap={50} style={{ width: '700px' }}>
      <Result
        title='Empty polls !'
        subTitle={'You can add polls by following upper steps.'}
        status='info'
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button size='small'>Button 1</Button>
          <Button size='small' variant='outlined'>
            Button 2
          </Button>
        </div>
      </Result>
    </Flex>
  );
};

export const WithStatus = () => {
  return (
    <Flex direction='column' gap={50} style={{ width: '400px' }}>
      <Result
        title='Empty polls !'
        subTitle={'You can add polls by following upper steps.'}
        status='info'
      />
      <Result
        title='Empty polls !'
        subTitle={'You can add polls by following upper steps.'}
        status='warning'
      />
      <Result
        title='Empty polls !'
        subTitle={'You can add polls by following upper steps.'}
        status='error'
      />
      <Result
        title='Empty polls !'
        subTitle={'You can add polls by following upper steps.'}
        status='success'
      />
    </Flex>
  );
};
